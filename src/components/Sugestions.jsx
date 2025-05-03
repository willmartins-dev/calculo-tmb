import React, { PureComponent } from "react";
import { ResponsiveContainer, PieChart, Pie, Legend } from "recharts";

const Sugestions = ({ titulo, tipo, prot, gord, carbo, atividade }) => {
  const tmb = Math.round(tipo * atividade);
  const prot_kcal = prot * 4;
  const gord_kcal = gord * 9;
  const carb_kcal = carbo * 4;
  const pct_prot_kcal = (prot_kcal / tmb) * 100;
  const pct_gord_kcal = (gord_kcal / tmb) * 100;
  const pct_carb_kcal = (carb_kcal / tmb) * 100;

  const data = [
    { name: "PROTEÍNAS", value: Math.round(pct_prot_kcal) },
    { name: "CARBOIDRATOS", value: Math.round(pct_carb_kcal) },
    { name: "GORDURAS", value: Math.round(pct_gord_kcal) },
  ];

  return (
    <div className="flex flex-col my-2">
      <div className=" bg-white shadow-md rounded p-2 flex flex-col items-center">
        <div style={{ width: "100%", height: 200 }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie dataKey="value" data={data} fill="#CCC" label />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="dataCard customerCard"></div>
        <h4 className="text-red-700 text-2xl">
          {titulo}:&nbsp;
          {tmb}
          Kcal
        </h4>

        <h4>
          Proteínas: {prot}g ({prot_kcal}kcal)
        </h4>
        <h4>
          Gorduras: {gord}g ({gord_kcal}kcal)
        </h4>
        <h4>
          Carboidratos:&nbsp;
          {carbo}g ({carb_kcal}kcal)
        </h4>
      </div>
    </div>
  );
};

export default Sugestions;
