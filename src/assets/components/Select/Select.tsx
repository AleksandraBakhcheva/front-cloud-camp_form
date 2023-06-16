import "./Select.scss";
import { useField } from "formik";

type ContainerProps = {
  label: string;
  id: string;
  name: string;
  children: React.ReactNode;
};

export const Select = (props: ContainerProps) => {
  const { label } = props;
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props}>
        {props.children}
      </select>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};
