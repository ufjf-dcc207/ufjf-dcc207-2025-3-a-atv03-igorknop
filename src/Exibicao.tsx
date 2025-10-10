import "./Exibicao.css"

type ExibicaoProps = {
    inicio: Date;
    fim: Date;
    cercado: string;
}


export default function Exibicao({ inicio, fim, cercado }: ExibicaoProps) {
    return (
        <div className="exibicao">
            <div className="inicio">{inicio.toLocaleString()}</div>
            <div className="fim">{fim.toLocaleString()}</div>
            <div className="cercado">{cercado}</div>
        </div>
    );
}