import './App.css'
import { Banner } from './components/Banner';
import { FormularioDeEvento } from './components/FormularioDeEvento'
import { Tema } from './components/Tema';
import { CardEvento } from './components/CardEvento';
import { useState } from 'react';


function App() {


  const temas = [
    { id: 1, nome: 'front-end' },
    { id: 2, nome: 'back-end' },
    { id: 3, nome: 'devops' },
    { id: 4, nome: 'inteligência artificial' },
    { id: 5, nome: 'data science' },
    { id: 6, nome: 'cloud' }
  ];

  const [eventos, setEventos] = useState([
    {
      capa: '/Imagem1.png',
      tema: temas[0],
      data: new Date(),
      titulo: 'Mulheres no Front'
    }
  ])

  function adicionarEventos(evento) {
    setEventos([...eventos, evento])
    console.log(eventos)
  }

  return (

    <main>
      <header>
        <img src="/Logo.png" alt="" />
      </header>
      <Banner />
      <FormularioDeEvento temas={temas} aoSubmeter={adicionarEventos} />
      <section className="container">
        {temas.map((tema) => {
          if (!eventos.some(function (evento) {
            return evento.tema.id == tema.id
          })) {
            return null
          } return (
            <section key={tema.id}>
              <Tema tema={tema} />
              <div className='eventos'>
                {
                  eventos.filter((evento) => evento.tema.id == tema.id)
                    .map((evento, index) => <CardEvento key={index} evento={evento}
                    />)}
              </div>
            </section>
          )
        }
        )}
      </section>
    </main>

  )
}

export default App
