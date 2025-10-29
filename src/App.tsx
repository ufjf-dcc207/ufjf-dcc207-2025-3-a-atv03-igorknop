import Animal from './Animal'
import './App.css'
import Exibicao from './Exibicao'
type ExibicaoType = {
  inicio: string;
  fim: string;
  cercado: string;
  animais: Array<AnimalType>
};
type AnimalType = {
  icone: string;
  nome: string;
  peso: number;
  emExtincao: boolean
};
function App() {
  const exibicoes: Array<ExibicaoType> =
    [{
      inicio: "2025-10-11T08:00:00-03:00",
      fim: "2025-10-11T12:00-03:00",
      cercado: "ICE", animais:
        [
          { icone: '🦁', nome: 'Leão', peso: 190, emExtincao: true },
          { icone: '🦩', nome: 'Flamingo', peso: 12, emExtincao: true }
        ]
    },
    {
      inicio: "2025-10-11T13:00-013:00",
      fim: "2025-10-11T18:00-03:00",
      cercado: 'ICB', animais:
        [
          { icone: '🦒', nome: 'Girafa', peso: 1200, emExtincao: true },
          { icone: '🦜', nome: 'Papagaio', peso: 0.4, emExtincao: false }
        ]
    }
    ];

  return (
    <div>
      {exibicoes.map(ex =>
        <Exibicao
          key={ex.cercado}
          inicio={new Date(ex.inicio)}
          fim={new Date(ex.fim)}
          cercado={ex.cercado}>
          {ex.animais.map(an => <Animal
            key={an.nome}
            nome={an.nome}
            icone={an.icone}
            peso={an.peso}
            emExtincao={an.emExtincao}
          />)}
        </Exibicao>
      )}

    </div >
  )
}

export default App
