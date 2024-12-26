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
              <div className="job-type">
                <label htmlFor="">Job Type</label>
                <div>
                  <input type="checkbox"/>
                  <label htmlFor="">Full Time</label>
                </div>
                <div>
                  <input type="checkbox"/>
                  <label htmlFor="">Part Time</label>
                </div>
                <div>
                  <input type="checkbox"/>
                  <label htmlFor="">Remote</label>
                </div>
                <div>
                  <input type="checkbox"/>
                  <label htmlFor="">Freelance</label>
                </div>
              </div>
              <div className="job-experience">
                <label htmlFor="">Experience</label>
                <div>
                  <input type="checkbox"/>
                  <label htmlFor="">1-2 Years</label>
                </div>
                <div>
                  <input type="checkbox"/>
                  <label htmlFor="">2-3 Years</label>
                </div>
                <div>
                  <input type="checkbox"/>
                  <label htmlFor="">3-6 Years</label>
                </div>
                <div>
                  <input type="checkbox"/>
                  <label htmlFor="">6-more..</label>
                </div>
              </div>
              <div className="job-posted">
                <label htmlFor="">Posted Within</label>
                <div>
                  <input type="checkbox"/>
                  <label htmlFor="">Any</label>
                </div>
                <div>
                  <input type="checkbox"/>
                  <label htmlFor="">Today</label>
                </div>
                <div>
                  <input type="checkbox"/>
                  <label htmlFor="">Last 2 days</label>
                </div>
                <div>
                  <input type="checkbox"/>
                  <label htmlFor="">Last 3 days</label>
                </div>
                <div>
                  <input type="checkbox"/>
                  <label htmlFor="">Last 5 days</label>
                </div>
                <div>
                  <input type="checkbox"/>
                  <label htmlFor="">Last 10 days</label>
                </div>
              </div>
              <div className="job-type">
                <label htmlFor="">Filter jobs</label>
                <input type="range"/>
                <div>
                  <label htmlFor="">Price: </label>
                  <label htmlFor="">0 to 500</label>
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
