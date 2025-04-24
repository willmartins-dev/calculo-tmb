import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function DetalhesTmb() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const nome = searchParams.get("nome");
  const idade = searchParams.get("idade");
  const peso = searchParams.get("peso");
  const altura = searchParams.get("altura");
  const sexo = searchParams.get("sexo");
  const masculino = 66 + 13.7 * peso + 5 * altura - 6.8 * idade;
  const feminino = 655 + 9.6 * peso + 1.8 * altura - 4.7 * idade;

  return (
    <div className="w-screen h-screen bg-slate-500 p-6 space-y-4 justify-center flex">
      <div className="w-[500px]">
        <div className="flex justify-center relative m-6">
          <button
            onClick={() => navigate(-1)}
            className="bg-slate-900  px-2 rounded-md absolute left-0 top-0 bottom-0 text-slate-100"
          >
            <ChevronLeft />
          </button>
          <h1 className="text-white text-3xl justify-center">Dados pessoais</h1>
        </div>

        <div className="bg-slate-200 p-4 rounded-md">
          <h3 className="text-3xl py-3">
            {nome} - {sexo == 1 ? "Masculino" : "Feminino"}
          </h3>
          <h4 className="py-2">Idade: {idade} anos</h4>
          <h4 className="py-2">Peso: {peso}kg</h4>
          <h4 className="py-2">Altura: {altura}cm</h4>
        </div>
        <h1 className="text-white text-2xl justify-center">
          TAXA METABOLICA BASAL
        </h1>
        <div className="bg-slate-200 p-4 rounded-md">
          <h4 className="text-slate-900 text-2xl">
            TMB:&nbsp;
            {sexo == 1 ? masculino : feminino}
            Kcal
          </h4>
        </div>
        <h1 className="text-white text-2xl justify-center">
          GASTO ENERGÉTICO TOTAL
        </h1>
        <div className="bg-slate-200 p-3 rounded-md space-y-4">
          <h4 className="text-slate-900 text-1xl">
            Nenum exercício:&nbsp;
            {sexo == 1
              ? Math.round(masculino * 1.2)
              : Math.round(feminino * 1.2)}
            Kcal
          </h4>
          <h4 className="text-slate-900 text-1xl">
            Exercício leve 1 a 3 dias/semana:&nbsp;
            {sexo == 1
              ? Math.round(masculino * 1.375)
              : Math.round(feminino * 1.375)}
            Kcal
          </h4>
          <h4 className="text-slate-900 text-1xl">
            Exercício moderado 3 a 5 dias/semana:&nbsp;
            {sexo == 1
              ? Math.round(masculino * 1.55)
              : Math.round(feminino * 1.55)}
            Kcal
          </h4>
          <h4 className="text-slate-900 text-1xl">
            Muito ativo 6 a 7 dias/semana:&nbsp;
            {sexo == 1
              ? Math.round(masculino * 1.725)
              : Math.round(feminino * 1.725)}
            Kcal
          </h4>
          <h4 className="text-slate-900 text-1xl">
            Extremamente ativo 2x ao dia:&nbsp;
            {sexo == 1
              ? Math.round(masculino * 1.9)
              : Math.round(feminino * 1.9)}
            Kcal
          </h4>
        </div>
      </div>
    </div>
  );
}
export default DetalhesTmb;
