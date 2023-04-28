import React from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import H2 from "@/components/typography/H2";
import FormikInput from "@/components/inputs/FormikInput";
import Button from "@/components/buttons/Button";
import MainLayout from "@/components/layouts/MainLayout";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import Axios from "axios";
import { signIn } from "next-auth/react";
import { useSession, getSession } from "next-auth/react";

const signupValidationSchema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required(),
});

const Signup = () => {
  const router = useRouter();
  return (
    <MainLayout>
      <div className="flex justify-center p-5">
        <div className="max-w-[500px]">
          <H2>Sign Up</H2>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
            }}
            validationSchema={signupValidationSchema}
            onSubmit={async (values, submitProps) => {
              //   await delay(5000);

              try {
                await Axios.post(
                  "/api/signup",
                  { ...values, role: "admin" },
                  {
                    headers: {
                      Accept: "application/json",
                      "Content-Type": "application/json",
                    },
                  }
                );
                // alert(JSON.stringify(response.data));
                const res: any = await signIn("credentials", {
                  redirect: false,
                  email: values.email,
                  password: values.password,
                  callbackUrl: `${window.location.origin}`,
                });

                res.error
                  ? toast("Sign up failed", {
                      hideProgressBar: true,
                      // autoClose: 2000,
                      type: "error",
                    })
                  : router.push("/dashboard-admin");
              } catch (error) {
                toast("Sign up failed", {
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
                    <FormikInput
                      type="firstName"
                      name="firstName"
                      label="First Name"
                      placeholder="First Name"
                    />
                    <FormikInput
                      type="lastName"
                      name="lastName"
                      label="Last Name"
                      placeholder="Last Name"
                    />
                    <FormikInput
                      type="email"
                      name="email"
                      label="Email"
                      placeholder="Email"
                    />
                    <FormikInput
                      type="password"
                      name="password"
                      label="Pasword"
                      placeholder="Password"
                    />
                    <Button
                      type="submit"
                      isLoading={formik.isSubmitting}
                      disabled={!formik.isValid || formik.isSubmitting}
                    >
                      Sign up
                    </Button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </MainLayout>
  );
};

export async function getServerSideProps(context: any) {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/dashboard-admin",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default Signup;
