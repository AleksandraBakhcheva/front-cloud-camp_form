import "./ModalFail.scss";
import cross from "../../images/cross.svg";
import vector_cross from "../../images/vector_cross.svg";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";

export const ModalFail = () => {
  return (
    <>
      <div className="modal-fail__container">
        <div className="modal-fail__container_header">
          <h1>Ошибка</h1>
          <div>
            <img src={cross} alt="cross-icon" />
          </div>
        </div>
        <div className="modal-fail__container_icon">
          <img src={vector_cross} alt="vector_cross-icon" />
        </div>
        <div className="modal-fail__container_button">
          <Link to="/">
            <Button type="button" id="button-close">
              Закрыть
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};
