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
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Calculadora de TMB
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
