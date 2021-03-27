const initialState = {
count : 0,
icecount:0
}

export const counterReducer = (state = initialState , action) => {
    switch(action.type){
        case 'INCREMENT' : return {
            ...state,
            count : state.count + 1
        }
        case 'DECREMENT' : return {
            count : state.count - 1
        }
       
        default : return state
    }
} 

export const iceCounterReducer = (state = initialState , action) => {
    switch(action.type){
        case 'INCREMENT_ICE' : return {
            ...state,
            icecount : state.icecount + 1
        }
        case 'DECREMENT_ICE' : return {
            ...state,
            icecount : state.icecount - 1
        }
       
        default : return state
    }
} 

