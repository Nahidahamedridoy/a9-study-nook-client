import { getLatestDetails } from "@/lib/details/data";
import { DetailsCard } from "./DetailsCard";
import Link from "next/link";
import { Button } from "@heroui/react";
import { ArrowRight } from "lucide-react";

const AllRoomDetails = async () => {
  const detailsData = await getLatestDetails();

  return (
    <div className="max-w-7xl mx-auto">
      <div className="w-full mb-6">
        <h2 className="text-3xl font-bold text-center">Common Room</h2>

        <div className="text-right mt-2">
          <Link href={'/rooms'}>
        <Button variant="" className={'rounded-md p-5 bg-cyan-400 text-white'}>View All <ArrowRight /></Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {detailsData.map((details) => (
          <DetailsCard key={details._id} details={details} />
        ))}
      </div>
    </div>
  );
};

export default AllRoomDetails;