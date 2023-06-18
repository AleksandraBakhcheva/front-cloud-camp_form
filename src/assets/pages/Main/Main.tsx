import "./Main.scss";
import Header from "../../components/Header/Header";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { MaskedPhoneInput } from "../../components/Input/MaskedInput";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";

export default function Main() {
  const navigateNextPage = useNavigate();
  const emailRegExp = /^([\w\d._\-#])+@([\w\d._\-#]+[.][\w\d._\-#]+)$/i;

  return (
    <div className="main__container">
      <Header />
      <Formik
        initialValues={{
          phone: "",
          email: "",
        }}
        validationSchema={Yup.object({
          phone: Yup.string().required("Данное поле обязательно к заполнению"),
          email: Yup.string()
            .matches(emailRegExp, "Некорректный адрес электронной почты")
            .required("Данное поле обязательно к заполнению"),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          await new Promise((r) => setTimeout(r, 500));
          setSubmitting(false);
          localStorage.setItem("phone", values.phone);
          localStorage.setItem("email", values.email);
          navigateNextPage("/step1");
        }}
      >
        <Form>
          <div className="user-input">
            <MaskedPhoneInput
              label="Номер телефона"
              id="phone"
              name="phone"
              type="text"
              placeholder="+7 (966) 105-00-22"
            />
          </div>
          <div className="user-input">
            <Input
              label="Email"
              id="email"
              name="email"
              type="email"
              placeholder="alexandra.bakhcheva@gmail.com"
            />
          </div>
          <div className="main__container_button">
            <Button type="submit" id="button-start">
              Начать
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
