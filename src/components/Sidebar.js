import React, { useState } from "react";
import cityImage from "../img/CityBackground.png";
import Search from "./Search";
import { timeFormat, dateFormat } from "../plugins/Format";
function Sidebar({ data, onCityChange }) {
  const [cityName, setCityName] = useState("HaNoi, VN");

  const handleSearch = (searchData) => {
    onCityChange(searchData);
    setCityName(searchData.label);
  };
  return (
    <div className="col-md-3 col-sm-12 bg-white p-4">
      <div className="wrap">
        <Search onSearchChange={handleSearch} />
        {data && (
          <div>
            <div className="fs-2 fw-bold lh-sm text-dack mt-4">{cityName}</div>
            <div className="fs-1 fw-bold">
              {Math.floor(data.current.temp)}°C
            </div>
            <div className="fs-5 lh-lg">
              {dateFormat(data.current.dt)}, {timeFormat(data.current.dt)}
            </div>
            <div className="fs-6 lh-base text-capitalize text-muted mb-3">
              {data.current.weather[0].description} <br />
              {data.current.clouds}%
            </div>
            <div className="position-relative d-flex justify-content-center align-items-center">
              <div className="position-absolute">
                <div className="fs-3 fw-bold text-white">{cityName}</div>
              </div>
              <img src={cityImage} alt="" className="img-fluid rounded " />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
