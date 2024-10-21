import { Header } from "./components/header";
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