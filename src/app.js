const express = require("express");
const fileUpload = require('express-fileupload')
const { UserRoutes, ProductRoutes } = require("./routes");
const loaders = require("./loaders");
const config = require("./config");
const path = require("path");
const events = require("./scripts/events");

config();
loaders();
events();

const app = express();

//Dinamik olarak eklenmis statik bir dosya oldugu icin dısari sunmaliyiz. 
//localhost urlsinde uploads gelirse bu dosyayi disariya static olarak sun!!!
//localhost:2018/product-images/dosyaAdi.uzanti
app.use("/product-images", express.static(path.join(__dirname, "./", "uploads/products"))); //Bulundugumuz klasoru baz alarak

app.use(express.json());
app.use(fileUpload());

app.listen(process.env.APP_PORT, () => {
  console.log(`Application is running on ${process.env.APP_PORT}`);
  app.use("/users", UserRoutes);
  app.use("/products", ProductRoutes);
});