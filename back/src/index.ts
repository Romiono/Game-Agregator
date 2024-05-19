import express, { Express } from "express";
import dotenv from "dotenv";
import mongoose from 'mongoose';
import {corsMiddleware} from "./cors.middleware";
import authRouter from './routers/authRouter';
import adminRoutes from "./routers/adminRoutes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;


app.use(express.json());
app.use(corsMiddleware);
app.use('/api/auth', authRouter);
app.use('/api/admin', adminRoutes);


const serverStart = async () => {
    try {
        await mongoose.connect(`mongodb+srv://Broni27:abrcbrb7@diplom.hsubczy.mongodb.net/?retryWrites=true&w=majority&appName=Diplom`);
        app.listen(port, () => console.log(`[server]: Server is running at http://localhost:${port}`));
    }
    catch (e) {
        console.log(e);
    }
}

serverStart();