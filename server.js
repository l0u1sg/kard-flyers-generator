const express = require("express")
const app = express();
const port = process.env.PORT || 3000;

app.set("view-engine", "ejs");
app.use(express.static(__dirname + "/views"));

app.get("/", (req, res) => {
    res.render("index.ejs")
})
app.use('/exported-images', express.static('/views/static'));

app.listen(port, function () {
    console.log(`Application listen at ${port} port`);
});