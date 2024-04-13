import { configureStore } from "@reduxjs/toolkit";
import nightModeReducer from "../reducers/nightModeReducer";
import colorThemeReducer from "../reducers/themeReducer";
import translatorReducer from "../reducers/languajeReducer";

const store = configureStore({
    reducer:{
        nightMode : nightModeReducer,
        colorTheme : colorThemeReducer,
        languaje : translatorReducer
    }
})

export default store