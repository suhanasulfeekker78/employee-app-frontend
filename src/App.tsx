import { RouterProvider } from "react-router/dom"
import router from "./router/router"
import store from "./store/store";
import {Provider} from "react-redux";

const App = () => (
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
);

export default App 