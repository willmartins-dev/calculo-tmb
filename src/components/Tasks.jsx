import {
  CheckCheckIcon,
  ChevronLeft,
  ChevronRight,
  TrashIcon,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks({ tasks, onDeleteTask, onTaskClick }) {
  const navigate = useNavigate();

  function onSeeDetails(task) {
    const query = new URLSearchParams();
    query.set("nome", task.nome);
    query.set("idade", task.idade);
    query.set("peso", task.peso);
    query.set("altura", task.altura);
    query.set("sexo", task.sexo);

    navigate(`/resultado?${query.toString()}`);
  }

  return (
    <div>
      <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
        {tasks.map((task) => (
          <li key={task.id} className="flex gap-2">
            <button
              onClick={() => onTaskClick(task.id)}
              className={`text-left bg-slate-400 w-full text-white p-2 rounded-md ${
                task.isCompleted && "line-through"
              }`}
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
