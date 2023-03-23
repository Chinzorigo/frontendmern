import './index.css'
import LoginContext from '../../Context/UserContext/Login';
import { useContext, useState } from 'react';

function Login() {
    const [email, setEmail] = useState("user1");
    const [password, setPassword] = useState("123123");

    const loginState = useContext(LoginContext);

    const loginHandle = () => {
        console.log(email, password);
        if (email.length === 0) {
          //message.info("Та имэйл хаягаа бичнэ үү!");
          return;
        }
        if (password.length === 0) {
          //message.info("Та нууц үгээ бичнэ үү!");
          return;
        }
        loginState.login(email, password);
        //message.success("Тавтай морил");
      };

      const emailOnChange = (event) => {
        setEmail(event.target.value);
      };
    
      const passwordOnChange = (event) => {
        setPassword(event.target.value);
      };
    
    
  return (
    <section>
    <div className="form-box">
        <div className="form-value">
            {/* <form > */}
                <h2>Нэвтрэх</h2>
                <div className="inputbox">
                    <ion-icon name="mail-outline"></ion-icon>
                    <input required onChange={emailOnChange} />
                    <label for="">Нэвтрэх нэр</label>
                </div>
                <div className="inputbox">
                    <ion-icon name="lock-closed-outline"></ion-icon>
                    <input type="password" required onChange={passwordOnChange}/>
                    <label for="">Нууц үг</label>
                </div>
                <div className="forget">
                    <label for=""><input type="checkbox"/>Намайг сана</label>
                  
                </div>
                <button onClick={loginHandle}>Нэвтрэх</button>
                <div className="register">
                    <p> <a href="#section">Нууц үг мартсан</a></p>
                </div>
            {/* </form> */}
        </div>
    </div>
</section>
  );
}

export default Login;
