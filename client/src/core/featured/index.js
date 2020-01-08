import React from 'react';
import Stripes from './Stripes';
import Text from './Text';

const Featured = () => {
    return (
        <div className="featured_wrapper" style={{   
            margin: '0 auto',
            width: 'auto',
            marginTop: '3px',
            height: '700px',
            overflow: 'hidden'}}>
            <Stripes/>
            <Text/>
        </div>
    );
};

export default Featured;