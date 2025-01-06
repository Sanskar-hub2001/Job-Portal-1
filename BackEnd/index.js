// import express from "express";
// import cookieParser from "cookie-parser";
// import cors from "cors";
// import dotenv from "dotenv";
// import connectDB from "./utils/db.js";
// import userRoute from "./routes/user.route.js";
// import companyRoute from "./routes/company.route.js";
// import jobRoute from "./routes/job.route.js";
// import applicationRoute from "./routes/application.route.js";

// dotenv.config({});

// const app = express();

// // middleware
// app.use(express.json());
// app.use(express.urlencoded({extended:true}));
// app.use(cookieParser());
// const corsOptions = {
//     // origin:'http://localhost:5173',
//     origin:'https://job-portal-1-client-1-cv75s41p3-sanskar-singh-baghels-projects.vercel.app/',
//     // origin:'https://careerhorizon123.netlify.app',
//     credentials:true
// }

// app.use(cors(corsOptions));

// const PORT = process.env.PORT || 3000;



// // api's
// app.use("/api/v1/user", userRoute);
// app.use("/api/v1/company", companyRoute);
// app.use("/api/v1/job", jobRoute);
// app.use("/api/v1/application", applicationRoute);



// app.listen(PORT,()=>{
//     connectDB();
//     console.log(`Server running at port ${PORT}`);
// })


// import express from "express";
// import cookieParser from "cookie-parser";
// import cors from "cors";
// import dotenv from "dotenv";
// import connectDB from "./utils/db.js";
// import userRoute from "./routes/user.route.js";
// import companyRoute from "./routes/company.route.js";
// import jobRoute from "./routes/job.route.js";
// import applicationRoute from "./routes/application.route.js";

// dotenv.config({});

// const app = express();

// // Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

// // CORS Configuration
// const allowedOrigins = [
//     // 'http://localhost:5173',
//     'https://job-portal-1-client-1-cv75s41p3-sanskar-singh-baghels-projects.vercel.app',
//     // 'https://careerhorizon123.netlify.app'
// ];

// const corsOptions = {
//     origin: function (origin, callback) {
//         if (!origin || allowedOrigins.includes(origin)) {
//             callback(null, true);
//         } else {
//             callback(new Error('Not allowed by CORS'));
//         }
//     },
//     credentials: true,
//     optionsSuccessStatus: 200
// };

// // Apply CORS
// app.use(cors(corsOptions));

// // Handle Preflight Requests
// app.options('*', cors(corsOptions));

// const PORT = process.env.PORT || 3000;

// // API Routes
// app.use("/api/v1/user", userRoute);
// app.use("/api/v1/company", companyRoute);
// app.use("/api/v1/job", jobRoute);
// app.use("/api/v1/application", applicationRoute);

// // Start Server
// app.listen(PORT, () => {
//     connectDB();
//     console.log(`Server running at port ${PORT}`);
// });




import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";

dotenv.config({});

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// CORS Setup
const corsOptions = {
    origin: [
        'http://localhost:5173',
        'https://job-portal-1-client-1-cv75s41p3-sanskar-singh-baghels-projects.vercel.app',
        'https://careerhorizon123.netlify.app'
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
};

// Enable CORS
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));  // Handle preflight requests

const PORT = process.env.PORT || 3000;

// API Routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

// Start Server
app.listen(PORT, () => {
    connectDB();
    console.log(`Server running at port ${PORT}`);
});
