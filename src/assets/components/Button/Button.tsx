import "./Button.scss";
import { ButtonProps } from "../../utils/types";

export const Button = (props: ButtonProps) => {
  const { type, children } = props;

  return <button type={type}>{children}</button>;
};
