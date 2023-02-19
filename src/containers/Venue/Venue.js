import { useEffect, useState } from "react"
import { getVenue } from "../../apis/venueAPI";

const Venue = () => {
    const [venue, setVenue] = useState({});

    const loadVenue = async () => {
        const result = await getVenue(id);
        setVenue(result);
    }

    useEffect(() => {
        loadVenue();
    }, [])

    return venue;
}

export default Venue;
