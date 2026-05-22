import {getLatestDetails } from "@/lib/details/data";
import { DetailsCard } from "./DetailsCard";

const AllRoomDetails = async () => {
  const detailsData = await getLatestDetails();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">Common Room</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {detailsData.map((details) => (
          <DetailsCard key={details._id} details={details} />
        ))}
      </div>
    </div>
  );
};

export default AllRoomDetails;