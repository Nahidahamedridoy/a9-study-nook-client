import { headers } from "next/headers";
import { auth } from "../auth";

export const getAllDetails = async () => {
  const res = fetch("http://localhost:5000/details");
  const data = (await res).json();
  return data;
};

export const getDetailsById = async (id) => {

  const {token} =await auth.api.getToken({
    headers : await headers()
  })

  console.log(token);

  const res = await fetch(`http://localhost:5000/details/${id}`, {
    headers: {
      authorization: `Bearer ${token}`
    }
  });
  const data = await res.json();
  return data;
}

export const getLatestDetails = async () => {
  const res = await fetch("http://localhost:5000/details?limit=6", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch latest details");
  }

  return res.json();
};