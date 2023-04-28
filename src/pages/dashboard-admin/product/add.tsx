import React from "react";
import DashboardWrapper from "@/components/layouts/DashboardWrapper";
import { useSession, getSession } from "next-auth/react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import FormikInput from "@/components/inputs/FormikInput";
import MultiUpload from "@/components/inputs/MultiUpload";
import Button from "@/components/buttons/Button";
import FormikSelect from "@/components/inputs/FormikSelect";
import FormikTextArea from "@/components/inputs/FormikTextArea";
import Axios from "axios";
import { toast } from "react-toastify";

const validationSchema = yup.object({
  title: yup.string().required(),
  description: yup.string().required(),
  stock: yup.number().required(),
  price: yup.number().required(),
  images: yup
    .array()
    .max(10, "At most 10 photoss are allowed")
    .min(4, "At least 4 photoss are allowed")
    .required("Provide at least 4 images"),
  category: yup.string().required(),
});

const Index = ({ categories }: any) => {
  const { data: session } = useSession();

  return (
    <DashboardWrapper title="Add Product">
      {/* <div>Products</div> */}
      <div className="w-52">
        <div>
          <Formik
            initialValues={{
              title: "",
              description: "",
              category: "",
              stock: 0,
              price: 0,
              images: [],
            }}
            validationSchema={validationSchema}
            onSubmit={async (values, submitProps) => {
              //   await delay(5000);
              try {
                await Axios.post(
                  "/api/products",
                  { ...values, seller: session?.user?.id },
                  {
                    headers: {
                      Accept: "application/json",
                      "Content-Type": "application/json",
                    },
                  }
                );

                toast("Product created successfully", {
                  hideProgressBar: true,
                  // autoClose: 2000,
                  type: "success",
                });
              } catch (error) {
                toast("Product creation failed", {
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
                      name="title"
                      label="Product Title"
                      placeholder="Title"
                    />
                    <FormikInput
                      type="number"
                      name="price"
                      label="Product Price (N)"
                      placeholder="Price"
                    />
                    <FormikInput
                      type="number"
                      name="stock"
                      label="Stock quantity"
                      placeholder="Stock quantity"
                    />
                    <FormikTextArea
                      name="description"
                      label="Description"
                      placeholder="Description"
                    />
                    <FormikSelect
                      name="category"
                      label="Product Category"
                      options={categories.map(
                        (category: any) => `${category.name} ${category.id}`
                      )}
                    />
                    <MultiUpload name="images" label="Add Photos" id="images" />
                    <Button
                      type="submit"
                      isLoading={formik.isSubmitting}
                      disabled={!formik.isValid || formik.isSubmitting}
                    >
                      Create Product
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

  const response = await Axios.get(
    `http${process.env.NODE_ENV === "production" ? "s" : ""}://${
      context.req.headers.host
    }/api/categories`
  );
  const categories = response.data.categories;
  //   console.log(request);

  return {
    props: { session, categories },
  };
}

export default Index;
