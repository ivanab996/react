import { useState } from "react";
import { Button } from "../components/Button";
import { FormField } from "../components/FormField";
import { InputFormField } from "../components/InputFormField";
import { RandomNameButton } from "../components/RandomNameButton";
import { getRandomName } from "../library/random";

export function SignInPage(props) {
    const [ formState, setFormState ] = useState(getRandomName);

    function handleSubmit(event) {
        event.preventDefault();
        props.onSubmit(formState);
    }

    function handleUsernameChange(value) {
        setFormState(value);
    }

    console.log(formState);


    return (
        <div className="sign-in-page">
            <div className="card">
                <form className="sign-in-form" onSubmit={handleSubmit}>
                    <InputFormField id="input" label="username" type="text" onChange={handleUsernameChange} value={formState}/>
                    <FormField>
                        <RandomNameButton onRandomName={handleUsernameChange} />
                    </FormField>
                    <FormField>
                        <Button type="submit" label="Join"/>
                    </FormField>
                </form>
            </div>
        </div>
    );
};