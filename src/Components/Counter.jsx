import React from 'react';
import {Increment} from '../Redux/Action/Action';
import {useSelector,useDispatch} from 'react-redux';

const Counter = () => {
  let data=useSelector(state=>state)
  // console.log(data)
  // let dispatch=useDispatch();
  return (
    <div>
      {/* <button onClick={()=>dispatch(Increment(10))}>Increment</button> */}
    </div>
  )
}

export default Counter