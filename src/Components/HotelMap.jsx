import { Map, Marker } from 'pigeon-maps';
import React from 'react';

const HotelMap = () => {
    return (
        <div className='w-full flex justify-center items-center p-5'>
            <Map
                height={300}
                width={700}
                defaultCenter={[23.8103, 90.4125]} 
                defaultZoom={11}
            >
                <Marker width={50} anchor={[43.772978, 11.255279]} />
            </Map>
        </div>
    );
};

export default HotelMap;