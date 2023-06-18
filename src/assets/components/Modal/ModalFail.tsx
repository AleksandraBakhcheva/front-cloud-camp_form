import "./ModalFail.scss";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import cross from "../../images/cross.svg";
import vector_cross from "../../images/vector_cross.svg";

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
          <Link to="/step3">
            <Button type="submit" id="button-close">
              Закрыть
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};
