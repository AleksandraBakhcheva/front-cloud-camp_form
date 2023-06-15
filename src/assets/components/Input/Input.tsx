import "./Input.scss";
import { useField } from "formik";

export const Input = (props: {
  label: string;
  id: string;
  name: string;
  type: string;
  placeholder: string;
}) => {
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
