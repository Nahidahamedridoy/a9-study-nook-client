import { getAllDetails } from '@/lib/details/data';
import { DetailsCard } from './DetailsCard';


const CommonRoom = async () => {
    const detailsData = await getAllDetails();

    return (
        <div>
            <h1>Common Room</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {
                    detailsData.map(details => (
                        <DetailsCard
                            key={details._id}
                            details={details}
                        />
                    ))
                }

            </div>
        </div>
    );
};

export default CommonRoom;