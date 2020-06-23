import React from 'react';

const InfoItem = (props) => {
    console.log(props);
    const infoName = props.info[0];
    const infoValue = props.info[1];
    
    return (
        <div className={infoName}>{infoValue}</div>
    );
};

export default InfoItem;