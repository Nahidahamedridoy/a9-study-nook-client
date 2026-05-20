"use client";
import { Button, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";

const EditDetailsForm = ({ details }) => {
    const { roomName, description, image, capacity, hourlyRate } = details;
    const router = useRouter();
    const handleSubmit = async (formData) => {


    }
    return (
        <div className="flex w-full items-center justify-center">
            <Form
                action={handleSubmit}
                className="flex w-96 flex-col gap-4 border p-5 rounded-md" >
                {/* name */}
                <TextField

                    name="email"
                    type="email"
                >
                    <Label>Owner Email</Label>
                    <Input placeholder="Enter Room Name" />
                    <FieldError />
                </TextField>

                {/* name */}
                <TextField
                    defaultValue={roomName}
                    name="roomName"
                    type="text"
                >
                    <Label>Room Name</Label>
                    <Input placeholder="Enter Room Name" />
                    <FieldError />
                </TextField>

                {/* description */}
                <TextField
                    defaultValue={description}
                    name="description"
                    type="text"
                >
                    <Label>Room Description</Label>
                    <Input placeholder="Enter Room Description" />
                    <FieldError />
                </TextField>

                {/* price */}
                <TextField
                    defaultValue={hourlyRate}
                    name="hourlyRate"
                    type="number"
                >
                    <Label>Room Price</Label>
                    <Input placeholder="Enter Room Price" />
                    <FieldError />
                </TextField>

                {/* image */}
                <TextField
                    defaultValue={image}
                    name="image"
                    type="url"
                >
                    <Label>Room image</Label>
                    <Input placeholder="Enter Room image" />
                    <FieldError />
                </TextField>

                {/* capacity */}
                <TextField
                    defaultValue={capacity}
                    name="capacity"
                    type="number"
                >
                    <Label>Room capacity</Label>
                    <Input placeholder="Enter Room capacity" />
                    <FieldError />
                </TextField>

                <div className="flex gap-2">
                    <Button type="submit">
                        update Room
                    </Button>
                    <Button type="reset" variant="secondary">
                        Reset
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default EditDetailsForm;