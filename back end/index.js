import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utiles/db.js";
import userRoute from "./route/user.route.js"
import companyRoute from "./route/company.route.js"
import jobsRoute from "./route/job.route.js";
import applicationsRoute from "./route/application.route.js"
dotenv.config({});
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true
}
app.use(cors(corsOptions));
// api's
app.use("/api/v0/user", userRoute);
app.use("/api/v0/company", companyRoute);
app.use("/api/v0/jobs", jobsRoute);
app.use("/api/v0/applications", applicationsRoute);

// dummy api
// app.get("/hello", async (req, res) => {
//   res.send({ message: "Hello World!" });
// });

app.get("/view", async (req, res) => {
  try {
    var data = await userModel.find();
    res.send(data);
  } catch (err) {
    console.log(err);
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  connectDB();
  console.log(`server running at port ${PORT}`);

})

// //api to add login details
// app.get("/login", async (req, res) => {
//   try {
//     const { email, password } = req.query;
//     const user = await userModel.findOne({ email });
//     if (!user) return res.status(400).json({ message: "Invalid credentials" });
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });
//     const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
//     res.cookie("token", token, { httpOnly: true }).json({ message: "Logged in successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });