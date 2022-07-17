const PORT = 3001;
const express = require("express");
const app = express();
const images = require("./modules/images");
app.set("view engine", "ejs");

// <%imagesArray.forEach((image)=>{%>
//     <p><%= image.author %></p>
// <%})%>

const path = require("path");
const publicDirectoryPath = path.join(__dirname, "./public");

app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", { imagesArray: images });
});
app.listen(PORT, () => {
  console.log("Server is up on port" + PORT);
});

// images.forEach((image, index, arr) => {
//   console.log(index);
// });

for (let i ; i < images.length; i++) {
    const imageUrl = images.download_url;
    const imageIndex = imageUrl[i];
    console.log(imageUrl);
}
