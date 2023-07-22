// import { getAllTodo } from "@/api";
import AddTask from "./component/AddTodo";
import TodoList from "./component/TodoList";



export default async function Home() {
//  const taske = await  getAllTodo()

 

return(
  <main className="max-w-4xl mx-auto mt-4">
   <div className="text-center my-5 flex flex-col gap-4">
    <h1 className="text-2xl font-bold">Todo List App</h1>
   </div>
   <AddTask />
   
  <TodoList />
  </main>
)
  
}