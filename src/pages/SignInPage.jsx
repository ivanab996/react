import { useState } from "react";
import { InputFormField } from "../components/InputFormFiled";
import { SubmitFormField } from "../components/SubmitFormField";

export function SignInPage(props) {
    const [ formState, setFormState ] = useState();

    function handleSubmit(event) {
        event.preventDefault();
        props.onSubmit(formState);
    }

    function handleUsernameChange(value) {
        setFormState(value);
    }

    return (
        <div className="sign-in-page">
            <div className="card">
                <form className="sign-in-form" onSubmit={handleSubmit}>
                    <InputFormField id="input" label="username" type="text" onChange={handleUsernameChange}/>
                    <SubmitFormField />
                </form>
            </div>
        </div>
    );
};