import React, { FC } from "react";
import { useField } from "formik";
import PasswordInput from "./PasswordInput";

interface FormikPasswordInputProps {
  name: string;
  label: string;
}
const FormikPasswordInput: FC<FormikPasswordInputProps> = ({
  label,
  ...props
}) => {
  const [field, meta, helpers] = useField(props);

  return (
    <div>
      <PasswordInput label={label} placeholder={label} {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="text-red-600">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default FormikPasswordInput;
