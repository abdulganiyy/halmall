import React from "react";
import DashboardWrapper from "@/components/layouts/DashboardWrapper";
import Axios from "axios";
import Link from "next/link";
import { getSession, useSession } from "next-auth/react";

const Index = ({ categories }: any) => {
  return (
    <DashboardWrapper title="All Categories">
      <div>
        <Link
          href="/dashboard-admin/category/add"
          className="bg-[#1B4B66] text-white hover:bg-[#639599] focused:border-0.5 focused:border-[#639599] disabled:bg-[#F1F1F1] disabled:text-[#B6B6B6] rounded-md p-2"
        >
          Add New Category
        </Link>
      </div>
      <div className="flex flex-col gap-y-2 mt-4">
        {categories.map((category: any) => (
          <div key={category.id}>{category.name}</div>
        ))}
      </div>
    </DashboardWrapper>
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
