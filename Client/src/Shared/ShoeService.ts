import { ShoeDto } from "./types";

let url = "data.json"; // replace with API url
let prod = false;

//#region GET
export const GetAllShoes = async () => {
    if (prod) url += "api/shoes";

    const response = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
    const responseBody = await response.json();

    // split response array into chunks for rows
    let sets: ShoeDto[][] = [];
    let setSize = 4;
    while (responseBody.length > 0) sets.push(responseBody.splice(0, setSize));

    return sets;
};

export const GetShoe = () => {
}
//#endregion

//#region POST
export const AddShoe = (shoe: ShoeDto) => {
}
//#endregion