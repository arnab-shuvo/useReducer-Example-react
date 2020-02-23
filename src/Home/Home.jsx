import React, {useContext} from 'react';
import {StoreContext} from '../store'

const Home = () => {
    const { state, dispatch } = useContext(StoreContext);
    const { count } = state;

    function counter(){
        dispatch({ type: 'Add', query: count+1 });
    }
    return(
        
        <>
            <h1>Lets Start Use Reducer</h1>
            <p>Current count is: {count}</p>
            <button onClick={counter}>Lets change</button>
        </>
    )
}

export default Home