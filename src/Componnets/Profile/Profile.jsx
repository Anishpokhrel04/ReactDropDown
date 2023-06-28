import "./profile.css";

import img3 from "../../assets/img3.jpg";
import user from "../../assets/user.png";
import edit from "../../assets/edit.png";
import inbox from "../../assets/envelope.png";
import setting from "../../assets/settings.png";
import help from "../../assets/question.png";
import logout from "../../assets/log-out.png";
import { useState, useRef } from "react";
import { useEffect } from "react";

const Profile = () => {
  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
        console.log(menuRef.current);
      }
    };

    document.addEventListener("onmousedown", handler);

    return () => {
      document.removeEventListener("onmousedown", handler);
    };
  }, [menuRef]);
  return (
    <div className="profile">
      <div className="menu-container" ref={menuRef}>
        <div
          className="menu-trigger"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <img src={img3} alt="profile image" />
        </div>
        <div className={`dropdown-menu ${open ? "active" : "inactive"} `}>
          <h3>
            Anish Pokhrel
            <br />
            <span>Website designer</span>
          </h3>
          <ul>
            <DropDownItem img={user} text={"my profile"} />
            <DropDownItem img={edit} text={"Edit profile"} />
            <DropDownItem img={inbox} text={"Inbox"} />
            <DropDownItem img={setting} text={"Setting"} />
            <DropDownItem img={help} text={"Helps"} />
            <DropDownItem img={logout} text={"Logout"} />
          </ul>
        </div>
      </div>
    </div>
  );
};

function DropDownItem(props) {
  return (
    <li className="dropdownItem">
      <img src={props.img} alt="" />
      <a>{props.text}</a>
    </li>
  );
}

export default Profile;
