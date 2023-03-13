import { useState } from "react";
import { AvatarFormField } from "../components/AvatarFormField";
import { Button } from "../components/Button";
import { FormField } from "../components/FormField";
import { InputFormField } from "../components/InputFormField";
import { RandomNameButton } from "../components/RandomNameButton";
import { avatarImages } from "../library/avatar";
import { getRandomName } from "../library/random";

export function SignInPage(props) {
    const [ formState, setFormState ] = useState(getRandomName);
    const [ avatar, setAvatar ] = useState(0);

    function handleSubmit(event) {
        event.preventDefault();
        props.onSubmit({
            username: formState,
            avatarIndex: avatar,
        });
    }

    function handleUsernameChange(value) {
        setFormState(value);
    }

    function handleAvatarChange(avatarIndex) {
        setAvatar(avatarIndex);
    }

    console.log(formState);


    return (
        <div className="sign-in-page">
            <div className="card">
                <form className="sign-in-form" onSubmit={handleSubmit}>
                    <AvatarFormField onChange={handleAvatarChange}/>
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