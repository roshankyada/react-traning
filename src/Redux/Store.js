import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

const customMiddleware = (store) => (next) => (action) => {
    console.log('Dispatching action:', action)

    const result = next(action)
    console.log('State after dispatch:', store.getState())
    return result
}

export default configureStore({
    reducer: {
        rootReducer,
        middleware: [...getDefaultMiddleware({ thunk: false }), customMiddleware]
    }
})

