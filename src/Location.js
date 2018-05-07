import React from 'react';

const Location = props => (
      <div className="location__container">
        <div className="location__city">{props.city}</div>
          <div className="location__country">{props.country}</div>
            <div className="long__lat">{props.lat} | {props.lng}</div>
      </div>
);

export default Location;
