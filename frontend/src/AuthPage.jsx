import axios from "axios";
import { API_URL } from "./constants";
const AuthPage = (props) => {

    const onSubmit = (e) => {
      e.preventDefault();
      const username  = e.target[0].value;
      const secret  = e.target[1].value;
      axios.post(`${API_URL}/user/create`, { username: username, secret: secret }).then((res) => {
      props.onAuth({ ...res.data,username:username , secret: secret });
      console.log(res.data);
    }).catch((err) => { console.log(err); })
    };
  
    return (
      <div className="background">
        <form onSubmit={onSubmit} className="form-card">
          <div className="form-title">Welcome 👋</div>
  
          <div className="form-subtitle">Set a username to get started</div>
  
          <div className="auth">
            <div className="auth-label-username">Username</div>
            <div className="auth-label-password">password</div>
            <input className="auth-input" name="username" />
            <input className="auth-input" name="password" type="password" />
            <button className="auth-button" type="submit">
              Enter
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default AuthPage;