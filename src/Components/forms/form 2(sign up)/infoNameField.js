import React,{useState} from "react"
import styles from '../form 1(sign in)/style.module.css'

function PersonalInfo(props){
    const [name, setName] = useState("")
    const [lastName, setlastName] = useState("")
    const [correctName, setCorrectName] = useState(true)
    const [correctlastName, setCorrectlastName] = useState(true)

    const handleName =(e) =>{
        setName(e.target.value)
        if(e.target.value.length < 3){
            setCorrectName(false)
        }else{
            setCorrectName(true)
        }
        props.onData({
            name: e.target.value,
            lastName: lastName
        });
    }

    const handleLastName =(e) =>{
        setlastName(e.target.value)
        if(e.target.value.length < 3){
            setCorrectlastName(false)
        }else{
            setCorrectlastName(true)
        }

        props.onData({
            name: name,
            lastName: e.target.value
        });
    }

    return(
        <div>
            <div className={styles["registr_field"]}>
                <input type="text" placeholder="First Name*" onChange={handleName} value={name}
                className={correctName ? styles["input"] : styles["wrong"]}
                />
                <input type="text" placeholder="Last Name*" onChange={handleLastName} value={lastName}
                className={correctlastName ? styles["input"] : styles["wrong"]}/>
            </div>
        </div>
    )
}

export default PersonalInfo