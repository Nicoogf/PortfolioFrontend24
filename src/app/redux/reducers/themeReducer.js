import { DARK, LIGHT } from "../types"


const initialState = {
    colorTheme : false
}

export default function colorThemeReducer( state = initialState , action ) {
    switch( action.type ) {
        case DARK : {
            return {
                ...initialState,
                colorTheme : false
            }
        }

        case LIGHT :{
            return {
                ...initialState,
                colorTheme : true
            }
        }
        default :{
            return state
        }
}}
        