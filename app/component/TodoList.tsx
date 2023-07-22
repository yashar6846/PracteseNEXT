
// const TodoList = () => {
  
//   return(
//     <div className="overflow-x-auto">
//   <table className="table">
//     {/* head */}
//     <thead>
//       <tr>
//         <th></th>
//         <th>Name</th>
//         {/* <th>Job</th> */}
//         <th>Favorite Color</th>
//       </tr>
//     </thead>
//     <tbody>
//       {/* row 1 */}
//       <tr>
//         <th></th>
//         <td>Cy Ganderton</td>
//         {/* <td>Quality Control Specialist</td> */}
//         <td>Blue</td>
//       </tr>
//     </tbody>
//   </table>
// </div>
//   )

// }


// export default TodoList

////////////////////////////////////////////////////////////////
import Todo from "./Todo"
import fetchTodos from "@/lib/fetchTodos"

export default async function TodoList() {
    const todos = await fetchTodos()

    let content
    if (!todos || todos.length === 0) {
        content = (
            <p>No Todos Available</p>
        )
    } else {
        const sortedTodos = todos.reverse()

        content = (
            <>
                {sortedTodos.map(todo => (
                    <Todo key={todo.id} {...todo} />
                ))}
            </>
        )
    }

    return content
}