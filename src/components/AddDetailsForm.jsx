"use client";
import { addDetails } from "@/lib/details/action";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";

const AddDetailsForm = () => {
    const router = useRouter()
    const handleSubmit = async (formData) => {
        
        const data = await addDetails(formData)
        if(data){
            router.push("/details");
        }
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

                    name="roomName"
                    type="text"
                >
                    <Label>Room Name</Label>
                    <Input placeholder="Enter Room Name" />
                    <FieldError />
                </TextField>

                {/* description */}
                <TextField

                    name="description"
                    type="text"
                >
                    <Label>Room Description</Label>
                    <Input placeholder="Enter Room Description" />
                    <FieldError />
                </TextField>

                {/* price */}
                <TextField
                    name="hourlyRate"
                    type="number"
                >
                    <Label>Room Price</Label>
                    <Input placeholder="Enter Room Price" />
                    <FieldError />
                </TextField>

                {/* image */}
                <TextField
                    name="image"
                    type="url"
                >
                    <Label>Room image</Label>
                    <Input placeholder="Enter Room image" />
                    <FieldError />
                </TextField>

                {/* capacity */}
                <TextField
                    name="capacity"
                    type="number"
                >
                    <Label>Room capacity</Label>
                    <Input placeholder="Enter Room capacity" />
                    <FieldError />
                </TextField>

                <div className="flex gap-2">
                    <Button type="submit">

                        Add Room
                    </Button>
                    <Button type="reset" variant="secondary">
                        Reset
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default AddDetailsForm;