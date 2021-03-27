import axios from 'axios';
export const incrementAction = () => {
    return {
        type:'INCREMENT'
    }
}
export const decrementAction = () => {
    return {
        type:'DECREMENT'
    }
}

export const incrementActionIce = () => {
    return {
        type:'INCREMENT_ICE'
    }
}
export const decrementActionIce = () => {
    return {
        type:'DECREMENT_ICE'
    }
}

export const getUsers = (data) => {
return {type:'GET_USERS',payload:data}
}

export const fetchUsers = () => {
    return (dispatch) => {
     axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
            dispatch(getUsers(response.data));
        }).catch(err=> console.log(err))
    }
}