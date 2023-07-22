
import AddTodo from "./component/AddTodo";
import TodoList from "./component/TodoList";


export default async function Home() {

return(
  <main className="max-w-4xl mx-auto mt-4">
   <div className="text-center my-5 flex flex-col gap-4">
    <h1 className="text-2xl font-bold">Todo List App</h1>
   </div>
   <AddTodo />
   {/* @ts-expect-error Server Component */}
  <TodoList />
  </main>
)
  
}