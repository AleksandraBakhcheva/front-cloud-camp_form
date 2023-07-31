import "./Step2.scss";
import { ProgressBar } from "../../components/ProgressBar/ProgressBar";
import button_delete from "../../images/button_delete.svg";
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

  const checkboxGroup = [
    { key: "1", value: "1" },
    { key: "2", value: "2" },
    { key: "3", value: "3" },
  ];

  const radioGroup = [
    { key: "1", value: "1" },
    { key: "2", value: "2" },
    { key: "3", value: "3" },
  ];

  return (
    <div className="step2__container">
      <ProgressBar step={2} />
      <Formik
        initialValues={{
          advantages: [
            {
              advantage: "",
            },
          ],
          checkboxGroup: [],
          radioGroup: "",
        }}
        validationSchema={Yup.object().shape({
          advantages: Yup.array().of(
            Yup.object().shape({
              advantage: Yup.string()
                .max(30, "Максимальная длина 30 символов")
                .matches(advantagesRegExp, "Можно использовать только буквы")
                .required("Данное поле обязательно к заполнению"),
            })
          ),
          checkboxGroup: Yup.array().min(
            1,
            "Необходимо выбрать одно или несколько полей"
          ),
          radioGroup: Yup.string().required("Необходимо выбрать одно из полей"),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          await new Promise((r) => setTimeout(r, 500));
          setSubmitting(false);
          console.log(values);
          navigateNextPage("/step3");
        }}
      >
        {({ values, errors }) => (
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
              {checkboxGroup.map((item, index) => (
                <div key={index}>
                  <CheckboxRadio
                    key={index}
                    id={`field-checkbox-group-option-${index + 1}`}
                    name="checkboxGroup"
                    label={`${index + 1}`}
                    value={`${index + 1}`}
                    type="checkbox"
                  />
                </div>
              ))}
              {errors.checkboxGroup && (
                <div className="error">{errors.checkboxGroup}</div>
              )}
            </div>
            <div className="step2__container_radios">
              <div id="radio-group">Radio group</div>
              {radioGroup.map((item, index) => (
                <div key={index}>
                  <CheckboxRadio
                    id={`field-radio-group-option-${index + 1}`}
                    name="radioGroup"
                    label={`${index + 1}`}
                    value={`${index + 1}`}
                    type="radio"
                  />
                </div>
              ))}
              {errors.radioGroup && (
                <div className="error">{errors.radioGroup}</div>
              )}
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
