import Todo from "./todo"

async function getData() {
    let todos = await fetch('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10', {
        cache: "no-store", // SSR
        next: {
            revalidate: 20, // ISR Revalidate
        }
    })

    return todos.json()
}


export default async function ListTodo() {
    const x = await getData()

    return (
        <div>
            <h1>List Todo</h1>
            <ul>
                {x.map((x) => (
                    <li style={{ padding: "5px 0" }} key={x.id}>
                        <Todo todo={x}/>
                    </li>
                ))}
            </ul>
        </div>
    )

}
