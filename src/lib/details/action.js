'use server'

import { revalidatePath } from "next/cache";

export const addDetails = async (formData) => {
    const newDetails = Object.fromEntries(formData.entries());

    const modifiedData = {
        roomName: newDetails.roomName,
        hourlyRate: parseInt(newDetails.hourlyRate),
        capacity: parseInt(newDetails.capacity),
        description: newDetails.description,
        image: newDetails.image,
    };
    // console.log(newDetails);
    const res = fetch("http://localhost:5000/details", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(modifiedData),
    });
    const data = (await res).json();
    // console.log(data);

    if (!res.ok) {
        return
    }
    revalidatePath("/details")
    return data;
};

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