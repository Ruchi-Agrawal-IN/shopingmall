import React from 'react'

function Features1() {
    const loadMovies = ()=>{
        console.log("Movies Loaded")
    }
  return (
    <div> This is my Features1
        <button onClick={loadMovies}>Load Movies</button>
    </div>
    
  )
}

export default Features1