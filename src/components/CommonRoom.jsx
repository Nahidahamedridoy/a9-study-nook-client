"use client";

import { useEffect, useState } from "react";

import { DetailsCard } from "./DetailsCard";
import SearchBar from "./SearchBar";

const CommonRoom = () => {

  const [detailsData, setDetailsData] = useState([]);

  // Initial Data Load
  useEffect(() => {

    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/details`)
      .then((res) => res.json())
      .then((data) => setDetailsData(data));

  }, []);

  return (
    <div>

      {/* Search + Filter */}
      <SearchBar
        setDetailsData={setDetailsData}
      />

      <h1 className="text-2xl font-bold mb-5">
        Common Room
      </h1>
      

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {
          detailsData.map((details) => (
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