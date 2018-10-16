//action type
const OPEN_ALERT = 'OPEN_ALERT';

const initState = {
    modalVisible:false
}

export function data(state = initState, action) {
    switch (action.type) {
        case OPEN_ALERT:
            console.log(action)
            return {...state,...action}
        default:
            return state
    }
}

// action create
function openALERT (comments) {
    return { type:OPEN_ALERT, modalVisible:comments}
}


export function openAlert(flag) {
    return dispatch=>{
        dispatch(openALERT(flag))
    }
}
