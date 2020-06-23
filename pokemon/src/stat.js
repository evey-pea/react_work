import React from 'react';

const Stat = (props) => {
    console.log(props);
    const statName = props.stats[0];
    const statValue = props.stats[1];

    return (
        <div className="stat"><strong>{statName}</strong>: {statValue}</div>
    );
};

export default Stat;