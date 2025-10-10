import {type ReactNode } from "react";
import "./Exibicao.css"

type ExibicaoProps = {
    inicio: Date;
    fim: Date;
    cercado: string;
    children?: ReactNode;
}


export default function Exibicao({ inicio, fim, cercado,children }: ExibicaoProps) {
    return (
        <div className="exibicao">
            <div className="inicio">{inicio.toLocaleString()}</div>
            <div className="fim">{fim.toLocaleString()}</div>
            <div className="cercado">{cercado}</div>
            <div className="animais">{children}</div>
        </div>
    );
}