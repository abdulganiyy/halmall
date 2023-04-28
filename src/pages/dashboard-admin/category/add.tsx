import React from "react";
import DashboardWrapper from "@/components/layouts/DashboardWrapper";
import { useSession, getSession } from "next-auth/react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import FormikInput from "@/components/inputs/FormikInput";
import Button from "@/components/buttons/Button";
import Axios from "axios";
import { toast } from "react-toastify";

const validationSchema = yup.object({
  name: yup.string().required(),
  //   description: yup.string().required(),
});

const Index = () => {
  return (
    <DashboardWrapper title="Create Category">
      {/* <div>Create Category</div> */}
      <div className="w-52">
        <div>
          <Formik
            initialValues={{ name: "" }}
            validationSchema={validationSchema}
            onSubmit={async (values, submitProps) => {
              //   await delay(5000);

              try {
                await Axios.post("/api/categories", values, {
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                });

                toast("Category created successfully", {
                  hideProgressBar: true,
                  // autoClose: 2000,
                  type: "success",
                });
              } catch (error) {
                toast("Category creation failed", {
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
                      name="name"
                      label="Category Name"
                      placeholder="Category Name"
                    />
                    {/* <FormikInput
                      name="description"
                      label="Description"
                      placeholder="Description"
                    /> */}

                    <Button
                      type="submit"
                      isLoading={formik.isSubmitting}
                      disabled={!formik.isValid || formik.isSubmitting}
                    >
                      Create Category
                    </Button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </DashboardWrapper>
  );
};

export async function getServerSideProps(context: any) {
  const session = await getSession(context);

  if (!session || session?.user?.role !== "admin") {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default Index;
