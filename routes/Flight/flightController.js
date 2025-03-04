const axios = require("axios")

const API_KEY = 'c5883776698052b67a7a4a5e742705f52b7b644f924093a50d59101ad190ed91'

const flightSearch = async (req, res)=>{
    const {origin, destination, returnDate, departureDate} = req.body
    try {
    //    const departureCode = await axios.get('https://serpapi.com/search', {
    //         api_key: API_KEY,
    //         engine: "google_flights",
    //         q: origin,
    //         type: "airport"
    //     })
    //     console.log(departureCode)
    const url = `https://serpapi.com/search?engine=google_flights&departure_id=${origin}&arrival_id=${destination}&outbound_date=${departureDate}&return_date=${returnDate}&api_key=${API_KEY}`
    console.log(url)
        const response = await axios.get(url)
        res.json({message: "Flights Loading", payload: response})
    } catch (error) {
        res.status(500).json({message:"Error.", error: error.message})
    }
}

module.exports = flightSearch