import React from 'react';

const PokeImage = (props) => {
    const image = props.pokeImage;

    const classes = image.class;
    const imgSrc = image.src;
    const imgHeight = image.height;
    const alt = (image.alt ?? image.alt)
    
    return (
        <div className={classes}>
        <img
            height={imgHeight}
            src={imgSrc}
            alt={alt}
        />
        </div>
    );
};

export default PokeImage;
