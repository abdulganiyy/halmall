import React, { FC, HTMLAttributes } from "react";
import { useField } from "formik";
import Select from "./Select";

interface FormikSelectProps extends HTMLAttributes<HTMLSelectElement> {
  name: string;
  label?: string;
  options: string[];
  //   options: { key: string; value: string }[];
}

const FormikSelect: FC<FormikSelectProps> = ({ ...props }) => {
  const [field, meta, helpers] = useField(props);

  return (
    <div>
      <Select
        {...field}
        {...props}
        className={`bg-gray-100 px-2 outline-0 rounded-md min-w-[328px] py-4`}
      />
      {meta.touched && meta.error ? (
        <div className="text-red-600">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default FormikSelect;
