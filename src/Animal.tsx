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
            <div>{icone}</div>
            <div>{nome}</div>
            <div>{peso.toLocaleString()}kg</div>
            <div>{emExtincao}</div>
        </div>
    );
}