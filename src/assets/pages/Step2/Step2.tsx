import "./Step2.scss";
import button_delete from "../../images/button_delete.svg";
import stepper_2 from "../../images/stepper_2.svg";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { CheckboxRadio } from "../../components/CheckboxRadio/CheckboxRadio";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { observer } from "mobx-react";
import store from "../../store";
import { FieldArray, Form, Formik } from "formik";

function Step2() {
  const advantagesRegExp = /^[A-zА-яЁё]+$/;
  const navigateNextPage = useNavigate();

  return (
    <div className="step2__container">
      <img src={stepper_2} alt="step_2" />
      <Formik
        initialValues={{
          advantages: [
            {
              advantage: "",
            },
          ],
        }}
        validationSchema={Yup.object({
          advantages: Yup.array().of(
            Yup.object().shape({
              advantage: Yup.string()
                .max(30, "Максимальная длина 30 символов")
                .matches(advantagesRegExp, "Можно использовать только буквы")
                .required("Данное поле обязательно к заполнению"),
            })
          ),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          await new Promise((r) => setTimeout(r, 500));
          setSubmitting(false);
          navigateNextPage("/step3");
        }}
      >
        {({ values }) => (
          <Form>
            <div className="user-input">
              <label>Ваши сильные стороны</label>
              <FieldArray name="advantages">
                {({ remove, push }) => (
                  <>
                    {values.advantages.length > 0 &&
                      values.advantages.map((item, index) => (
                        <div key={index}>
                          <div>
                            <img
                              src={button_delete}
                              alt="button-delete"
                              id={`button-remove-${index + 1}`}
                              onClick={() => remove(index)}
                            />
                          </div>
                          <Input
                            key={index}
                            id={`field-advantages-${index + 1}`}
                            name={`advantages.${index}.advantage`}
                            placeholder="Введите навык"
                            type="text"
                          />
                        </div>
                      ))}
                    <Button
                      type="button"
                      id="button-add"
                      onClick={() => push({ advantage: "" })}
                    >
                      +
                    </Button>
                  </>
                )}
              </FieldArray>
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
        )}
      </Formik>
    </div>
  );
}

export default observer(Step2);
