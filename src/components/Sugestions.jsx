import React from "react";

const Sugestions = ({ titulo, sexo, tipo, prot, gord, carbo, atividade }) => {
  return (
    <div className="flex flex-col my-2">
      <div className=" bg-white shadow-md rounded p-2">
        <h4 className="text-red-700 text-2xl">
          {titulo}:&nbsp;
          {sexo == 1
            ? Math.round(tipo * atividade)
            : Math.round(tipo * atividade)}
          Kcal
        </h4>

        <h4>Proteínas: {prot}g</h4>
        <h4>Gorduras: {gord}g</h4>
        <h4>
          Carboidratos:&nbsp;
          {carbo}g
        </h4>
      </div>
    </div>
  );
};

export default Sugestions;
