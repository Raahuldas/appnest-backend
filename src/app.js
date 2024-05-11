import express from "express" 
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors(
    {
        origin:process.env.CORS_ORIGIN,
        credentials:true
    }
))

app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({extended:true, limit:"16kb"}));
app.use(express.static("public"))
app.use(cookieParser())

import contactRouter from "./routes/contact.route.js"
import careerRouter from "./routes/career.route.js"

app.use("/api/v1/contacts",contactRouter);
app.use("/api/v1/careers",careerRouter);


export default app; 