import "./ModalSuccess.scss";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import vector_tick from "../../images/vector_tick.svg";

export const ModalSuccess = () => {
  return (
    <>
      <div className="modal__container">
        <h1>Форма успешно отправлена</h1>
        <div className="modal__container_icon">
          <img src={vector_tick} alt="vector_tick-icon" />
        </div>
        <div className="modal__container_button">
          <Link to="/">
            <Button type="submit" id="button-to-main">
              На главную
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};
