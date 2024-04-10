import { OCULTO, VISIBLE } from "../types"

const initialState = {
    menuVisible : false
}

export default function nightModeReducer( state = initialState , action ) {
    switch( action.type ) {
        case OCULTO : {
            return {
                ...initialState,
                menuVisible : false
            }
        }

        case VISIBLE :{
            return {
                ...initialState,
                menuVisible : true
            }
        }
        default :{
            return state
        }
}}
        