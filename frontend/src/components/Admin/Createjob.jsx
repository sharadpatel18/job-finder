import React from 'react'

const Createjob = () => {
  const handleSubmit = () => {

  }

  return (
<div>
      <div className="auth-main flex-col">
        <div>
          <h1 className="text-3xl text-red-500 text-wrap">
            {/* {responceShow == true ? responceData.message+" please reload this page!!" : null} */}
          </h1>
        </div>
        <div className="auth-container">
          <form onSubmit={handleSubmit}>
            <div>
              <h1>create job</h1>
            </div>
            <div className="email">
              <input
                type="text"
                placeholder="enter job title"
               
              />
            </div>
            <div className="password">
              <input
                type="text"
                placeholder="enter job salary"
               
              />
            </div>
            <div className="password">
              <input
                type="text"
                placeholder="enter job timing"
               
              />
            </div>
            <div className="password">
              <input
                type="text"
                placeholder="enter job type ex:- part time , full time,etc..."
               
              />
            </div>
            <div className="password">
              <input
                type="text"
                placeholder="enter job experience required"
               
              />
            </div>
            <div className="password">
              <input
                type="text"
                placeholder="enter about your job"
               
              />
            </div>
            <div className="password">
              <input
                type="text"
                placeholder="enter job seat"
              />
            </div>
            <div className="flex w-1/2 justify-evenly">
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Createjob