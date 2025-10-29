import Animal from './Animal'
import './App.css'
import Exibicao from './Exibicao'
type AnimalTuplaType = [string, string, number, boolean];
function App() {
  const exibicao1:AnimalTuplaType[] = [
    ['🦁', 'Leão', 190, true],
    ['🦩', 'Flamingo', 12, true],
    ['🦒', 'Girafa', 1200, true]
  ];
  const exibicao2 = [
    ['🦜', 'Papagaio', 0.4, false]
  ];
  const elementosAnimais = [];
  for (let i = 0; i < exibicao1.length; i++) {
    elementosAnimais.push(
      <Animal
        key={exibicao1[i][1]}
        icone={exibicao1[i][0]}
        nome={exibicao1[i][1]}
        peso={exibicao1[i][2]}
        emExtincao={exibicao1[i][3]} />)
  }
  return (
    <div>
      <Exibicao inicio={new Date("2025-10-11T08:00:00-03:00")}
        fim={new Date("2025-10-11T12:00-03:00")}
        cercado='ICE'>
        {elementosAnimais}

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
