export const getAllDetails = async () => {
    const res = fetch("http://localhost:5000/details");
    const data = (await res).json();
    return data;
};

export const getDetailsById = async (id) => {
    const res = await fetch(`http://localhost:5000/details/${id}`);
    const data = await res.json();
    return data;
}