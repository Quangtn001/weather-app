import React from "react";
import { kmFormat, timeFormat } from "../../../plugins/Format";
function Today({ weatherData }) {
  return (
    <div className="row">
      <div className="d-flex flex-wrap">
        <div className="col-md-6 col-xl-4 col-sm-12 p-3">
          <div className="bg-white p-2 rounded-3 h-100">
            <p className="fs-5 text-black-50">UV index</p>
            <div className="text-center">
              <img
                src="/svg/uv index.svg"
                alt=""
                className="img-thumbnail"
                style={{ width: "30px" }}
              />
              <p className="fs-3 text-muted fw-bold">
                {weatherData.current.uvi}
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-xl-4 col-sm-12 p-3">
          <div className="bg-white p-2 rounded-3 h-100">
            <p className="fs-5 text-black-50">Wind status</p>
            <div className="text-center">
              <img
                src="/svg/wind.svg"
                alt=""
                className="img-thumbnail"
                style={{ width: "30px" }}
              />
              <p className="fs-3 text-muted fw-bold">
                {weatherData.current.wind_speed} km/h
              </p>
            </div>
          </div>
        </div>

        <div className="  col-md-6 col-xl-4  col-sm-12 p-3">
          <div className="bg-white p-2 rounded-3 h-100">
            <p className="fs-5 text-black-50">Sunrise &amp; Sunset</p>
            <p className="fs-4 text-muted fw-bold ">
              <img
                src="/svg/sunrise.svg"
                alt=""
                className="img-thumbnail"
                style={{ width: "30px" }}
              />
              {timeFormat(weatherData.current.sunrise)};
            </p>
            <p className="fs-4 text-muted fw-bold">
              <img
                src="/svg/sunset.svg"
                alt=""
                className="img-thumbnail"
                style={{ width: "30px" }}
              />
              {timeFormat(weatherData.current.sunset)}
            </p>
          </div>
        </div>

        <div className="col-md-6 col-xl-4 col-sm-12 p-3">
          <div className="bg-white p-2 rounded-3 h-100">
            <p className="fs-5 text-black-50">Humidity</p>
            <div className="text-center">
              <img
                src="/svg/humidity.svg"
                alt=""
                className="img-thumbnail"
                style={{ width: "30px" }}
              />
              <p className="fs-3 text-muted fw-bold">
                {weatherData.current.humidity}%
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-xl-4 col-sm-12 p-3">
          <div className="bg-white p-2 rounded-3 h-100">
            <p className="fs-5 text-black-50">Visibility</p>
            <div className="text-center">
              <img
                src="/svg/visibility.svg"
                alt=""
                className="img-thumbnail"
                style={{ width: "30px" }}
              />
              <p className="fs-3 text-muted fw-bold">
                {kmFormat(weatherData.current.visibility)}
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-xl-4 col-sm-12 p-3">
          <div className="bg-white p-2 rounded-3 h-100">
            <p className="fs-5 text-black-50">Pressure</p>
            <div className="text-center">
              <img
                src="/svg/pressure.svg"
                alt=""
                className="img-thumbnail"
                style={{ width: "30px" }}
              />
              <p className="fs-3 text-muted fw-bold">
                {weatherData.current.pressure} hPa
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Today;
