const express = require("express");
const fs = require("fs");
require("dotenv").config();
const app = express();
PORT = process.env.PORT;

// JSON parsing
app.use(express.json());

app.get("/movieslist", (req, res) => {
  res.status(200).json({ msg: "this is complete movie list" });
});

app.get("/movies/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  res.status(200).json({ msg: "individual movie" });
});



app.post("/add-movie", (req, res) => {
    try {
        const {  title, director, releaseYear, genre } = req.body;
        const moviesData = JSON.parse(fs.readFileSync("./db.json", "utf-8"))
        let data = moviesData.movies
        let id = data[data.length-1].id+1
        console.log(id,req.body)
         data.push(...req.body,id)
        fs.writeFileSync('./db.json',JSON.stringify(moviesData))
        res.status(200).json({ msg: "movie added successfully" });
      } catch (error) {
      
        res.status(400).json({msg:"error in movie adding",error})
      }
  });


  // For all undefined routes
app.use((req, res) => {
    res
      .status(404)
      .json({
        msg: "this route is not correct,Please check your routes and try again.",
      });
  });

  
app.listen(PORT, () => {
  console.log(`server running at ${PORT}`);
});
