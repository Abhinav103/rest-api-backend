const express = require("express")
const data = require("./HotelData.json")
const port = 3000;

const app = express();

app.get("/api/hotelDetails", (req,res) => {
    res.json(data);
})


app.listen(port, () =>{
    console.log(`Server is Listening on Port ${port}`)
})



