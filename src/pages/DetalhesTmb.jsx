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

  return (
    <div className="w-screen h-screen bg-slate-500 p-6">
      <div className="flex justify-center relative m-6">
        <button
          onClick={() => navigate(-1)}
          className="absolute left-0 top-0 bottom-0 text-slate-100"
        >
          <ChevronLeft />
        </button>
        <h1 className="text-white text-3xl justify-center">
          Taxa metabolica basal
        </h1>
      </div>

      <div className="bg-slate-200 p-4 rounded-md">
        <h1 className="text-3xl">
          {nome} - {sexo == 1 ? "Masculino" : "Feminino"}
        </h1>
        <h4>Idade:{idade}</h4>
        <h4>Peso:{peso}kg</h4>
        <h4>Altura:{altura}cm</h4>
        <h4 className="text-slate-900 text-3xl">
          Resultado:
          {sexo == 1
            ? 66 + 13.7 * peso + 5 * altura - 6.8 * idade
            : 655 + 9.6 * peso + 1.8 * altura - 4.7 * idade}
          Kcal
        </h4>
      </div>
    </div>
  );
}
export default DetalhesTmb;
