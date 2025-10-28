import "./style.css"

export function ListaSuspensa({ itens, ...rest }) {
    return (
        <select {...rest} className="lista-suspensa-form" defaultValue="">
            <option className="opcao" value="" disabled >
                Selecione uma opção
            </option >
            {itens.map((item) =>
                <option className="opcao" key={item.id} value={item.id}>
                    {item.nome}
                </option>
            )
            }
        </select>
    )
}