"use client";

import { addDetails } from "@/lib/details/action";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
  Checkbox,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const amenitiesList = [
  "Whiteboard",
  "Projector",
  "Wi-Fi",
  "Power Outlets",
  "Quiet Zone",
  "Air Conditioning",
];

const AddDetailsForm = () => {
  const router = useRouter();
  const [selectedAmenities, setSelectedAmenities] = useState([]);

  const handleSubmit = async (formData) => {
    const dataObj = Object.fromEntries(formData.entries());

    // amenities add
    dataObj.amenities = selectedAmenities;

    const data = await addDetails(dataObj);

    if (data) {
      router.push("/details");
    }
  };

  const handleAmenityChange = (value) => {
    setSelectedAmenities((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  return (
    <div className="flex w-full items-center justify-center">
      <Form
        action={handleSubmit}
        className="flex w-96 flex-col gap-4 border p-5 rounded-md"
      >
        {/* Email */}
        <TextField name="email" type="email">
          <Label>Owner Email</Label>
          <Input placeholder="Enter Owner Email" />
          <FieldError />
        </TextField>

        {/* Room Name */}
        <TextField name="roomName" type="text">
          <Label>Room Name</Label>
          <Input placeholder="Enter Room Name" />
          <FieldError />
        </TextField>

        {/* Description */}
        <TextField name="description" type="text">
          <Label>Room Description</Label>
          <Input placeholder="Enter Room Description" />
          <FieldError />
        </TextField>

        {/* Floor */}
        <TextField name="floor" type="text">
          <Label>Floor</Label>
          <Input placeholder="e.g. 3rd Floor" />
          <FieldError />
        </TextField>

        {/* Capacity */}
        <TextField name="capacity" type="number">
          <Label>Capacity</Label>
          <Input placeholder="Enter Capacity" />
          <FieldError />
        </TextField>

        {/* Hourly Rate */}
        <TextField name="hourlyRate" type="number">
          <Label>Hourly Rate ($)</Label>
          <Input placeholder="Enter Hourly Rate" />
          <FieldError />
        </TextField>

        {/* Image */}
        <TextField name="image" type="url">
          <Label>Image URL</Label>
          <Input placeholder="Enter Image URL" />
          <FieldError />
        </TextField>

        {/* Amenities */}
        <div className="flex flex-col gap-2">
          <Label>Amenities</Label>
          <div className="grid grid-cols-2 gap-2">
            {amenitiesList.map((item) => (
              <label key={item} className="flex items-center gap-2 text-sm">
                <Checkbox
                  isSelected={selectedAmenities.includes(item)}
                  onChange={() => handleAmenityChange(item)}
                />
                {item}
              </label>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <Button type="submit">Add Room</Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddDetailsForm;