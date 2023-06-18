import "./TextArea.scss";
import { TextAreaProps } from "../../utils/types";
import { useField } from "formik";

export const TextArea = (props: TextAreaProps) => {
  const { label } = props;
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea {...field} {...props}></textarea>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};
