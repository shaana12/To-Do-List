import React, { useState } from "react";
import './App.css'

function App() {

  // task va contenir la valeur actuelle de l'input
  // setTask est la fonction qui met à jour cette valeur
  // useState("") initialise tast avec une chaine vide
  const [task, setTask] = useState("");

  // Liste des taches
  const [tasks, setTasks] = useState<string[]>([]); 

  const addTask = () => {
    //console.log("Tache ajoutée:", task);

    //task.trim vérifie si task n'est pas vide
    if (task.trim()) {
      setTasks([...tasks, task]) // ajouter la tache à la liste des taches
      setTask(""); // Réinitialiser l'input
    }
  }

  const removeTask = (index:number) => {
    // Créer un nouveau tableau avec toutes les taches sauf celles à l'index donné
    // la fonction .filter crée un nouveau tableau qui exclus la tache à l'index donné
    // _ est une convention pour dire que la premiere valeur du tableau (task) n'est pas utilisé, on s'interesse seulement à l'index i
    setTasks(tasks.filter((_, i) => i !== index));
  }

  return (
    <>
      <h1>To-Do List</h1>
      <div>

      <input 
      type="text" 
      placeholder='Ecrire une tache'
      // value={task} fais en sorte que l'input affiche toujours la valeur de task
      value={task}
      // met a jour task a chaque frappe dans l'input
      onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>Ajouter la tache</button>
      </div>

      {/* parcours toutes les tache sdans l'état tasks et crée un div pour chacune d'elle */}
      <div>
        {tasks.map((task, index) => (
          <div key={index}>
          {task}
          <button onClick={()=> removeTask(index)}>Supprimer la tache</button>
          </div>

        ))}
      </div>

    </>
  )
}

export default App
