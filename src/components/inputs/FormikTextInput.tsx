import React, { FC } from "react";
import { useField } from "formik";
import TextInput from "./TextInput";

interface FormikTextInputProps {
  name: string;
  label: string;
}
const FormikTextInput: FC<FormikTextInputProps> = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);

  return (
    <div>
      <TextInput label={label} placeholder={label} {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="text-red-600">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default FormikTextInput;
