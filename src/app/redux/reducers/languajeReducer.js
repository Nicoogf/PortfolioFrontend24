import { ING , ESP } from "../types"

const initialState = {
    traducido : false
}

export default function translatorReducer( state = initialState , action ) {
    switch( action.type ) {
        case ESP : {
            return {
                ...initialState,
                traducido : false
            }
        }

        case ING :{
            return {
                ...initialState,
                traducido : true
            }
        }
        default :{
            return state
        }
}}
        