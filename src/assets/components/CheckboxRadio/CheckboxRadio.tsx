import "./CheckboxRadio.scss";
import { CheckboxRadioProps } from "../../utils/types";
import { useField, Field } from "formik";

export const CheckboxRadio = (props: CheckboxRadioProps) => {
  const [field] = useField({ ...props });
  const { label, inputtype } = props;

  return (
    <>
      <label>
        <Field type={inputtype} {...field} {...props} />
        {label}
      </label>
    </>
  );
};
