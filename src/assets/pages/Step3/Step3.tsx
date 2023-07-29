import "./Step3.scss";
import { ProgressBar } from "../../components/ProgressBar/ProgressBar";
import { Button } from "../../components/Button/Button";
import { Link } from "react-router-dom";
import { ModalSuccess } from "../../components/Modal/ModalSuccess";
import { ModalFail } from "../../components/Modal/ModalFail";
import { TextArea } from "../../components/TextArea/TextArea";
import { Formik, Form } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { observer } from "mobx-react";
import store from "../../store";
import { User } from "../../utils/user";

function Step3() {
  const [modalSuccess, setModalSuccess] = useState(false);
  const [modalFail, setModalFail] = useState(false);

  return (
    <div>
      <div className="step3__container">
        <ProgressBar step={3} />
        <Formik
          initialValues={{
            about: "",
          }}
          validationSchema={Yup.object({
            about: Yup.string()
              .trim()
              .max(200, "Максимальная длина 200 символов")
              .required("Данное поле обязательно к заполнению"),
          })}
          onSubmit={async (values, { setSubmitting }) => {
            await new Promise((r) => setTimeout(r, 500));
            setSubmitting(false);
            /*  store.formStore.about = values.about;
            console.log(values.about);
            store.formStore.sendDataToServer(User); */
          }}
        >
          {({ values }) => (
            <Form>
              <div className="user-input">
                <TextArea
                  label="О себе"
                  name="about"
                  id="field-about"
                  placeholder="Расскажите о себе"
                />
                <div className="user-input_counter">
                  {values.about.length}/200
                </div>
              </div>
              <div className="step3__container_buttons">
                <Link to="/step2">
                  <Button type="submit" id="button-back">
                    Назад
                  </Button>
                </Link>
                <Button id="button-send" type="submit">
                  Отправить
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <div>{modalSuccess ? <ModalSuccess /> : ""}</div>
      <div>{modalFail ? <ModalFail /> : ""}</div>
    </div>
  );
}

export default observer(Step3);
