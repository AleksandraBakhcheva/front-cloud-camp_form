import "./Step3.scss";
import { Formik, Form } from "formik";
import { Button } from "../../components/Button/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ModalSuccess } from "../../components/Modal/ModalSuccess";
import { ModalFail } from "../../components/Modal/ModalFail";
import { newUser } from "../../utils/interfaces";
import { TextArea } from "../../components/TextArea/TextArea";
import * as Yup from "yup";
import stepper_3 from "../../images/stepper_3.svg";
import { PostData } from "../../utils/types";

export default function Step3() {
  const endPoint = "https://api.sbercloud.ru/content/v1/bootcamp/frontend";
  const [modalSuccess, setModalSuccess] = useState(false);
  const [modalFail, setModalFail] = useState(false);

  async function sendDataToServer(data: PostData) {
    try {
      const usersCollection = await fetch(endPoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(data),
      });
      const responseReceived = await usersCollection.json();
      if (responseReceived.status) {
        setModalSuccess(true);
        const windowBackground =
          document.querySelector<any>(".step3__container");
        if (windowBackground) {
          windowBackground.style.opacity = 0.3;
        }
      }
    } catch (error) {
      console.log("error", error);
      setModalFail(true);
      const windowBackground = document.querySelector<any>(".step3__container");
      if (windowBackground) {
        windowBackground.style.opacity = 0.3;
      }
    }
  }

  return (
    <div>
      <div className="step3__container">
        <img src={stepper_3} alt="step_3" />
        <Formik
          initialValues={{
            about: "",
          }}
          validationSchema={Yup.object({
            about: Yup.string()
              .max(200, "Максимальная длина 200 символов")
              .required("Данное поле обязательно к заполнению"),
          })}
          onSubmit={async (values, { setSubmitting }) => {
            await new Promise((r) => setTimeout(r, 500));
            setSubmitting(false);
            localStorage.setItem("about", values.about);
            sendDataToServer(newUser);
          }}
        >
          <Form>
            <div className="user-input">
              <TextArea
                label="О себе"
                name="about"
                id="field-about"
                placeholder="Расскажите о себе"
              />
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
        </Formik>
      </div>
      <div>{modalSuccess ? <ModalSuccess /> : ""}</div>
      <div>{modalFail ? <ModalFail /> : ""}</div>
    </div>
  );
}
