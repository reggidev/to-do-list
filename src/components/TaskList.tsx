import { Notepad, PlusCircle, Trash } from '@phosphor-icons/react';
import { useState, type ChangeEvent, type FormEvent, type InvalidEvent } from 'react';

import styles from './TaskList.module.css';

interface Task {
  id: number;
  text: string;
  isComplete: boolean;
}

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]); // Estado para armazenar todas as tarefas
  const [newTaskText, setNewTaskText] = useState(''); // Estado para o texto da nova tarefa

  // Funcão para criar uma nova tarefa
  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault(); // Evita que página seja recarregada ao enviar formulário

    const newTask = {
      id: tasks.length + 1,
      text: newTaskText,
      isComplete: false
    };

    setTasks([...tasks, newTask]);
    setNewTaskText('');
  }

  // Função para atualizar o estado quando o usuário digita uma nova tarefa
  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório.');
  }

  // Função para alterar a conclusão de uma tarefa
  function handleToggleTaskCompletion(taskId: number) {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {...task, isComplete: !task.isComplete } // Inver o valor de isComplete
      }
      return task;
    });

    setTasks(updatedTasks); // Atualiza o estado com as tarefas modificadas
  }

  // Função para deletar uma tarefa
  function handleDeleteTask(taskId: number) {
    const tasksWithoutDeletedOne = tasks.filter(task => task.id !== taskId);
    setTasks(tasksWithoutDeletedOne); // Atualiza o estado com as tarefas restantes
  }

  const completedTasksCount = tasks.filter(task => task.isComplete).length;

  const isTaskEmpty = newTaskText.length === 0;

  return (
    <section className={styles.tasks}>
      <form className={styles.taskForm} onSubmit={handleCreateNewTask}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={newTaskText} // Este é o valor do estado, que veremos no próximo passo
          onChange={handleNewTaskChange} // Função que atualiza o texto digitado
          onInvalid={handleNewTaskInvalid} // Função que exibe mensagem de erro
          required
        /> 
        <button type="submit" disabled={isTaskEmpty}>
          Criar
          <PlusCircle size={20} />
        </button>
      </form>

      <div className={styles.todoHeader}>
        <div className={styles.tasksMade}>
          <p>Tarefas criadas</p>
          <span>{tasks.length}</span>
        </div>

        <div className={styles.tasksDone}>
          <p>Concluídas</p>
          <span>{completedTasksCount} de {tasks.length}</span>
        </div>
      </div>

      {tasks.length === 0 ? (
        <div className={styles.noTasks}>
          <Notepad size={56} />
          <span>Você ainda não tem tarefas cadastradas</span>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      ) : (
        <div>
          {tasks.map(task => (
            <div key={task.id} className={styles.todoItem}>
              <input
                type="checkbox"
                checked={task.isComplete}
                onChange={() => handleToggleTaskCompletion(task.id)}
              />
              <p className={task.isComplete ? styles.lineThroughCompleted : ''}>
                {task.text}
              </p>
              <button
                className={styles.todoButton}
                onClick={() => handleDeleteTask(task.id)}
              >
              <Trash size={20} />
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}