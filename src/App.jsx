import React, {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, isLogged } from "./action/counterAction";
import {getData} from "./action/getUserAction";

export default function App() {

  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const loggedIn = useSelector(state => state.counter.isLogged);
  const isLoading = useSelector(state => state.getUser.isLoading);
  const error = useSelector(state => state.getUser.error);
  const data = useSelector(state => state.getUser.data);

  // useEffect(() =>{
  //   dispatch(getData());
  // },[])

  const onHandleIncrement = () =>{
    dispatch(increment(5));
  }
  const onHandleDecrement = () =>{
    if(counter > 0) dispatch(decrement());
  }
  const handleIsLogged = () =>{
    dispatch(isLogged())
  }
  const onGetData = () =>{
    dispatch(getData());
  }
  return (
    <div>
      {loggedIn ? <h1>{counter}</h1> : <h1> Please Login </h1>}
      <button onClick = {onHandleIncrement}>
        +
      </button>

      <button onClick = {onHandleDecrement}>
        -
      </button>
      <button onClick = {handleIsLogged}>
        Data Show
      </button>
      <div>
        <button onClick = {onGetData}>
      Get Data
        </button>
      </div>
      <div>
        {isLoading && data.length === 0 ? <div>Loading ...</div> : data.map((user, i) =><div key={i}>{user.city}</div>)}
      </div>

    </div>
  )
}
