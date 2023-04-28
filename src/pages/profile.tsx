import { useState } from "react";
import Image from "next/image";
// import Accordion from "@/components/customs/Accordion";
import Button from "@/components/buttons/Button";
// import Link from "next/link";
import { FiLogOut } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
// import Label from "@/components/customs/Label";
// import { IoIosArrowForward } from "react-icons/io";
import FormikPasswordInput from "@/components/inputs/FormikPasswordInput";
import FormikTextInput from "@/components/inputs/FormikTextInput";
import ProfileLayout from "@/components/layouts/ProfileLayout";
import MainLayout from "@/components/layouts/MainLayout";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { storage } from "@/firebase";
import { v4 } from "uuid";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import * as yup from "yup";
import Axios from "axios";
import { useSession, getSession } from "next-auth/react";
import { Formik, Form } from "formik";
import { signOut } from "next-auth/react";

const profileValidationSchema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().required(),
  dob: yup.string().required(),
  phoneNumber: yup.string().required(),

  // password: yup.string().required(),
});

const changePasswordValidationSchema = yup.object({
  password: yup.string().required(),
  confirmPassword: yup.string().required(),
});

const Profile = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [img, setImg] = useState<any>(null);
  const [preview, setPreview] = useState<any>();

  // console.log(session?.user?.avatar);

  const upload = async (img: any) => {
    if (!img) return;

    try {
      let imgRef = ref(storage, `images/${img.name}-${v4()}`);

      const snapshot = await uploadBytes(imgRef, img);
      const url = await getDownloadURL(snapshot.ref);

      await Axios.patch(`/api/users/${session?.user?.id}`, { avatar: url });

      toast("Picture uploaded", {
        hideProgressBar: true,
        // autoClose: 2000,
        type: "success",
      });
    } catch (err) {
      toast("Upload failed", {
        hideProgressBar: true,
        // autoClose: 2000,
        type: "error",
      });
      console.log(err);
    }
  };

  const deleteImg = async (img: any) => {
    if (!img) return;

    try {
      let imgRef = ref(storage, img);

      await deleteObject(imgRef);

      await Axios.patch(`/api/users/${session?.user?.id}`, { avatar: "" });

      toast("Picture deleted", {
        hideProgressBar: true,
        // autoClose: 2000,
        type: "success",
      });
    } catch (err) {
      toast("Deletion failed", {
        hideProgressBar: true,
        // autoClose: 2000,
        type: "error",
      });
      console.log(err);
    }
  };

  return (
    <MainLayout>
      <ProfileLayout
        title="Profile"
        rightItem={
          <Button
            variant="outlined"
            leftIcon={<FiLogOut />}
            onClick={() => {
              signOut({
                callbackUrl: `${window.location.origin}`,
              });
            }}
          >
            Logout
          </Button>
        }
      >
        <>
          <h3>Personal Information</h3>
          <div>
            <div className="flex items-end gap-x-2">
              <label
                htmlFor="file"
                className="relative w-20 h-20 overflow-hidden rounded-full cursor-pointer"
              >
                <Image
                  src={preview || session?.user?.avatar || "/avatar.svg"}
                  alt=""
                  fill
                  objectFit="cover"
                />
                <input
                  type="file"
                  className="hidden"
                  id="file"
                  onChange={(e: any) => {
                    setImg(e.target.files[0]);
                    setPreview(URL.createObjectURL(e.target.files[0]));
                  }}
                />
              </label>
              <Button onClick={async () => upload(img)}>Upload</Button>
              <Button
                onClick={async () => deleteImg(session?.user?.avatar)}
                variant="outlined"
                leftIcon={<RiDeleteBin5Line />}
              >
                Delete
              </Button>
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-y-2">
            <Formik
              initialValues={{
                firstName: session?.user?.firstName,
                lastName: session?.user?.lastName,
                email: session?.user?.email,
                dob: session?.user?.dob,
                phoneNumber: session?.user?.phoneNumber,
              }}
              validationSchema={profileValidationSchema}
              onSubmit={async (values, submitProps) => {
                //   await delay(5000);
                alert(JSON.stringify(values));

                try {
                  await Axios.patch(
                    `/api/users/${session?.user?.id}`,
                    { ...values },
                    {
                      headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                      },
                    }
                  );

                  toast("Updated successfully", {
                    hideProgressBar: true,
                    type: "success",
                  });
                } catch (error) {
                  toast("Update failed", {
                    hideProgressBar: true,
                    type: "error",
                  });
                } finally {
                  submitProps.setSubmitting(false);
                  submitProps.resetForm();
                }
              }}
            >
              {(formik) => {
                return (
                  <Form>
                    <div className="flex flex-col gap-y-2 mt-2">
                      <FormikTextInput name="firstName" label="First Name" />
                      <FormikTextInput name="lastName" label="Last Name" />
                      <FormikTextInput name="email" label="Email" />
                      <FormikTextInput name="dob" label="Date Of Birth" />
                      <FormikTextInput
                        name="phoneNumber"
                        label="Phone Number"
                      />
                      <Button
                        type="submit"
                        isLoading={formik.isSubmitting}
                        disabled={!formik.isValid || formik.isSubmitting}
                      >
                        Save
                      </Button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
          <div className="mt-4">
            <h3>Change Password</h3>
            <div className="mt-4 flex flex-col gap-y-2">
              <Formik
                initialValues={{
                  password: "",
                  confirmPassword: "",
                }}
                validationSchema={changePasswordValidationSchema}
                onSubmit={async (values, submitProps) => {
                  //   await delay(5000);
                  alert(JSON.stringify(values));
                }}
              >
                {(formik) => {
                  return (
                    <Form>
                      <div className="flex flex-col gap-y-2 mt-2">
                        <FormikPasswordInput
                          name="password"
                          label="New Password"
                        />
                        <FormikPasswordInput
                          name="confirmPassword"
                          label="Confirm Password"
                        />

                        <Button
                          type="submit"
                          isLoading={formik.isSubmitting}
                          disabled={!formik.isValid || formik.isSubmitting}
                        >
                          Save
                        </Button>
                      </div>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </div>
          {/* <div className="flex justify-end">
            <Button>Save Changes</Button>
          </div> */}
        </>
      </ProfileLayout>
    </MainLayout>
  );
};

export async function getServerSideProps(context: any) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default Profile;
