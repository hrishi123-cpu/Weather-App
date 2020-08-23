import React from "react";

const weather = (props) => {
  return (
    <div className="container">
      <div className="cards">
        <h1>{props.city}</h1>

        <h5 className="py-4">
          <i className={`wi ${props.weatherIcon} display-1`} />
        </h5>

        {props.temp_celsius ? (
          <h1 className="py-2">{props.temp_celsius}&deg;</h1>
        ) : null}
        {props.humidity ? (
          <h2 className="py-2">Humidity: {props.humidity}%</h2>
        ) : null}
        {/* show max n min temp */}

        {minmaxTemp(props.temp_min, props.temp_max)}
        <h4 className="py-3">{props.description}</h4>
      </div>
    </div>
  );
};
function minmaxTemp(min, max) {
  if (min && max) {
    return (
      <h3>
        <span className="px-4">Min:{min}&deg;</span>
        <span className="px-4">Max:{max}&deg;</span>
      </h3>
    );
  }
}

export default weather;
