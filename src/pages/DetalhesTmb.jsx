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
  const agua = (peso * 35) / 1000;

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
    <div className="bg-white/30 backdrop-blur-sm grid w-screen h-screen justify-center space-y-3">
      <div className="text-white space-y-4 flex flex-col items-center justify-center pb-4 bg-black/50 backdrop-blur-md rounded-md border border-gray-500">
        <h3 className="text-2xl font-bold py-3 flex items-center justify-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-10"
          >
            <path
              fillRule="evenodd"
              d="M4.5 3.75a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V6.75a3 3 0 0 0-3-3h-15Zm4.125 3a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm-3.873 8.703a4.126 4.126 0 0 1 7.746 0 .75.75 0 0 1-.351.92 7.47 7.47 0 0 1-3.522.877 7.47 7.47 0 0 1-3.522-.877.75.75 0 0 1-.351-.92ZM15 8.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15ZM14.25 12a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H15a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15Z"
              clipRule="evenodd"
            />
          </svg>
          {nome} - {sexo == 1 ? "Masculino" : "Feminino"}
        </h3>
        <h4 className="p-2 flex items-center justify-center gap-2 bg-black/50 backdrop-blur-md rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path d="m15 1.784-.796.795a1.125 1.125 0 1 0 1.591 0L15 1.784ZM12 1.784l-.796.795a1.125 1.125 0 1 0 1.591 0L12 1.784ZM9 1.784l-.796.795a1.125 1.125 0 1 0 1.591 0L9 1.784ZM9.75 7.547c.498-.021.998-.035 1.5-.042V6.75a.75.75 0 0 1 1.5 0v.755c.502.007 1.002.021 1.5.042V6.75a.75.75 0 0 1 1.5 0v.88l.307.022c1.55.117 2.693 1.427 2.693 2.946v1.018a62.182 62.182 0 0 0-13.5 0v-1.018c0-1.519 1.143-2.829 2.693-2.946l.307-.022v-.88a.75.75 0 0 1 1.5 0v.797ZM12 12.75c-2.472 0-4.9.184-7.274.54-1.454.217-2.476 1.482-2.476 2.916v.384a4.104 4.104 0 0 1 2.585.364 2.605 2.605 0 0 0 2.33 0 4.104 4.104 0 0 1 3.67 0 2.605 2.605 0 0 0 2.33 0 4.104 4.104 0 0 1 3.67 0 2.605 2.605 0 0 0 2.33 0 4.104 4.104 0 0 1 2.585-.364v-.384c0-1.434-1.022-2.7-2.476-2.917A49.138 49.138 0 0 0 12 12.75ZM21.75 18.131a2.604 2.604 0 0 0-1.915.165 4.104 4.104 0 0 1-3.67 0 2.605 2.605 0 0 0-2.33 0 4.104 4.104 0 0 1-3.67 0 2.605 2.605 0 0 0-2.33 0 4.104 4.104 0 0 1-3.67 0 2.604 2.604 0 0 0-1.915-.165v2.494c0 1.035.84 1.875 1.875 1.875h15.75c1.035 0 1.875-.84 1.875-1.875v-2.494Z" />
          </svg>
          Idade: {idade} anos |
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25a.75.75 0 0 1 .75.75v.756a49.106 49.106 0 0 1 9.152 1 .75.75 0 0 1-.152 1.485h-1.918l2.474 10.124a.75.75 0 0 1-.375.84A6.723 6.723 0 0 1 18.75 18a6.723 6.723 0 0 1-3.181-.795.75.75 0 0 1-.375-.84l2.474-10.124H12.75v13.28c1.293.076 2.534.343 3.697.776a.75.75 0 0 1-.262 1.453h-8.37a.75.75 0 0 1-.262-1.453c1.162-.433 2.404-.7 3.697-.775V6.24H6.332l2.474 10.124a.75.75 0 0 1-.375.84A6.723 6.723 0 0 1 5.25 18a6.723 6.723 0 0 1-3.181-.795.75.75 0 0 1-.375-.84L4.168 6.241H2.25a.75.75 0 0 1-.152-1.485 49.105 49.105 0 0 1 9.152-1V3a.75.75 0 0 1 .75-.75Zm4.878 13.543 1.872-7.662 1.872 7.662h-3.744Zm-9.756 0L5.25 8.131l-1.872 7.662h3.744Z"
              clipRule="evenodd"
            />
          </svg>
          Peso: {peso}kg |
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
            />
          </svg>
          Altura: {altura}cm
        </h4>
        <h4 className=" text-1xl flex items-center justify-center gap-4">
          <span className="flex items-center rounded-md bg-black/50 backdrop-blur-md p-2">
            <svg
              className="w-8 h-8 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6.31531 7c1.41852 0 1.41852 1.5 2.83703 1.5C10.5709 8.5 10.5709 7 11.9894 7s1.4185 1.5 2.837 1.5S17.6635 7 17.6635 7M6 3l1.07554 16.133C7.14558 20.1836 8.01818 21 9.07111 21h5.85779c1.0529 0 1.9255-.8164 1.9956-1.867L18 3H6Z"
              />
            </svg>
            Água: {agua}L
          </span>
          <span className="flex items-center rounded-md bg-black/50 backdrop-blur-md p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
              />
            </svg>
            TMB:&nbsp;
            {sexo == 1 ? masculino : feminino}
            Kcal
          </span>
        </h4>
      </div>

      <div className="bg-black/50 backdrop-blur-md flex flex-col p-3 rounded-md border border-gray-600">
        <h1 className="text-white text-3xl justify-center">
          Qual é o seu nível de atividade física?
        </h1>
        <p className="text-white">
          Baseado no nível de atividade física nós calculamos a ingestão
          calórica diária de macro nutrientes (proteinas, gorduras e
          carboidratos) verifique o seu nível na tabela abaixo.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <Sugestions
            titulo={"Sedentario"}
            agua={agua}
            sexo={sexo}
            prot={prot_sed_g}
            gord={gord_sed_g}
            carbo={carbo_sed_g}
            tipo={sexo == 1 ? masculino : feminino}
            atividade={1.2}
          />
          <Sugestions
            titulo={"Ativo"}
            agua={agua}
            sexo={sexo}
            prot={prot_int_g}
            gord={gord_int_g}
            carbo={carbo_int_g}
            tipo={sexo == 1 ? masculino : feminino}
            atividade={1.55}
          />
          <Sugestions
            titulo={"Muito Ativo"}
            agua={agua}
            sexo={sexo}
            prot={prot_avan_g}
            gord={gord_avan_g}
            carbo={carbo_avan_g}
            tipo={sexo == 1 ? masculino : feminino}
            atividade={1.725}
          />
        </div>
        <div className="bg-slate-200 p-3 rounded-md space-y-4">
          <h1 className="text-slate-700 text-2xl flex justify-center gap-4">
            GASTO ENERGÉTICO TOTAL
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-5 items-center gap-2">
            <h4 className="text-slate-900 text-1xl bg-white rounded-md p-2 flex justify-center">
              Nenhum exercício:&nbsp;
              <span className="font-bold">
                {sexo == 1
                  ? Math.round(masculino * 1.2)
                  : Math.round(feminino * 1.2)}
                kcal
              </span>
            </h4>
            <h4 className="text-slate-900 text-1xl  bg-white rounded-md p-2 flex justify-center">
              1 a 3 dias/semana:&nbsp;
              <span className="font-bold">
                {sexo == 1
                  ? Math.round(masculino * 1.375)
                  : Math.round(feminino * 1.375)}
                Kcal
              </span>
            </h4>
            <h4 className="text-slate-900 text-1xl  bg-white rounded-md p-2 flex justify-center">
              3 a 5 dias/semana:&nbsp;
              <span className="font-bold">
                {sexo == 1
                  ? Math.round(masculino * 1.55)
                  : Math.round(feminino * 1.55)}
                Kcal
              </span>
            </h4>
            <h4 className="text-slate-900 text-1xl  bg-white rounded-md p-2 flex justify-center">
              6 a 7 dias/semana:&nbsp;
              <span className="font-bold">
                {sexo == 1
                  ? Math.round(masculino * 1.725)
                  : Math.round(feminino * 1.725)}
                Kcal
              </span>
            </h4>
            <h4 className="text-slate-900 text-1xl bg-white rounded-md p-2 flex justify-center">
              2x ao dia:&nbsp;
              <span className="font-bold">
                {sexo == 1
                  ? Math.round(masculino * 1.9)
                  : Math.round(feminino * 1.9)}
                Kcal
              </span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DetalhesTmb;
