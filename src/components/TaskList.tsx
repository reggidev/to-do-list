import { PlusCircle, Trash } from '@phosphor-icons/react';
import styles from './TaskList.module.css';

export function TaskList() {
  return (
    <section className={styles.tasks}>
      <div className={styles.taskForm}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
        />

        <button type="submit">
          Criar
          <PlusCircle size={20} />
        </button>
      </div>

      <div className={styles.todoHeader}>
        <div className={styles.tasksMade}>
          <p>Tarefas criadas</p>
          <span>5</span>
        </div>

        <div className={styles.tasksDone}>
          <p>Concluídas</p>
          <span>2 de 5</span>
        </div>
      </div>

      <div className={styles.todoItem}>
        <input type="checkbox" id="check1" />
        <p>
          Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
        </p>
        <button className={styles.todoButton}>
          <Trash size={20} />
        </button>
      </div>
    </section>
  )
}