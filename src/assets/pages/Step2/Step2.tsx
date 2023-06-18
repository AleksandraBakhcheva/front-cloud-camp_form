import "./Step2.scss";
import button_delete from "../../images/button_delete.svg";
import stepper_2 from "../../images/stepper_2.svg";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { CheckboxRadio } from "../../components/CheckboxRadio/CheckboxRadio";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";

export default function Step2() {
  const advantagesRegExp = /^[A-zА-яЁё]+$/;

  const navigateNextPage = useNavigate();

  return (
    <div className="step2__container">
      <img src={stepper_2} alt="step_2" />
      <Formik
        initialValues={{
          advantages1: "",
          advantages2: "",
          advantages3: "",
          checked: [],
          radio: "",
        }}
        validationSchema={Yup.object({
          advantages1: Yup.string()
            .max(50, "Максимальная длина 50 символов")
            .matches(advantagesRegExp, "Можно использовать только буквы")
            .required("Данное поле обязательно к заполнению"),
          advantages2: Yup.string()
            .max(50, "Максимальная длина 50 символов")
            .matches(advantagesRegExp, "Можно использовать только буквы")
            .required("Данное поле обязательно к заполнению"),
          advantages3: Yup.string()
            .max(50, "Максимальная длина 50 символов")
            .matches(advantagesRegExp, "Можно использовать только буквы")
            .required("Данное поле обязательно к заполнению"),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          await new Promise((r) => setTimeout(r, 500));
          setSubmitting(false);
          localStorage.setItem("advantages1", values.advantages1);
          localStorage.setItem("advantages2", values.advantages2);
          localStorage.setItem("advantages3", values.advantages3);
          //localStorage.setItem("checked", values.);
          localStorage.setItem("radio", values.radio);
          console.log(JSON.stringify(values, null, 2));
          console.log(values.checked);

          navigateNextPage("/step3");
        }}
      >
        <Form>
          <div className="user-input">
            <div>
              <Input
                label="Ваши сильные стороны"
                id="field-advantages-1"
                name="advantages1"
                type="text"
                placeholder="Введите навык"
              />
              <Link to="">
                <img
                  src={button_delete}
                  alt="button-delete"
                  id="button-remove-1"
                />
              </Link>
            </div>
            <div>
              <Input
                label=""
                id="field-advantages-2"
                name="advantages2"
                type="text"
                placeholder="Введите навык"
              />
              <Link to="">
                <img
                  src={button_delete}
                  alt="button-delete"
                  id="button-remove-2"
                />
              </Link>
            </div>
            <div>
              <Input
                label=""
                id="field-advantages-3"
                name="advantages3"
                type="text"
                placeholder="Введите навык"
              />
              <Link to="">
                <img
                  src={button_delete}
                  alt="button-delete"
                  id="button-remove-3"
                />
              </Link>
            </div>
            <Button type="button" id="button-add">
              +
            </Button>
          </div>
          <div className="step2__container_checkboxes">
            <div id="checkbox-group">Checkbox group</div>
            <div role="group" aria-labelledby="checkbox-group">
              <CheckboxRadio
                id="field-checkbox-group-option-1"
                name="checked"
                value="1"
                label="1"
                inputtype="checkbox"
              />
              <CheckboxRadio
                id="field-checkbox-group-option-2"
                name="checked"
                value="2"
                label="2"
                inputtype="checkbox"
              />
              <CheckboxRadio
                id="field-checkbox-group-option-3"
                name="checked"
                value="3"
                label="3"
                inputtype="checkbox"
              />
            </div>
          </div>
          <div className="step2__container_radios">
            <div id="radio-group">Radio group</div>
            <div role="group" aria-labelledby="radio-group">
              <CheckboxRadio
                id="field-radio-group-option-1"
                name="radio"
                value="1"
                label="1"
                inputtype="radio"
              />
              <CheckboxRadio
                id="field-radio-group-option-2"
                name="radio"
                value="2"
                label="2"
                inputtype="radio"
              />
              <CheckboxRadio
                id="field-radio-group-option-3"
                name="radio"
                value="3"
                label="3"
                inputtype="radio"
              />
            </div>
          </div>
          <div className="step2__container_buttons">
            <Link to="/step1">
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
