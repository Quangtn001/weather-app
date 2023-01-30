import React, { useState } from "react";
import WeekItem from "./WeekItem";
import WeekItemDesc from "./WeekItemDesc";

function Week({ weatherData }) {
  const [itemIndex, setItemIndex] = useState(0);
  function handleOnDaySelect(index) {
    setItemIndex(index);
  }
  return (
    <>
      <div className="row cursor-pointer">
        <div className="d-flex flex-wrap">
          {weatherData.daily.map((item, index) => (
            <WeekItem
              key={index}
              dt={item.dt}
              icon={item.weather[0].icon}
              tempMin={item.temp.min}
              tempMax={item.temp.max}
              idx={index}
              currIdx={itemIndex}
              onDaySelect={handleOnDaySelect}
            />
          ))}
        </div>
      </div>
      <WeekItemDesc data={weatherData.daily[itemIndex]} />
    </>
  );
}

export default Week;
