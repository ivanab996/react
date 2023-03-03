import { InputFormField } from "../components/InputFormField";
import { Message } from "../components/Message";
import { SubmitFormField } from "../components/SubmitFormField";

export function ChatPage() {
    return (
        <div>
                Chat page
            <div className="message-list">
               <Message author="Ivana" text="Pozdrav"/>
               <Message author="Iva" text="Pozdrav i tebi" />
            </div>
            <form>
                <InputFormField />
                <SubmitFormField  label="Send"/>
            </form>
        </div>
    );
};