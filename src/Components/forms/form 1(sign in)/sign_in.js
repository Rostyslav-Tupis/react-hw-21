import React, {useState , useEffect}from "react";
import { Link } from "react-router-dom";
import styles from './style.module.css'
import LockIcon from "../../repeat-components/lockicon";

function SignIn(){
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [emailDirty , setEmailDitry] = useState(true)
    const [passwordDirty , setpasswordDitry] = useState(true)
    const [checked , setChecked] = useState(false)
    const [valid, setValid] = useState(false)

    useEffect(()=>{
        if(emailDirty === false || passwordDirty === false || email === "" || password === "" ){
            setValid(false)
        }else{
            setValid(true)
        }
    },[emailDirty,passwordDirty,email,password])

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

    function passwordHandler(e){
        setPassword(e.target.value)
        if(e.target.value.length >= 8){
            setpasswordDitry(true)
        }else(
            setpasswordDitry(false)
        )
    }

    useEffect(()=>{
        const storedEmail = localStorage.getItem("email")    //дістаємо дані зі localStorage
        const storedPass = localStorage.getItem("password") 

        if(storedEmail && storedPass){  //якщо такі ключи існують то вставляємо значення у інпути
            setEmail(storedEmail)
            setPassword(storedPass)
        }
    },[])               //для того щоб при перезагрузці сторінки в інпутах залишалися інформація (залежність відбувається один раз при перезапуску сторінки)

    function handleCheckboxChange(e){
        setChecked(e.target.checked)
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
    }

    return(
        <div className={styles["wrapper"]}>
            <div className={styles["form_container"]}>

                <LockIcon/>

                <form className={styles["form"]}>
                    <div className={styles["inputs"]}>
                        <input onChange={(e) =>emailHandler(e)} value={email} name="email" type="text" placeholder="Email Address*" 
                        className={emailDirty ?  styles["input"] : styles["wrong"]}/>

                        <input onChange={e =>passwordHandler(e)} value={password} type="text" placeholder="Password*" name="password" 
                        className={passwordDirty ? styles["input"] : styles["wrong"]}/>
                    </div>
                    <div className={styles["checkbox-filed"]}>
                        <input id="check" type="checkbox" className={styles["input_checkbox"]} 
                        checked={checked}
                        onChange={handleCheckboxChange}
                        />
                        <label htmlFor="check">Remember me</label>
                    </div>
                    <div className={styles["btn_field"]}>
                        <Link to={valid ? '/welcomePage' : '#'}  className={styles["submit-btn"]}>SIGN IN</Link>
                        <div className={styles["links"]}>
                            <Link to="/SignUp" className={styles["link"]}>Don`t have an account? Sign Up</Link>
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

export default SignIn