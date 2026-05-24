'use server'

import { headers } from "next/headers";
import { revalidatePath } from "next/cache";
import { auth } from "@/lib/auth";

export const addDetails = async (data) => {

    const {session} = await auth.api.getSession({
        headers: await headers(),
    });

    const modifiedData = {
        roomName: data.roomName,
        description: data.description,
        image: data.image,
        floor: data.floor,
        capacity: Number(data.capacity),
        hourlyRate: Number(data.hourlyRate),
        amenities: data.amenities || [],
        email: data.email,
    };
     console.log(session);
    const res = await fetch("http://localhost:5000/details", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session?.token}`,
        },
        
        body: JSON.stringify(modifiedData),

    });

    const result = await res.json();
    console.log({result});
    if (!res.ok) {
         Error(result.message || "Failed to add rooms");
    }

    revalidatePath("/rooms");

    return result;
};


// delete
export const deleteRoom = async (id) => {
    const res = await fetch(`http://localhost:5000/details/${id}`,
        {
            method: "DELETE"
        })

    const data = await res.json();

    if (!res.ok) return;
    console.log(data);
    revalidatePath("/details")

    return data;
}

//update
export const updateDetails = async (id, formData) => {
    console.log(id);
    const updateDetails = Object.fromEntries(formData.entries());
    // console.log(updateDetails);

    const modifiedData = {
        roomName: updateDetails.roomName,
        hourlyRate: parseInt(updateDetails.hourlyRate),
        capacity: parseInt(updateDetails.capacity),
        description: updateDetails.description,
        image: updateDetails.image,
    };

    const res = await fetch(`http://localhost:5000/details/${id}`,
        {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(modifiedData)
        });
        const data = await res.json();
    if (!res.ok) return;
    revalidatePath("/details")
    return data;
};
