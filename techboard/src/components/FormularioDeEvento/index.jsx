import "./style.css"
import { TituloFormulario } from "../TituloFormulario"
import { CampoDeEntrada } from "../CampoDeEntrada"
import { CampoDeFormulario } from "../CampoDeFormulario"
import { Label } from "../Label"
import { Botao } from "../botao"
import { ListaSuspensa } from "../ListaSuspensa"


export function FormularioDeEvento({temas, aoSubmeter}) {

    function aoFormSubmetido(formData){
        const evento ={
            capa: '/Imagem1.png',
            tema:temas.find((item) => item.id == formData.get('tema')),
            data: new Date(formData.get('dataEvento')),
            titulo:formData.get('nomeEvento'),
        }

        aoSubmeter(evento)

    }

    return (

        <form className="form-evento" action={aoFormSubmetido}>
            <TituloFormulario>
                Preencha para criar um evento:
            </TituloFormulario>
            <div className="campos">
                <CampoDeFormulario>
                    <Label htmlFor="nomeEvento">Qual é o nome do evento?</Label>
                    <CampoDeEntrada type="text" id="nomeEvento" name="nomeEvento" placeholder="Summer dev hits" />
                </CampoDeFormulario>
                <CampoDeFormulario>
                    <Label htmlFor="dataEvento">Data do evento?</Label>
                    <CampoDeEntrada type="date" name="dataEvento" id="dataEvento" placeholder="Summer dev hits" />
                </CampoDeFormulario>
                <CampoDeFormulario>
                    <Label htmlFor="tema">Tema do evento</Label>
                    <ListaSuspensa id="tema" name="tema" itens={temas}/>
                </CampoDeFormulario>
            </div>
            <div className="acoes">
                <Botao>Criar evento</Botao>
            </div>
        </form>

    )
}