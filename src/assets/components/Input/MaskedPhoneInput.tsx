import "./Input.scss";
import MaskedInput from "react-text-mask";
import { InputProps } from "../../utils/types";
import { useField } from "formik";

export const MaskedPhoneInput = (props: InputProps) => {
  const { label } = props;
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <MaskedInput
        mask={[
          "+",
          "7",
          " ",
          "(",
          /[9]/,
          /\d/,
          /\d/,
          ")",
          " ",
          /\d/,
          /\d/,
          /\d/,
          "-",
          /\d/,
          /\d/,
          "-",
          /\d/,
          /\d/,
        ]}
        {...field}
        {...props}
        guide={true}
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};
