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
      <div className=" bg-black/70 shadow-md rounded p-2 flex flex-col items-center">
        <div className="dataCard customerCard"></div>
        <h4 className="text-red-700 text-2xl">
          {titulo}:&nbsp;
          {tmb}
          Kcal
        </h4>

        <h4 className="text-white">
          Proteínas: {Math.round(prot)}g ({prot_kcal}kcal)
        </h4>
        <h4 className="text-white">
          Gorduras: {Math.round(gord)}g ({gord_kcal}kcal)
        </h4>
        <h4 className="text-white">
          Carboidratos:&nbsp;
          {Math.round(carbo)}g ({Math.round(carb_kcal)}kcal)
        </h4>
      </div>
    </div>
  );
};

export default Sugestions;
