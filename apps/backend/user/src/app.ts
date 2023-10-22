import express from "express";
import * as logger from "./utils/logger";
import * as config from "./utils/config";
import { userRouter } from "./controllers/api/userRouter";
import cors from "cors";

export const app = express();

const allowedOrigins = [
    'http://localhost',
    'http://localhost:80',
    'http://localhost:3000',
    'http://localhost:8000',
    'http://localhost:8080',
    'http://localhost:8001',
    'http://localhost:8002',
    'http://localhost:9000',
    'http://leetpal.com',
    'http://leetpal.com:3000',
    'http://leetpal.com:8001',
    'http://leetpal.com:8000',
    'http://leetpal.com:3000',
    'http://34.87.168.130',
    'http://34.87.168.130:3000',
    'http://34.87.168.130:8000',
    'http://34.87.168.130:8001'
];

app.use(
    cors({
        origin: function (origin, callback) {
            if (!origin || allowedOrigins.indexOf(origin) !== -1) {
                callback(null, true)
            } else {
                callback(new Error('Not allowed by CORS'))
            }
        },
        credentials: true,
        exposedHeaders: ['set-cookie'],
    })
)

app.use(express.json());

import { Request, Response } from "express";

app.use("/api/users", userRouter);

