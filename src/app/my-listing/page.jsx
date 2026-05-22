import { RoomTable } from '@/components/RoomTable';
import { getAllDetails } from '@/lib/details/data';
import React from 'react';

const MyListing = async() => {
const roomData = await getAllDetails();
    return (
        <div>
            <RoomTable roomData={roomData}/>
        </div>
    );
};

export default MyListing;