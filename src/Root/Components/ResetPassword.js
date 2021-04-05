import React from 'react'
import { useDispatch } from 'react-redux';
import Actions from '../Redux/Actions/Actions';
import { CustomButton, CustomTextField } from '../Utils/CustomUI'

function ResetPassword() {
    const [email, setEmail] = React.useState()

    const dispatch = useDispatch()

    function onSubmitHandle(e){
        e.preventDefault();
        dispatch({type:Actions.UserActions.RESET_PASSWORD,payload:{email}});
        alert("Check your email for new password.")
    }
    return (
        <div>
            <h2>Password Reset</h2>
            <p>Enter your registered email id and we will send you a new temporary password</p>
            <br />
            <form id="reset-form" onSubmit={onSubmitHandle}>
                <CustomTextField
                    type="email"
                    required
                    label="Email"
                    variant="outlined"
                    onChange={(e)=>{
                        setEmail(e.target.value)
                    }}

                />
                <br /><br />
                <CustomButton type="submit" form="reset-form">Send Mail</CustomButton>
            </form>
        </div>
    )
}

export default ResetPassword
