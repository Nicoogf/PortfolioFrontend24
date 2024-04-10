import { configureStore } from "@reduxjs/toolkit";
import nightModeReducer from "../reducers/nightModeReducer";
import colorThemeReducer from "../reducers/themeReducer";

const store = configureStore({
    reducer:{
        nightMode : nightModeReducer,
        colorTheme : colorThemeReducer
    }
})

export default store