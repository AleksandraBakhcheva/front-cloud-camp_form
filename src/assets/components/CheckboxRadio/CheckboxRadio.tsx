import "./CheckboxRadio.scss";
import { CheckboxRadioProps } from "../../utils/types";
import { useField, Field } from "formik";

export const CheckboxRadio = (props: CheckboxRadioProps) => {
  const [field, meta] = useField({ ...props });
  const { label } = props;

  return (
    <>
      <label>
        <Field {...field} {...props} />
        {label}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};
