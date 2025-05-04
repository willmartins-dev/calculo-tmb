import { useEffect, useState } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState(() => {
    const saveData = localStorage.getItem("tmb");

    try {
      return saveData ? JSON.parse(saveData) : [];
    } catch (error) {
      console.error("Erro em JSON parsing localStorage");
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("tmb", JSON.stringify(tasks));
  }, [tasks]);

  function onAddTaskSubmit(nome, idade, altura, peso, sexo) {
    const newCalculo = {
      id: tasks.length + 1,
      nome: nome,
      idade: idade,
      altura: altura,
      peso: peso,
      sexo: sexo,
      isCompleted: false,
    };
    setTasks([...tasks, newCalculo]);
  }
  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id == taskId) {
        return { ...tasks, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }
  function onDeleteTask(taskId) {
    const delTask = tasks.filter((task) => task.id != taskId);
    setTasks(delTask);
  }
  return (
    <div className="w-screen h-screen flex justify-center p-6 bg-white/30 backdrop-blur-sm">
      <div className="w-[500px] space-y-4">
        <h1 className="box-reveal-top flex flex-col items-center justify-center text-3xl text-green-950 font-bold text-center bg-white rounded-md p-4 shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-10 text-red-800"
          >
            <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
          </svg>
          Saúde Calculada
        </h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTask={onDeleteTask}
        />
      </div>
    </div>
  );
}

export default App;
