import EditDetailsForm from '@/components/EditDetailsForm';
import { getDetailsById } from '@/lib/details/data';
import React from 'react';

const EditDetailsPage = async({params}) => {
    const {id} = await params;

    const details = await getDetailsById(id);
    console.log(details);
    // console.log(id);

    return (
        <div>
            <h1 className='font-bold text-3xl'>Edit {details.roomName}</h1>
            <EditDetailsForm details={details}/>
        </div>
    );
};

export default EditDetailsPage;