import { useState } from "react";
import { FormField } from "./FormField";
import { avatarImages } from "../library/avatar";



export function AvatarFormField(props) {
    const [index, setIndex] = useState(0);

    function handleClickP(){
        setIndex(index - 1);
        if (index <= 0) {
            setIndex(avatarImages.length -1)
        }
        console.log(index);
    }
    
    function handleClickN(){
        setIndex(index + 1);
        if (index >= avatarImages.length -1) {
            setIndex(0)
        }
        console.log(index);
    }

    props.onChange(index);

    return (
        <FormField>
            <button type="button" onClick={handleClickP}>Previous</button>
            <img src={avatarImages[index]} width={100} height={100}/>
            <button type="button" onClick={handleClickN}>Next</button>
        </FormField >
    )
}