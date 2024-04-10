import { DARK, LIGHT, OCULTO, VISIBLE } from "../types";

export const mostrar = () =>({type: VISIBLE })
export const ocultar = () =>({type: OCULTO  })

export const lightMode = () => ({type : LIGHT})
export const darkMode = () => ({type : DARK})