import React from "react";
import DashboardWrapper from "@/components/layouts/DashboardWrapper";
import Table from "@/components/customs/Table";
import LineChart from "@/components/charts/LineChart";
import H2 from "@/components/typography/H2";
import { useSession, getSession } from "next-auth/react";

const Index = () => {
  return (
    <DashboardWrapper>
      <div>
        <div className="md:grid grid-cols-3 gap-x-4">
          <div className="bg-white rounded-md h-50">
            <LineChart title="Total Orders In the Past 7 days" />
          </div>
          <div className="bg-white rounded-md h-50">
            {" "}
            <LineChart title="Total Users In the Past 7 days" />
          </div>
          <div className="bg-white rounded-md h-50">
            {" "}
            <LineChart title="Total Sellers In the Past 7 days" />
          </div>
        </div>
        <div className="md:grid grid-cols-2 gap-x-4 mt-4">
          <div className="p-4 bg-white rounded-md">
            <div className="my-2">
              <h4 className="text-[18px] text-[] leading-[26px]">
                Recent Orders
              </h4>
            </div>
            <Table />
          </div>
          <div className="p-4 bg-white rounded-md">
            <div className="my-2">
              <h4 className="text-[18px] text-[] leading-[26px]">
                Recent Orders
              </h4>
            </div>
            <Table />
          </div>
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
