import header from "./header.css";
import pp from "../../image/profile_pic.jpeg";
const Header = () => {
  return (
    <div className="header">
      <img src={pp} alt="Profile pic" className="profile-pic" width="300px" />
      <h1 className="profile-name">Habibur Rahman</h1>
      <h4 className="prof">Web Developer</h4>
      <p className="p-email">habiburrahman.jony</p>

      <div className="btn">
        <button className="email_btn ">
          <i className="fas fa-envelope"></i> Email
        </button>

        <button className="linkedin_btn ">
          <i className="fab fa-linkedin"></i> Linkedin
        </button>
      </div>
    </div>
  );
};

export default Header;
