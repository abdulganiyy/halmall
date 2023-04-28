import React, { FC, InputHTMLAttributes } from "react";
import { useField } from "formik";
import Input from "./Input";

interface FormikInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const FormikInput: FC<FormikInputProps> = ({
  label,
  placeholder,
  ...props
}) => {
  const [field, meta, helpers] = useField(props);
  return (
    <>
      <Input label={label} placeholder={placeholder} {...props} {...field} />
      {meta.touched && meta.error ? (
        <div className="text-red-600">{meta.error}</div>
      ) : null}
    </>
  );
};

export default FormikInput;
