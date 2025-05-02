import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Sugestions from "../components/Sugestions";

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

  //Sedentario
  let prot_sed_g = peso * 1;
  let gord_sed_g = peso * 0.8;
  let proteina_sed_kcal = prot_sed_g * 4;
  let gordura_sed_kcal = gord_sed_g * 9;

  let prot_gord_kcal = gordura_sed_kcal + proteina_sed_kcal;

  let carbo_sed_g =
    sexo == 1
      ? (Math.round(masculino * 1.2) - prot_gord_kcal) / 4
      : (Math.round(feminino * 1.2) - prot_gord_kcal) / 4;

  //Intermediário
  let prot_int_g = peso * 1.4;
  let gord_int_g = peso * 1;
  let prot_int_kcal = prot_int_g * 4;
  let gord_int_kcal = gord_int_g * 9;

  let prot_gord_kcal_int = gord_int_kcal + prot_int_kcal;
  let carbo_int_g =
    sexo == 1
      ? (Math.round(masculino * 1.55) - prot_gord_kcal_int) / 4
      : (Math.round(feminino * 1.55) - prot_gord_kcal_int) / 4;

  //Avançado
  let prot_avan_g = peso * 2;
  let gord_avan_g = peso * 1;
  let prot_avan_kcal = prot_avan_g * 4;
  let gord_avan_kcal = gord_avan_g * 9;

  let prot_gord_kcal_avan = gord_avan_kcal + prot_avan_kcal;

  let carbo_avan_g =
    sexo == 1
      ? (Math.round(masculino * 1.725) - prot_gord_kcal_avan) / 4
      : (Math.round(feminino * 1.725) - prot_gord_kcal_avan) / 4;

  return (
    <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 w-screen h-screen p-6  justify-center ">
      <div className="">
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
      <div className="flex flex-col p-3">
        <h1 className="text-white text-3xl justify-center">
          Qual é o seu nível de atividade física?
        </h1>
        <p className="text-white">
          Baseado no nível de atividade física nós calculamos a ingestão
          calórica diária de macro nutrientes (proteinas, gorduras e
          carboidratos) verifique o seu nível na tabela abaixo.
        </p>

        <Sugestions
          titulo={"Sedentario"}
          sexo={sexo}
          prot={prot_sed_g}
          gord={gord_sed_g}
          carbo={carbo_sed_g}
          tipo={sexo == 1 ? masculino : feminino}
          atividade={1.2}
        />
        <Sugestions
          titulo={"Intermediario"}
          sexo={sexo}
          prot={prot_int_g}
          gord={gord_int_g}
          carbo={carbo_int_g}
          tipo={sexo == 1 ? masculino : feminino}
          atividade={1.55}
        />
        <Sugestions
          titulo={"Avançado"}
          sexo={sexo}
          prot={prot_avan_g}
          gord={gord_avan_g}
          carbo={carbo_avan_g}
          tipo={sexo == 1 ? masculino : feminino}
          atividade={1.725}
        />
      </div>
    </div>
  );
}
export default DetalhesTmb;
