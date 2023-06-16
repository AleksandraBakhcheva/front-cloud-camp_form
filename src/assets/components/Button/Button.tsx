import "./Button.scss";

export const Button = (props: {
  id: string;
  type: "submit" | "reset" | "button";
  children: string;
}) => {
  const { type, children } = props;

  return <button type={type}>{children}</button>;
};
