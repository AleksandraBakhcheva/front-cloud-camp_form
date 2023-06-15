import "./Header.scss";
import folder from "../../images/folder.svg";

export default function Header() {
  return (
    <header className="header__container">
      <div className="header__container_box">
        <div className="header__container_avatar">АИ</div>
        <div className="header__container_info">
          <h1>Иван Иванов</h1>
          <div className="header__container_contacts">
            <div>
              <img src={folder} alt="folder_icon" />
              <p>Telegram</p>
            </div>
            <div>
              <img src={folder} alt="folder_icon" />
              <p>GitHub</p>
            </div>
            <div>
              <img src={folder} alt="folder_icon" />
              <p>Resume</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
