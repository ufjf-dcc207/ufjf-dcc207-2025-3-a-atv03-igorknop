import Animal from './Animal'
import './App.css'
import Exibicao from './Exibicao'
type AnimalTuplaType = [string, string, number, boolean];
function App() {
  const exibicao1: Array<AnimalTuplaType> = [
    ['🦁', 'Leão', 190, true],
    ['🦩', 'Flamingo', 12, true],
    ['🦒', 'Girafa', 1200, true]
  ];
  const exibicao2 = [
    ['🦜', 'Papagaio', 0.4, false]
  ];
  
  return (
    <div>
      <Exibicao inicio={new Date("2025-10-11T08:00:00-03:00")}
        fim={new Date("2025-10-11T12:00-03:00")}
        cercado='ICE'>
        {exibicao1.map((tupla) => <Animal
          key={tupla[1]}
          icone={tupla[0]}
          nome={tupla[1]}
          peso={tupla[2]}
          emExtincao={tupla[3]}
        />)}

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
