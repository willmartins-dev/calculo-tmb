import { useState } from "react";

function AddTask({ onAddTaskSubmit }) {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");

  const [sexo, setSexo] = useState("");
  const options = [
    {
      label: "Masculino",
      value: 1,
    },
    {
      label: "Feminino",
      value: 2,
    },
  ];

  return (
    <div className="bg-slate-400 space-y-4 p-4 rounded-md">
      <select
        onChange={(event) => setSexo(event.target.value)}
        className="py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
      >
        <option value="">--Selecione o Sexo--</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Digite o nome"
        className="w-full border-slate-300 border outline-slate-400 px-4 py-2 rounded-md"
        value={nome}
        onChange={(event) => setNome(event.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Digite o Idade"
        className="w-full border-slate-300 border outline-slate-400 px-4 py-2 rounded-md"
        value={idade}
        onChange={(event) => setIdade(event.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Digite o Peso"
        className="w-full border-slate-300 border outline-slate-400 px-4 py-2 rounded-md"
        value={peso}
        onChange={(event) => setPeso(event.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Digite o Altura"
        className="w-full border-slate-300 border outline-slate-400 px-4 py-2 rounded-md"
        value={altura}
        onChange={(event) => setAltura(event.target.value)}
      ></input>
      <button
        onClick={() => {
          //Verifica vazio
          if (!nome.trim() || !idade.trim() || !sexo.trim()) {
            return alert("Digite algo");
          }
          onAddTaskSubmit(nome, idade, peso, altura, sexo);
          setNome("");
          setIdade("");
          setPeso("");
          setAltura("");
          setSexo("");
        }}
        className="shadow w-full bg-green-900 text-white tex-white px-4 py-2 rounded-md font-medium"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
