import React from 'react'

const Reducer = () => {
  return (
    <div>
      <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div>
          <label>username: </label>
          <input
            type="text"
           
          />
        </div>
        <div>
          <label>email: </label>
          <input
            type="email"
           
          />
        </div>
        <div>
          <label>notes: </label>
          <input
            type="text"
         
          />
        </div>
        <div>
          <button>submit</button>
        </div>
        <div>
          <button >Reset</button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Reducer
