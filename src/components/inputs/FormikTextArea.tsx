import React, { FC, InputHTMLAttributes } from "react";
import { useField } from "formik";
import TextArea from "./TextArea";

interface FormikTextAreaProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const FormikTextArea: FC<FormikTextAreaProps> = ({
  label,
  placeholder,
  ...props
}) => {
  const [field, meta, helpers] = useField(props);
  return (
    <>
      <TextArea label={label} placeholder={placeholder} {...field} />
      {meta.touched && meta.error ? (
        <div className="text-red-600">{meta.error}</div>
      ) : null}
    </>
  );
};

export default FormikTextArea;
