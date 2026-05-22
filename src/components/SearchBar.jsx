"use client";

import { useState } from "react";

export default function SearchBar({ setDetailsData }) {

  const [searchText, setSearchText] = useState("");

  const [selectedAmenity, setSelectedAmenity] = useState("");

  const [minPrice, setMinPrice] = useState("");

  const [maxPrice, setMaxPrice] = useState("");

  // Search + Filter
  const handleSearch = async () => {

    const params = new URLSearchParams();

    // Search
    if (searchText) {
      params.append("search", searchText);
    }

    // Amenity
    if (selectedAmenity) {
      params.append("amenities", selectedAmenity);
    }

    // Price
    if (minPrice) {
      params.append("minPrice", minPrice);
    }

    if (maxPrice) {
      params.append("maxPrice", maxPrice);
    }

    const res = await fetch(
      `http://localhost:5000/details?${params.toString()}`
    );

    const data = await res.json();

    setDetailsData(data);
  };

  return (
    <div className="mb-10 bg-white p-6 rounded-2xl shadow border border-cyan-100">

      {/* Top Search Row */}
      <div className="flex flex-col lg:flex-row gap-4 mb-6">

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search by room name..."
          value={searchText}
          onChange={(e) =>
            setSearchText(e.target.value)
          }
          className="border border-cyan-200 rounded-xl px-4 py-3 w-full outline-none"
        />

        {/* Amenities Dropdown */}
        <select
          value={selectedAmenity}
          onChange={(e) =>
            setSelectedAmenity(e.target.value)
          }
          className="border border-cyan-200 rounded-xl px-4 py-3 outline-none min-w-[200px]"
        >

          <option value="">
            All Amenities
          </option>

          <option value="Wi-Fi">
            WiFi
          </option>

          <option value="Air Conditioning">
            Air Conditioning
          </option>

          <option value="Projector">
            Projector
          </option>

          <option value="Whiteboard">
            Whiteboard
          </option>

          <option value="Power Outlets">
            Power Outlets
          </option>

        </select>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="bg-cyan-500 hover:bg-cyan-400 transition text-white px-8 rounded-xl font-semibold"
        >
          Search
        </button>

      </div>

      {/* Price Filter */}
      <div className="flex flex-col md:flex-row gap-4">

        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) =>
            setMinPrice(e.target.value)
          }
          className="border border-cyan-200 rounded-xl px-4 py-3 w-full outline-none"
        />

        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) =>
            setMaxPrice(e.target.value)
          }
          className="border border-cyan-200 rounded-xl px-4 py-3 w-full outline-none"
        />

      </div>

    </div>
  );
}