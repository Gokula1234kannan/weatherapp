import React from "react";

const Current = ({ currentWeather, location }) => {
  return (
    <div className="container mt-5">
      <h4 className="text-white text-center">
        Current Weather of {location.name},{location.region},{location.country}
      </h4>
      <div className="row align-items-center">
        {/* card 1 */}
        <div className="col-3">
          <div className="card">
            <img
              src={currentWeather.condition.icon}
              className="card-img-top "
              style={{ width: "5rem" }}
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title text-center">
                {currentWeather.condition.text}
              </h5>
            </div>
          </div>
        </div>
        {/* card 2 */}
        <div className="col-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">
                Temp in c : {currentWeather.temp_c}
              </h5>
            </div>
          </div>
        </div>
        {/* card-3 */}
        <div className="col-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">
                Wind speed in Kph: {currentWeather.wind_kph}
              </h5>
            </div>
          </div>
        </div>
        {/* card-4 */}
        <div className="col-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">
                Humidity : {currentWeather.humidity}
              </h5>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">
                Cloud : {currentWeather.cloud}
              </h5>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">
                Wind Direction : {currentWeather.wind_dir}
              </h5>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">
                Pressure in mb : {currentWeather.pressure_mb}
              </h5>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">
                UV : {currentWeather.uv}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Current;
