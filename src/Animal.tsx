import "./Animal.css"

type AnimalProps = {
    icone?: string;
    nome?: string;
    peso?: number;
    emExtincao?: boolean;
}


export default function Animal({ icone = "?", nome = "Desconhecido", peso = 0.1, emExtincao = false }: AnimalProps) {
    return (
        <div className="animal">
            <div className="icone">{icone}</div>
            <div className="nome">{nome}</div>
            <div className="peso">{peso.toLocaleString()}kg</div>
            {emExtincao ? <div className="extincao">Ameaçado</div>
                : <div className="seguro">Seguro</div>
            }
        </div>
    );
}