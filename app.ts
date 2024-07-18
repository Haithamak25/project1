import { Request, Response } from "express";
import express from 'express' ; 
import env from "dotenv" ; 
import bookRoute from "./routes/book.js";
import router from "./routes/book.js";

const app =

express();
env.config() ; 
const PORT  = process.env.PORT || 5000;

// Route.
app.get("/", (req: Request, res: Response) => {
    res.send("hello world");
})

app.use("/books", bookRoute );

app.listen(PORT, () => {

    console.log(`server is running on host http://localhost:${PORT}`);
});



export default app ; 