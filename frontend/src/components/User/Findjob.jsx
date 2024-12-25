import React from "react";

const Findjob = () => {
  return (
    <>
      <div className="about-start">
        <div className="about-color">
          <h1>Find A Jobs</h1>
        </div>
      </div>
      <div className="job-main">
        <div className="job-container">
          <div className="job-filter">
            <div>
              <h1>Filter Jobs</h1>
            </div>
            <div className="all-filter">
              <div className="catagory-filter">
                <label htmlFor="">Job Catagory</label>
                <select>
                  <option value="select">select</option>
                </select>
              </div>
              <div>
                <div className="job-type">
                  
                </div>
              </div>
            </div>
          </div>
          <div className="job-title"></div>
        </div>
      </div>
    </>
  );
};

export default Findjob;
