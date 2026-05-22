import Image from "next/image";
import Link from "next/link";

export function DetailsCard({ details }) {

    const {
        _id,
        roomName,
        description,
        image,
        floor,
        capacity,
        hourlyRate,
        amenities
    } = details;

    return (

        <div className="bg-gradient-to-br from-white via-cyan-50 to-cyan-100 rounded-2xl overflow-hidden shadow-xl hover:-translate-y-2 hover:shadow-cyan-400/30 transition-all duration-300 border border-cyan-200 flex flex-col">
            {/* Image */}
            <div className="relative w-full h-64">
                <Image
                    src={image}
                    alt={roomName}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">

                {/* Room Name */}
                <h2 className="text-2xl font-bold text-red-500 mb-3">
                    {roomName}
                </h2>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                    {description?.slice(0, 90)}...
                </p>

                {/* Floor & Capacity */}
                <div className="flex items-center justify-between text-sm text-gray-700 mb-4">
                    <span>📍 {floor}</span>
                    <span>👥 {capacity} People</span>
                </div>

                {/* Amenities */}
                <div className="flex flex-wrap gap-2 mb-5">

                    {
                        amenities?.slice(0, 3).map((item, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 rounded-full bg-cyan-200/60 text-cyan-800 text-xs border border-cyan-300"
                            >
                                {item}
                            </span>
                        ))
                    }

                    {
                        amenities?.length > 3 && (
                            <span className="px-3 py-1 rounded-full bg-white text-gray-700 text-xs border border-cyan-200">
                                +{amenities.length - 3} More
                            </span>
                        )
                    }

                </div>

                {/* Bottom */}
                <div className="flex items-center justify-between mt-auto">

                    <h3 className="text-2xl font-bold text-cyan-700">
                        ${hourlyRate}
                        <span className="text-sm text-gray-500">/hr</span>
                    </h3>

                    <Link
                        href={`/rooms/${_id}`} // href = {`details/detailId`} --> /${detail.id}
                        className="px-5 py-2.5 rounded-xl bg-cyan-500 text-white font-semibold hover:bg-cyan-400 shadow-lg shadow-cyan-300/40 transition duration-300"
                    >
                        View Details
                    </Link>

                </div>
            </div>
        </div>
    );
}