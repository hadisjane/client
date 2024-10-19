import "./Register.css";

export default function Register() {
  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">Fakebook</h3>
          <span className="registerDesc">
            Connect with friends and the world around you on Fakebook.
          </span>
        </div>
        <div className="registerRight">
          <div className="registerBox">
				<h4 className="registerBoxTitle">Sign Up</h4>
            <input type="text" placeholder="Username" className="registerInput" />
            <input type="email" placeholder="Email" className="registerInput" />
            <input type="password" placeholder="Password" className="registerInput" />
            <input type="password" placeholder="Password Again" className="registerInput" />
            <button className="registerButton">Sign Up</button>
            <button className="registerRegisterButton">
              Log into Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

