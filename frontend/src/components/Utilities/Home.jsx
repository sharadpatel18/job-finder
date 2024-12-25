import React from 'react'

const Home = () => {
  return (
    <>
    <div className='home-main'>
      <div className='home-container'>
        <div className='home-c-details'>
          <label htmlFor="">Find the most exciting startup jobs</label>
        </div>
        <div className='home-c-inputs'>
          <input type="text"  placeholder='Job Title'/>
          <input type="text"  placeholder='Location'/>
          <button>Find Job</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home