import TambahData from "./tambah-data"

async function getData() {
    let todos = await fetch('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10', {
        // cache: "force-cache", // Static Data Fetching
        cache: "no-store", // SSR
        next: {
            revalidate: 20, // ISR Revalidate
        }
    })

    return todos.json()
}

export default async function todo() {
    const x = await getData()
    // console.log(x)
    return (
        <section>
        <h1>List Todo</h1>
        <TambahData />
        
        </section> 
    )
}