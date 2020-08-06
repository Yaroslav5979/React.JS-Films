import React, { useState, useEffect } from "react";
import "./Nav.css";
import SignIn from "./SignIn/SignIn";

function Nav() {
  const [show, showBag] = useState(false);
  const [changeLog, changeIn] = useState();
  const [profile, setProfile] = useState();

  let profileData = [
    { id: 1, name: "Suel", password: "1234", active: false, list: [] },
    { id: 2, name: "Lia", password: "1234", active: false, list: [] },
    { id: 3, name: "Jack", password: "1234", active: false, list: [] },
  ];

  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 100) {
        showBag(true);
      } else {
        showBag(false);
      }

      return function () {
        return window.removeEventListener("scroll");
      };
    });
  }, []);
  function showLogIn() {
    if (changeLog) {
      changeIn(false);
    } else {
      changeIn(true);
    }
  }

  return (
    <div className={`nav ${show ? "showBag" : ""}`}>
      {/* <img
        className="navLogo"
        src="https://insidepulse.com/wp-content/uploads/2017/12/Netflix-logo-banner.jpg"
        alt="LogoNetflix"
      /> */}

      {/* {changeLog ? (
        <SignIn profileData={profileData} setProfile={setProfile} />
      ) : null} */}

      <button
        className={`navLog ${profile ? "logNone" : ""}`}
        onClick={() => showLogIn()}
      >
        Sign In
      </button>
      {/* <h3 className={`${profile ? "userName" : ""}`}>Hello </h3> */}
    </div>
  );
}

export default Nav;
