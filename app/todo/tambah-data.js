"use client";
import { useRouter } from 'next/navigation'
import { useState } from 'react';


async function addTodo(name, refresh) {
    // await fetch(`/api/todo/add`, {
    //     method: "POST",
    //     body: JSON.stringify({ name }),
    // });
    await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title:name,
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
    alert("lihat console");
    refresh();
}

export default function TambahData() {
    // const x =  addTodo()

    const router = useRouter();
    let [name, setName] = useState("");
    return (
        <div>
            <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
            <button onClick={() => addTodo(name, router.refresh)}>Add</button>
        </div>
    )
}