import express from "express";
import { PORT } from "./env.js";
import path from "path"
const app = express(); 
const staticPath = path.join(import.meta.dirname, "public");
app.use(express.static(staticPath));
app.use(express.urlencoded({extended:true})); //midelweare

// app.get("/contact", (req ,res) =>{
//     console.log(req.query);
//     res.redirect("/");
// });

app.post("/contact", (req ,res) =>{
    console.log(req.body);
    res.redirect("/");
});




// instance ovuer experss applaction
//const PORT = 3001;

// app.get("/", (req ,res) => res.send("<h1>Hello Express</h1>"));
// app.get("/about", (req ,res) => res.send("<h3>Hello Express About Page</h3>"));
// app.get("/contact", (req ,res) =>{
//    return res.send(` <div class="container">
//         <h1>URL Naveed</h1>
//         <form id="naveed">
//             <div>
//                 <label for="url">Enter URL:</label>
//                 <input type="url" name="url" id="url" required>
//             </div>

//              <div>
//                 <label for="short">Short code:</label>
//                 <input type="text" name="short" id="short" required>
//             </div>
//             <button type="submit">Shorten</button>

//         </form>
//         <h2>Shorted URLs</h2>
//         <ul id="nav"></ul>

//     </div>`)
// });

// console.log(process);
//const PORT = process.env.PORT || 3001;

app.use((req,res) =>{
    // return res.status(404).send("<h1>page not found</h1>")
      return res.status(404).sendFile(path.join(import.meta.dirname, "views" , "404.html"))
})
app.listen(PORT, () =>{
    console.log(`Server runing at the port: ${PORT}`);
});