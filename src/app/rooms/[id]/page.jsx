import BookingModal from '@/components/BookingModal';
import { getDetailsById } from '@/lib/details/data';
import { Button, Card } from '@heroui/react';
import Image from 'next/image';

const RoomDetails = async ({ params }) => {

    const pageParams = await params;
    const { id } = pageParams;

    const data = await getDetailsById(id);

    const {
        roomName,
        description,
        image,
        floor,
        capacity,
        hourlyRate,
        amenities,
        bookingCount,
    } = data;

    return (
        <div className="max-w-7xl mx-auto px-5 py-10">

            <Card className="w-full overflow-hidden bg-gradient-to-br from-white via-cyan-50 to-cyan-100 border border-cyan-200 shadow-2xl rounded-3xl">

                <div className="grid grid-cols-1 lg:grid-cols-2">

                    {/* Image Section */}
                    <div className="relative w-full h-[350px] lg:h-full min-h-[500px]">

                        <Image
                            src={image}
                            alt={roomName}
                            fill
                            className="object-cover"
                        />

                    </div>

                    {/* Content Section */}
                    <div className="p-8 lg:p-10 flex flex-col justify-between">

                        <div>

                            {/* Title */}
                            <h1 className="text-4xl font-extrabold text-cyan-800 mb-5">
                                {roomName}
                            </h1>

                            {/* Description */}
                            <p className="text-gray-700 leading-relaxed mb-8">
                                {description}
                            </p>

                            {/* Info Cards */}
                            <div className="grid grid-cols-2 gap-4 mb-8">

                                <div className="bg-white rounded-2xl p-5 shadow-md border border-cyan-100">
                                    <p className="text-gray-500 text-sm mb-1">
                                        Floor
                                    </p>

                                    <h3 className="text-xl font-bold text-cyan-700">
                                        {floor}
                                    </h3>
                                </div>

                                <div className="bg-white rounded-2xl p-5 shadow-md border border-cyan-100">
                                    <p className="text-gray-500 text-sm mb-1">
                                        Capacity
                                    </p>

                                    <h3 className="text-xl font-bold text-cyan-700">
                                        {capacity} People
                                    </h3>
                                </div>

                                <div className="bg-white rounded-2xl p-5 shadow-md border border-cyan-100">
                                    <p className="text-gray-500 text-sm mb-1">
                                        Hourly Rate
                                    </p>

                                    <h3 className="text-xl font-bold text-cyan-700">
                                        ${hourlyRate}/hr
                                    </h3>
                                </div>

                                <div className="bg-white rounded-2xl p-5 shadow-md border border-cyan-100">
                                    <p className="text-gray-500 text-sm mb-1">
                                        Booking Count
                                    </p>

                                    <h3 className="text-xl font-bold text-cyan-700">
                                        {bookingCount}
                                    </h3>
                                </div>

                            </div>

                            {/* Amenities */}
                            <div className="mb-10">

                                <h2 className="text-2xl font-bold text-cyan-800 mb-4">
                                    Amenities
                                </h2>

                                <div className="flex flex-wrap gap-3">

                                    {
                                        amenities?.map((item, index) => (
                                            <span
                                                key={index}
                                                className="px-4 py-2 rounded-full bg-cyan-200/60 text-cyan-800 text-sm border border-cyan-300 font-medium"
                                            >
                                                {item}
                                            </span>
                                        ))
                                    }

                                </div>
                            </div>
                        </div>



                        <BookingModal
                            roomId={id}
                            roomName={roomName}
                            hourlyRate={hourlyRate}
                            image={image}
                            
                        />

                    </div>
                </div>
            </Card>
        </div>
    );
};

export default RoomDetails;