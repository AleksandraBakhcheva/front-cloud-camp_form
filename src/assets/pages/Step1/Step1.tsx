import "./Step1.scss";
import stepper_1 from "../../images/stepper_1.svg";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { Select } from "../../components/Select/Select";
import { Sex } from "../../utils/enums";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";

export default function Step1() {
  const nicknameRegExp = /^[A-zА-яЁё0-9]*$/;
  const nameSurnameRegExp = /^[A-zА-яЁё]+$/;

  const navigateNextPage = useNavigate();

  return (
    <div className="step1__container">
      <img src={stepper_1} alt="step_1" />
      <Formik
        initialValues={{
          nickname: "",
          name: "",
          surname: "",
          sex: "",
        }}
        validationSchema={Yup.object({
          nickname: Yup.string()
            .max(30, "Максимальная длина 30 символов")
            .matches(nicknameRegExp, "Можно использовать только буквы и цифры")
            .required("Данное поле обязательно к заполнению"),
          name: Yup.string()
            .max(50, "Максимальная длина 50 символов")
            .matches(nameSurnameRegExp, "Можно использовать только буквы")
            .required("Данное поле обязательно к заполнению"),
          surname: Yup.string()
            .max(50, "Максимальная длина 50 символов")
            .matches(nameSurnameRegExp, "Можно использовать только буквы")
            .required("Данное поле обязательно к заполнению"),
          sex: Yup.string().required("Данное поле обязательно к заполнению"),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          await new Promise((r) => setTimeout(r, 500));
          setSubmitting(false);
          localStorage.setItem("nickname", values.nickname);
          localStorage.setItem("name", values.name);
          localStorage.setItem("surname", values.surname);
          localStorage.setItem("sex", values.sex);
          navigateNextPage("/step2");
        }}
      >
        <Form>
          <div className="user-input">
            <Input
              label="Nickname"
              id="field-nickname"
              name="nickname"
              type="text"
              placeholder="Введите nickname "
            />
          </div>
          <div className="user-input">
            <Input
              label="Имя"
              id="field-name"
              name="name"
              type="text"
              placeholder="Введите имя"
            />
          </div>
          <div className="user-input">
            <Input
              label="Фамилия"
              id="field-surname"
              name="surname"
              type="text"
              placeholder="Введите фамилию"
            />
          </div>
          <div className="user-input">
            <Select label="Пол" id="field-sex" name="sex">
              <option value="">Не выбрано</option>
              <option value={Sex.MAN} id="field-sex-option-man">
                Мужчина
              </option>
              <option value={Sex.WOMAN} id="field-sex-option-woman">
                Женщина
              </option>
            </Select>
          </div>
          <div className="step1__container_buttons">
            <Link to="/">
              <Button type="submit" id="button-back">
                Назад
              </Button>
            </Link>
            <Button type="submit" id="button-next">
              Далее
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
