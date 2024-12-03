import React from "react";

const Forecast = ({ forecastWeather, location }) => {
  return (
    <div className="container mt-5">
      <h4 className="text-white text-center">
        Forecast Weather of {location.name},{location.region},{location.country}
      </h4>
      {forecastWeather.forecastday.map((data, index) => {
        return (
          
          <div 
            className="accordion accordion-flush mt-3"
            id="accordionFlushExample"
          >
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#${index}`}
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  <div className="d-flex flex-row  mb-3 ">
                    <div className="p-2 ">
                      <b>Day:</b> {data.date}
                    </div>
                    <div className="p-2">
                      <img src={data.day.condition.icon} />
                      {data.day.condition.text}
                    </div>
                    <div className="p-2">
                      <b>Temp in C :</b> :{data.day.maxtemp_c}
                    </div>
                  </div>
                </button>
              </h2>
              <div
                id={`${index}`}
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  {data.hour.map((data,index) => {
                    return (
                      <div key={index}>
                        <h6 className="tempbar">
                          {data.time} Max Temp  :{data.temp_c} 
                        </h6>
                        <div
                          className="progress"
                          role="progressbar"
                          aria-label="Info example"
                          aria-valuenow="50"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div
                            className="progress-bar bg-info text-dark  "
                            style={{ width: `${data.temp_c}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                     
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Forecast;
