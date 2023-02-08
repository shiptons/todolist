// import { Provider } from "react-redux"
import ListTodo from "./list-todo"
import TambahData from "./todo/tambah-data"
// import { store } from "./store"


export default async function Page() {
    // console.log(x)
    return (
        <section>
            {/* <Provider store={store}>
                <div>
                    <h1>Test</h1>
                </div>

            </Provider> */}
            <div>
                {/* <TambahData /> */}
                <ListTodo />
            </div>
        </section>
    )
}