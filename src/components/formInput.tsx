import React, { useState } from "react"
import styles from "@/styles/Form-Input.module.css"


const FormInput = (props: any) => {

    const [focus, setFocus] = useState(false)

    const {label, onChange, errorMessage, id,...inputProps} = props

    const handleFocus = (e: any) =>{
        setFocus(true)
    }

    return(
        <div className={styles.formInput}> 
            <label>{label}</label>
            <input 
                {...inputProps}
                onChange={onChange}
                onBlur={handleFocus}
                focused={focus.toString()}
            />
            <span className={styles.span}>{errorMessage}</span>
        </div>
    )

}

export default FormInput