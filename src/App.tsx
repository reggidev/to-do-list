import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";

export function App() {
  return (
    <>
      <Header />
      <main>
        <TaskList />
      </main>
    </>
  )
}