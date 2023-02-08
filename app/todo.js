"use client";



export default function Todo({ todo }) {
    return (
        <>
            {todo.title}, status :{todo.completed ? ' ✔' : ' x'}
            {/* <button onClick={() => {}}>Delete</button> */}
        </>
    )
}