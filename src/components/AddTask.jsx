import { useState } from "react";

function AddTask({ onAddTaskSubmit }) {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");

  const [sexo, setSexo] = useState("");
  const options = [
    {
      label: "Homem",
      value: 1,
    },
    {
      label: "Mulher",
      value: 2,
    },
  ];
  console.log(sexo);
  return (
    <div className="box-reveal-left bg-black/50 backdrop-blur-md space-y-4 p-4 rounded-md  shadow-md border border-solid border-gray-400">
      <h1 className="text-white text-2xl flex justify-center">
        Preencha seus dados abaixo
      </h1>
      <div className="flex items-center justify-center gap-4">
        {options.map((option) => (
          <label
            key={option.value}
            className="flex items-center gap-4 cursor-pointer w-full bg-yellow-500 p-2 text-white font-semibold rounded-md  "
            id={`radio-${option.value}`}
          >
            <input
              className="w-5 h-5 ring-red-800"
              type="radio"
              name="sexo"
              value={option.value}
              onChange={(event) => setSexo(event.target.value)}
              id={`radio-${option.value}`}
            />
            {option.label}
          </label>
        ))}
      </div>
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
        className="flex items-center justify-center gap-2 shadow w-full bg-orange-500 hover:bg-red-700 text-white tex-white px-4 py-2 rounded-md font-medium"
      >
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
            d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z"
          />
        </svg>
        CALCULAR DADOS
      </button>
    </div>
  );
}

export default AddTask;
