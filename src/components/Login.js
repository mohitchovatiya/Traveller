import classes from './Login.module.css';
import { useEffect, useState } from 'react';
import { home } from "./routes/Home";

const Login = props => {

    const [signup, setSignup] = useState(false);
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');
    const [accountCreated, setAccountCreated] = useState(false);

    const [fullNameTouched, setFullNameTouched] = useState(false);
    const [emailTouched, setEmailTouched] = useState(false);
    const [usernameTouched, setUsernameTouched] = useState(false);
    const [passwordTouched, setPasswordTouched] = useState(false);
    const [repasswordTouched, setRepasswordTouched] = useState(false);

    const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const [redirect , setRedirect] = useState();

    const login =(e)=>{
        console.log(">>",e);
    }

    const signupHandler = (event) => {
        console.log("evert", event);
        setSignup(prev => {
            return !prev;
        });
    }

    const fullNameInvalid = !(fullName.trim() != "") && fullNameTouched;
    const emailInvalid = !(email.includes("@", ".com")) && emailTouched;
    const usernameInvalid = !(username.trim() != "") && usernameTouched;
    const passwordInvalid = !(/\d/.test(password) && /[a-zA-Z]/g.test(password) && /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password)) && passwordTouched;
    const repasswordInvalid = !(repassword === password) && repasswordTouched;
    const signupFormIsValid = !fullNameInvalid && !emailInvalid && !usernameInvalid && !passwordInvalid && !repasswordInvalid;

    const fullNameTouchHandler = () => { setFullNameTouched(true); }
    const emailTouchHandler = () => { setEmailTouched(true); }
    const usernameTouchHandler = () => { setUsernameTouched(true); }
    const passwordTouchHandler = () => { setPasswordTouched(true); }
    const repasswordTouchHandler = () => { setRepasswordTouched(true); }

    const nameChangeHandler = (event) => { setFullName(event.target.value); }
    const emailChangeHandler = (event) => { setEmail(event.target.value); }
    const usernameChangeHandler = (event) => { setUsername(event.target.value); }
    const passwordChangeHandler = (event) => { setPassword(event.target.value); }
    const repasswordChangeHandler = (event) => { setRepassword(event.target.value); }

    const signupFormSubmitHandler = (event) => {
        event.preventDefault();
        // postSignupData();
        setFullName('');
        setEmail('');
        setUsername('');
        setPassword('');
        setRepassword('');
        setAccountCreated(true);
        setTimeout(() => {
            setAccountCreated(false);
        }, 3500)
        setSignup(prev => {
            console.log("prev", prev);
            return !prev;
        });
    }

    const postSignupData = async () => {
        const response = await fetch('https://tours-and-travels-ec430-default-rtdb.firebaseio.com/users.json', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                fullName: fullName,
                email: email,
                username: username,
                password: password
            })
        });
        const res = await response.json();
        console.log(res);
    }

    const errorInputStyle = { margin: '0.5vh', backgroundColor: 'rgb(253, 167, 167)', borderColor: 'red' }
    const inputStyle = { margin: '0.5vh', }

    const erroSignupForm = {
        margin: '4vh 0px',
        height: '6vh',
        backgroundColor: 'rgb(189, 189, 189)',
        borderRadius: '4px',
        color: 'rgb(126, 126, 126)',
        fontSize: '1.3em',
        cursor: 'not-allowed',
        border: 'none',
    }
    const signupFormStyle = { margin: '3vh 0px', padding: '0px' }


    // useEffect(() => {
    //     login()
    //   });
         

    return (
        <div className={classes.login}>
            <div className={classes.background}>
                <div>

                </div>
            </div>
            <div className={classes.loginForm}>
                {!signup ?  
                    <form className={classes.form}>
                        {accountCreated && <div>Account Created Successfully!</div>}
                        <h2>Welcome!</h2>
                        {/* <label>Username:</label>
                    <input type={'text'} value={loginUsername}></input> */}

                        <label>Username:</label>
                        <input onBlur={usernameTouchHandler} onChange={usernameChangeHandler} style={usernameInvalid ? errorInputStyle : inputStyle} type={'text'} value={username}></input>     
                        <label>Password:</label>
                        <input onBlur={passwordTouchHandler} onChange={passwordChangeHandler} style={passwordInvalid ? errorInputStyle : inputStyle} type={'password'} value={password}></input>
                        {/* <input type={'password'} value={loginPassword}></input> */}
                        <button onClick={(e) => login(e.target.value)}>Login</button>
                        <button>Enter</button>
                        <span onClick={signupHandler}><a>Signup?</a></span>
                    </form>
                    :
                    <form style={{ marginTop: '4vh' }} className={classes.form} onSubmit={signupFormSubmitHandler}>
                        <h2>Create an Account!</h2>
                        <label>Full name:</label>
                        <input onBlur={fullNameTouchHandler} onChange={nameChangeHandler} style={fullNameInvalid ? errorInputStyle : inputStyle} type={'text'} value={fullName}></input>
                        <label>Email:</label>
                        <input onBlur={emailTouchHandler} onChange={emailChangeHandler} style={emailInvalid ? errorInputStyle : inputStyle} type={'email'} value={email}></input>
                        <label>Username:</label>
                        <input onBlur={usernameTouchHandler} onChange={usernameChangeHandler} style={usernameInvalid ? errorInputStyle : inputStyle} type={'text'} value={username}></input>
                        <label>Password:</label>
                        {/* { passwordType==="password"? <i className="bi bi-eye-slash"></i> :<i className="bi bi-eye"></i> */}
                        { } <input onBlur={passwordTouchHandler} onChange={passwordChangeHandler} style={passwordInvalid ? errorInputStyle : inputStyle} type={'password'} value={password}></input>
                        <label>Repeat password:</label>
                        <input onBlur={repasswordTouchHandler} onChange={repasswordChangeHandler} style={repasswordInvalid ? errorInputStyle : inputStyle} type={'password'} value={repassword}></input>
                        <button style={signupFormIsValid ? signupFormStyle : erroSignupForm}>SignUp</button>
                        <span onClick={signupHandler}><a>Already have an account?</a></span>
                    </form>
                }
            </div>
        </div>
    );
}

export default Login;