import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement,reset, incrementByAmount } from './redux/counterSlice'

const Counter = () => {
  const [amount,setAmount]=useState(0)
  const {count}=useSelector(state=>state.counterReducer)
  const dispatch=useDispatch()

  const handleIncrementAmount=()=>{
    if(amount){
      // dispatch action
      dispatch(incrementByAmount(+amount))

    }else{
      alert("Please enter a valid amount")
    }
  }
  return (
    <>
     <div className=' bg-dark fullpage d-flex flex-column justify-content-center '>
        <h1 className='text-white text-center pt-4'>Counter App</h1>
        <div className="border rounded m-5 p-3 w-50 mx-auto">
          <h1 style={{fontSize:"70px"}}  className='text-white text-center mt-3'>{count}</h1>
          <div className="d-flex justify-content-evenly align-items-center ">
            <button onClick={()=>dispatch(decrement())} className='btn btn-warning '>DECREMENT</button>
            <button onClick={()=>dispatch(reset())} className='btn btn-danger ms-1'>RESET</button>
            <button onClick={()=>dispatch(increment())} className='btn btn-success ms-1 '>INCREMENT</button>
          </div>
          <div className="d-flex justify-content-evenly align-items-center  mt-5">
            <input onChange={e=>setAmount(e.target.value)} className='w-50 form-control' placeholder='Enter amt to be incremented' type="text" />
            <button onClick={handleIncrementAmount} className='btn btn-primary p-3 ms-1 '>INCREMENT BY <br/> AMOUNT</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default Counter