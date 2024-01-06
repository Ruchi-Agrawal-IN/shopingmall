import { useState } from 'react'

function IncDecCounter() {
    let [count, setCount] = useState(1);
    let increaseCount = () =>{
        if(count < 10){
            setCount(count+1);
        }
    }
    let decreaseCount = () =>{
        if(count > 1){
            setCount(count-1);
        }
    }
    let handleChange = (e)=>{
        setCount(e.target.value);
       }
  return (
   <>
   <div className='col-xl-1'>
    <div className='input-group'>
        <div className='input-group-prepend'>
            <button className='btn btn-outline-primary' type='button' onClick={decreaseCount}>-</button>
        </div>
            <input type='text' className='form-control' value={count} onChange={handleChange}></input>
        <div className='input-group-prepend'>
            <button className='btn btn-outline-primary' type='button' onClick={increaseCount}>+</button>
        </div>
    </div>
   </div>
   </>
  )
}

export default IncDecCounter