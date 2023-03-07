import { FormField } from "./FormField";

export function InputFormField(props) {
    function handleChange(event) {
        props.onChange(event.target.value);
    }
    return (
        <FormField>
            <label htmlFor={props.id}>{props.label}</label>
            <input id={props.id} type={props.type} onChange={handleChange} value={props.value}/>
        </FormField>
    );
};