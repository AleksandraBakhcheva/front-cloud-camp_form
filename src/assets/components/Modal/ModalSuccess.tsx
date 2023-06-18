import "./ModalSuccess.scss";
import vector_tick from "../../images/vector_tick.svg";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";

export const ModalSuccess = () => {
  return (
    <>
      <div className="modal-success__container">
        <h1>Форма успешно отправлена</h1>
        <div className="modal-success__container_icon">
          <img src={vector_tick} alt="vector_tick-icon" />
        </div>
        <div className="modal-success__container_button">
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
