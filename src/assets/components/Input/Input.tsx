import "./Input.scss";
import { InputProps } from "../../utils/types";
import { useField } from "formik";

export const Input = (props: InputProps) => {
  const { label } = props;
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};
