require("dotenv").config();
const express = require("express");
const cors = require("cors");

const sequelize = require("./utils/database");
const multer = require('multer'); 
const app = express();

console.log(process.env.ORIGIN);

app.use(express.json());
app.use(cors());
app.use(express.static("public")); 

app.use(express.urlencoded({ extended: true }));
const upload = multer();

const userRoutes = require("./routes/user");
const s3Routes = require("./routes/s3");
app.use("/user", userRoutes);
app.use("/s3",upload.single('file'), s3Routes)
app.use((req, res) => {
    const routesArr = req.url.split("/");
    res.sendFile(`${routesArr[1]}`, { root: "views" });
});

sequelize
  .sync()
  //.sync({force:true})
  .then(() => {
    console.log("DATABASE CONNECTED.");
    app.listen(4000, () => {
      console.log("SERVER LISTENING ON PORT 4000");
    });
  })
  .catch((err) => {
    console.log(err);
  });


