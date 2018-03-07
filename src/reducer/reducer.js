
import actionTypes  from '../actions/actionTypes';



const InitialState = {
    albums:[],
    isFetching:false,
    isLoadFont:false,
    message:''

}


export const albumReducer = (state = InitialState, action) => {
    switch (action.type) {
        case actionTypes.ALBUM_AVAILABLE :
            return {
                ...state,
                albums:[...action.payload.albums]
            }
        case actionTypes.ALBUM_REDIRECT_SUCCESS:
            return {
                ...state,
                message:action.payload.message
            }
        case actionTypes.ALBUM_REDIRECT_FAILURE:
            return {
                ...state,
                message:action.payload.message
            }
        case actionTypes.LOAD_FONTS_SUCCESS:
            return {
                ...state,
                isLoadFont:action.payload.isLoadFont
            }   
        default:
            return state
    }
}



