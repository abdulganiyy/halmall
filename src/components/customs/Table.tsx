import React, { FC } from "react";

interface TableProps {
  titles?: string[];
  items?: {
    [key: string]: any;
  }[];
}

const Table: FC<TableProps> = ({
  titles = ["ID", "CUSTOMER", "STATUS", "TOTAL"],
  items = new Array(2)
    .fill([
      { id: "5648", customer: "Joseph Wheeler", status: "Pending", total: 543 },
      {
        id: "5648",
        customer: "Joseph Wheeler",
        status: "Completed",
        total: 543,
      },
      { id: "5648", customer: "Joseph Wheeler", status: "Paid", total: 543 },
    ])
    .flat(),
}) => {
  return (
    <div className="w-full">
      <table className="w-full">
        <thead className="w-full">
          <tr className="bg-[#F8F9FA] text-[#8B909A]">
            {titles.map((title, id) => (
              <th key={id} className="p-2 text-left">
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="w-full bg-white">
          {items.map((item, i) => (
            <tr key={i}>
              <td className="p-2 text-left">{`#${item.id}`}</td>
              <td className="p-2 text-left">{item.customer}</td>
              <td className="p-2 text-left">{item.status}</td>
              <td className="p-2 text-left">{item.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
