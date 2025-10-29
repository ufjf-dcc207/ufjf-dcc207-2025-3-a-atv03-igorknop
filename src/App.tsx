import Animal from './Animal'
import './App.css'
import Exibicao from './Exibicao'
import DADOS from "./exibicoes.json";

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
    DADOS;

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
