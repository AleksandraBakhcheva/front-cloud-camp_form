import "./Main.scss";
import Header from "../../components/Header/Header";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";

export default function Main() {
  const phoneRegExp = /([+]\d[ ]?[(]?\d{3}[)]?[ ]?\d{2,3}[- ]?\d{2}[- ]?\d{2})/;
  const navigateNextPage = useNavigate();

  return (
    <div className="main__container">
      <Header />
      <Formik
        initialValues={{
          phone: "",
          email: "",
        }}
        validationSchema={Yup.object({
          phone: Yup.string()
            .matches(
              phoneRegExp,
              "Некорректный номер, должен соответствовать типу +7 (900) 000-00-00"
            )
            .required("Данное поле обязательно к заполнению"),
          email: Yup.string()
            .email("Некорректный адрес электронной почты")
            .required("Данное поле обязательно к заполнению"),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          await new Promise((r) => setTimeout(r, 500));
          setSubmitting(false);
          console.log(JSON.stringify(values, null, 2));
          navigateNextPage("/step1");
        }}
      >
        <Form>
          <div className="user-input">
            <Input
              label="Номер телефона"
              id="phone"
              name="phone"
              type="text"
              placeholder="+7 (999) 999-99-99"
            />
          </div>
          <div className="user-input">
            <Input
              label="Email"
              id="email"
              name="email"
              type="email"
              placeholder="tim.jennings@example.com"
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
