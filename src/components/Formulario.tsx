import Cliente from "@/core/Cliente";
import React, { useState } from "react";
import Botao from "./Botao";
import Entrada from "./Entrada";

interface FormularioProps {
  cliente: Cliente;
}

export default function Formulario(props: FormularioProps) {
  const id = props.cliente?.id;
  const [nome, setNome] = useState(props.cliente?.nome ?? "");
  const [idade, setIdade] = useState(props.cliente?.idade ?? 0);

  return (
    <div>
      {id ? <Entrada texto="Codigo" valor={id} somenteLeitura /> : false}
      <Entrada
        texto="Nome"
        valor={nome}
        valorMudou={setNome}
        className="mb-5"
      />
      <Entrada
        texto="Idade"
        tipo="number"
        valor={idade}
        valorMudou={setIdade}
        className="mb-5"
      />
      <div className="flex justify-end mt-3">
        <Botao cor="blue" className="mr-2">
          {id ? "Alterar" : "Salvar"}
        </Botao>
        <Botao>Cancelar</Botao>
      </div>
    </div>
  );
}
