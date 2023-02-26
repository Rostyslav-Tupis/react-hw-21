import React from "react";
import icon from '../forms/icons/padlock.png'
import styles from '../forms/form 1(sign in)/style.module.css'

function LockIcon(){
    return(
        <div className={styles["icon_field"]}>
            <div className={styles["bgc_icon"]}>
                <img src={icon} className={styles["lock-icon"]}/>
            </div>
            <h4 className={styles["main_title"]}>Sign in</h4>
        </div>
    )
}
export default LockIcon
