import './todo-form.style.css'
import { TextInput } from "../TextInput"
import { Button } from "../Button"

export function ToDoForm({ onSubmit, defaultValue}) {

    return (
        <form action={onSubmit} className="to-do-form">
            <TextInput
                name='description'
                placeholder={"Digite o item que deseja adicionar"}
                required
                defaultValue = {defaultValue}
            />
            <Button>Salvar Item</Button>
        </form>
    )

}