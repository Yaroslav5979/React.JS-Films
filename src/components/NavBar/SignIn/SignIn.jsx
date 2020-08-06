import React, { useState } from "react";

function SignIn({ profileData, setProfile }) {
  // const [checkUs, changeProfile] = useState(true);

  let valueName = React.createRef();
  let valuePass = React.createRef();

  const getProfile = () => {
    let name = valueName.current.value;
    let password = valuePass.current.value;

    profileData.filter((prof) => {
      if (name === prof.name && password === prof.password) {
        prof.active = true;
        setProfile(prof);
      }
    });
  };

  return (
    <div className="signIn">
      <div className="containerIn">
        <h3>Login</h3>
        <input type="text" className="log" ref={valueName} />
        <br />
        <h3>Password</h3>
        <input type="password" className="pass" ref={valuePass} />
        <br />
        <button className="checkLogPas" onClick={getProfile}>
          Sign In
        </button>

        {/* <p className={checkUs ? "checkUs" : "checkWrong"}>
          Wrong Login or Password
        </p> */}
      </div>
    </div>
  );
}

export default SignIn;
