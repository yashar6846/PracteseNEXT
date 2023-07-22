export default async function fetchTodo(id: string) {
    const res = await fetch(`https://im-donkey-default-rtdb.firebaseio.com/todos.json/${id}`)

    if (!res.ok) return undefined

    const todo: Todo = await res.json()

    return todo
}