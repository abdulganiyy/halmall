import React from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import H2 from "@/components/typography/H2";
import FormikInput from "@/components/inputs/FormikInput";
import Button from "@/components/buttons/Button";
import MainLayout from "@/components/layouts/MainLayout";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import { useSession, getSession } from "next-auth/react";
// import Axios from "axios";

const loginValidationSchema = yup.object({
  email: yup.string().required(),
  password: yup.string().required(),
});

const Signin = () => {
  const router = useRouter();
  return (
    <MainLayout>
      <div className="flex justify-center p-5">
        <div className="max-w-[500px]">
          <H2>Sign In</H2>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginValidationSchema}
            onSubmit={async (values, submitProps) => {
              //   await delay(5000);

              try {
                const res: any = await signIn("credentials", {
                  redirect: false,
                  email: values.email,
                  password: values.password,
                  callbackUrl: `${window.location.origin}`,
                });

                res.error
                  ? toast("Sign in failed", {
                      hideProgressBar: true,
                      // autoClose: 2000,
                      type: "error",
                    })
                  : router.push("/");
              } catch (error) {
                toast("Sign in failed", {
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
                      Login
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

  if (session?.user?.role === "user") {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  } else if (session?.user?.role === "seller") {
    return {
      redirect: {
        destination: "/dashboard-seller",
        permanent: false,
      },
    };
  } else if (session?.user?.role === "admin") {
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

export default Signin;
