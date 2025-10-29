import Animal from './Animal'
import './App.css'
import Exibicao from './Exibicao'

function App() {
  const exibicao1 = [
    <Animal icone='🦁' nome='Leão' peso={190} emExtincao={true} />,
    <Animal icone='🦩' nome='Flamingo' peso={12} emExtincao={true} />,
    <Animal icone='🦒' nome='Girafa' peso={1200} emExtincao={true} />
  ];

  const exibicao2 = [
        <Animal icone='🦜' nome='Papagaio' peso={0.4} emExtincao={false} />

  ];

  return (
    <div>
      <Exibicao inicio={new Date("2025-10-11T08:00:00-03:00")}
        fim={new Date("2025-10-11T12:00-03:00")}
        cercado='ICE'>
          {exibicao1}

      </Exibicao>
      <Exibicao inicio={new Date("2025-10-11T13:00-013:00")}
        fim={new Date("2025-10-11T18:00-03:00")}
        cercado='ICB'>
          {exibicao2}
      </Exibicao>

    </div>
  )
}

export default App
