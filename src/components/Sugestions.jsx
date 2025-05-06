import React from "react";

const Sugestions = ({ titulo, tipo, prot, gord, carbo, atividade }) => {
  const tmb = Math.round(tipo * atividade);
  const prot_kcal = prot * 4;
  const gord_kcal = gord * 9;
  const carb_kcal = carbo * 4;
  const pct_prot_kcal = (prot_kcal / tmb) * 100;
  const pct_gord_kcal = (gord_kcal / tmb) * 100;
  const pct_carb_kcal = (carb_kcal / tmb) * 100;

  return (
    <div className="flex flex-col my-2">
      <div className=" bg-black/70 shadow-md rounded p-2 flex flex-col">
        <h4 className="bg-white/30 backdrop-blur-sm flex justify-center rounded-md text-white py-2 text-2xl mb-4">
          {titulo}:&nbsp;
          {tmb}
          Kcal/dia
        </h4>

        <h4 className="text-white">
          Proteínas: {Math.round(prot)}g ({prot_kcal}kcal)/dia
        </h4>
        <div
          className="pct-graph felx justify-center rounded-md font-semibold bg-red-600"
          style={{ "--bar-width": `${pct_prot_kcal}%` }}
        >
          {Math.round(pct_prot_kcal)}%
        </div>
        <h4 className="text-white">
          Gorduras: {Math.round(gord)}g ({gord_kcal}kcal)/dia
        </h4>
        <div
          className="pct-graph felx justify-center rounded-md bg-yellow-500 font-semibold"
          style={{ "--bar-width": `${pct_gord_kcal}%`, transition: "width 1s" }}
        >
          {Math.round(pct_gord_kcal)}%
        </div>
        <h4 className="text-white">
          Carboidratos:&nbsp;
          {Math.round(carbo)}g ({Math.round(carb_kcal)}kcal)/dia
        </h4>
        <div
          className="pct-graph felx justify-center rounded-md bg-orange-500 font-semibold"
          style={{ "--bar-width": `${pct_carb_kcal}%`, transition: "width 1s" }}
        >
          {Math.round(pct_carb_kcal)}%
        </div>
      </div>
    </div>
  );
};

export default Sugestions;
