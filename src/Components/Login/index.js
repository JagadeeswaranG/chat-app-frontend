import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userCred, setUserCred] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleCred = (value) => {
    return setUserCred((cred) => {
      return { ...cred, ...value };
    });
  };

  useEffect(() => {
    console.log(userCred);
  }, [userCred]);

  const handleLogin = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/user/signin`,
        { ...userCred },
        { withCredentials: true }
      );
      if(response){
        navigate('/chat');
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            value={userCred.email}
            onChange={(e) => handleCred({ email: e.target.value })}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            value={userCred.password}
            onChange={(e) => handleCred({ password: e.target.value })}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
