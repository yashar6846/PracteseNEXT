
export default async function fetchTodos() {

    try {
        const res = await fetch("https://im-donkey-default-rtdb.firebaseio.com/todos.json")

        const todos: Todo[] = await res.json()

        return todos
    } catch (err) {
        if (err instanceof Error) console.log(err.stack)
    }
}