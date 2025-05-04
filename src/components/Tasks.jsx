import { ChevronRight, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks({ tasks, onDeleteTask, onTaskClick }) {
  const navigate = useNavigate();

  function onSeeDetails(task) {
    const query = new URLSearchParams();
    query.set("nome", task.nome);
    query.set("idade", task.idade);
    query.set("peso", task.altura);
    query.set("altura", task.peso);

    query.set("sexo", task.sexo);

    navigate(`/resultado?${query.toString()}`);
  }

  return (
    <div>
      <ul className="box-reveal-bottom bg-black/50 backdrop-blur-md space-y-4 p-6 rounded-md shadow border border-solid border-gray-400">
        {tasks.map((task) => (
          <li key={task.id} className="flex gap-2">
            <button
              onClick={() => onSeeDetails(task)}
              className={`text-left font-semibold bg-white hover:bg-slate-400 hover:text-white text-slate-800 w-full p-2 rounded-md`}
            >
              {task.nome}
            </button>
            <button
              onClick={() => onSeeDetails(task)}
              className="bg-slate-900 text-white rounded-md p-2"
            >
              <ChevronRight />
            </button>
            <button
              onClick={() => onDeleteTask(task.id)}
              className="bg-red-900 text-white rounded-md p-2"
            >
              <TrashIcon />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
