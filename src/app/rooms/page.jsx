import { RoomTable } from '@/components/RoomTable';
import { getAllDetails } from '@/lib/details/data';

const RoomPage = async () => {
    const roomData = await getAllDetails();
    return (
        <div>
            Room Page
            <RoomTable roomData={roomData} />
        </div>
    );
};

export default RoomPage;