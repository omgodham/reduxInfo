import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { decrementAction, incrementAction,decrementActionIce ,incrementActionIce, fetchUsers} from './actions/counterActions';

 import {connect} from 'react-redux';


function App(props) {

    //accessing state using hooks 
    const count= useSelector(state => state.cake.count);
    const icecount = useSelector(state => state.iceCreame.icecount);
    const users = useSelector(state => state.users.users);
    const dispatch = useDispatch();
    return <>
    <div>
    <h1>Cakes</h1>
        <button onClick={() => dispatch(decrementAction())}> - </button>
        <h1>{props.cakeCount}</h1>
        <button onClick={ props.inCake}> + </button>
    </div>
    <div>
    <h1>Ice - Creams</h1>
        <button onClick={() => dispatch(decrementActionIce())}> - </button>
        <h1>{icecount}</h1>
        <button onClick={()=> dispatch(incrementActionIce())}> + </button>
    </div>
    <div>
    <h1>Users</h1>
        <button onClick={() => dispatch(fetchUsers())}> GET USERS </button>
        {users.map(user => {
            return <p>{user.name}</p>
        })}
    </div>
    </>
}

//accesssing state using these methods usin props
    const mapStatesToProps = (state) =>({
            cakeCount:state.cake.count
        })

     const mapDispatchToProps = (dispatch) => {
     return  {   inCake : () => dispatch(incrementAction())}
     }

export default connect(mapStatesToProps,mapDispatchToProps)(App);
