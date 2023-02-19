import axios from "axios";
import DOMAIN from "../config";

export const getVenue = async (id) => {
    try {
        const result = await axios.get(`${DOMAIN}/stadiums/` + id)
        return result.data;
    } catch (error) {
        console.log(error);
    }
}
