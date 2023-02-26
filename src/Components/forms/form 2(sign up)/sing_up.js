import React, {useState , useEffect}from "react";
import { Link } from "react-router-dom";
import styles from '../form 1(sign in)/style.module.css'
import Icon from "../icons/padlock.png"
import PersonalInfo from "./infoNameField";

function SignUp(){
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState('');
    const [emailDirty , setEmailDitry] = useState(true)
    const [passwordDirty , setpasswordDitry] = useState(true)
    const [checked , setChecked] = useState(false)

    const [Firstname, setFirstName] = useState("")
    const [Lastname, setLastName] = useState("")

    const [valid, setValid] = useState(false)

    const handleData = (data) => {
        setFirstName(data.name);
        setLastName(data.lastName);
    }

    useEffect(()=>{
        if(emailDirty === false || passwordDirty === false || email === "" 
            || password === "" || Firstname === "" 
            || Firstname.length < 3 || Lastname === "" || Lastname.length < 3){
            setValid(false)
        } else{
            setValid(true)
        }
    }, [emailDirty, passwordDirty, email, password, Firstname, Lastname]);

    function emailHandler(e){ 
        setEmail(e.target.value)
        // eslint-disable-next-line
        const re =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if(re.test(String(e.target.value).toLowerCase())){
            setEmailDitry(true)
        }else{
            setEmailDitry(false)
        }
    }

    function validatePassword(password) {
        // eslint-disable-next-line
        const regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return regex.test(password);
    }

    function passwordHandler(e){
        setPassword(e.target.value)        
        if(validatePassword(e.target.value)){
            setpasswordDitry(true)
            setErrorMessage('')

        }else{
            setpasswordDitry(false)
            setErrorMessage('Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and be at least 8 characters long.')
        }
    }

    function handleSubmit(event){
        event.preventDefault();
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
    }

    function handleCheckboxChange(e){
        setChecked(e.target.checked)
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
    }

    return(
            <div className={styles["wrapper"]}>
                <div className={styles["form_container"]}>

                <div className={styles["icon_field"]}>
                <div className={styles["bgc_icon"]}>
                    <img src={Icon}  alt="lock" className={styles["lock-icon"]}/>
                </div>
                <h4 className={styles["main_title"]}>Sign Up</h4>
            </div>

                <form className={styles["form"]} onSubmit={handleSubmit}>
                    <PersonalInfo onData={handleData}/>

                    <div className={styles["inputs"]}>
                        <input onChange={(e) =>emailHandler(e)} value={email} name="email" type="mail" placeholder="Email Address*" 
                        className={emailDirty ?  styles["input"] : styles["wrong"]}/>

                        <input onChange={e =>passwordHandler(e)} value={password} type="text" placeholder="Password*" name="password" 
                        className={passwordDirty ? styles["input"] : styles["wrong"]}/>
                        {errorMessage && <p className={styles["errormes"]}>{errorMessage}</p>}
                    </div>
                    <div className={styles["checkbox-filed"]}>
                        <input id="check" type="checkbox" className={styles["input_checkbox"]}
                        checked={checked}
                        onChange={handleCheckboxChange}/>
                        <label htmlFor="check" >Do you want to save the data for the next login </label>
                    </div>
                    <div className={styles["btn_field"]}>
                        <Link to={valid ? '/welcomePage' : '#'} className={styles["submit-btn"]}>SIGN UP</Link>
                        <div className={styles["signUpLinks"]}>
                            <Link to="/" className={styles["signUpLink"]}>Already have an account? Sign in</Link>
                        </div>
                    </div>
                </form>
                <div className={styles["rights"]}>
                    <h6 className={styles["copyrights"]}>Copyright © Your Website 2023</h6>
                </div>
            </div>
        </div>
    )
}

export default SignUp