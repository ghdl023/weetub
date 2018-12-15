import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(
    process.env.MONGO_URL,
    {
        useNewUrlParser : true,
        useFindAndModify : false
    }
);

const db = mongoose.connection;

const handleOpen = () => {
    console.log("Connected to DB");
}

const handleError = (err) => {
    console.log(`Error on DB Connection:${err}!!`);
}

db.once("open", handleOpen);
db.on("error", handleError);

// export const videos = [
//     {
//         id:324393,
//         title : "Video Awesome",
//         description : "This is something I love",
//         views : 24,
//         videoFile : "https://www.youtube.com/embed/nTpaEw5f-OU",
//         creator : {
//             id : 121212,
//             name : "Nicolas",
//             email : "nico@las.com"
//         }
//     },
//     {
//         id:549123,
//         title : "Video Super",
//         description : "This is something I love",
//         views : 24,
//         videoFile : "https://www.youtube.com/embed/nTpaEw5f-OU",
//         creator : {
//             id : 121212,
//             name : "Nicolas",
//             email : "nico@las.com"
//         }
//     },
//     {
//         id:123349,
//         title : "Video Hohoho",
//         description : "This is something I love",
//         views : 24,
//         videoFile : "https://www.youtube.com/embed/nTpaEw5f-OU",
//         creator : {
//             id : 121212,
//             name : "Nicolas",
//             email : "nico@las.com"
//         }
//     },
//     {
//         id:775821,
//         title : "Video Awesome",
//         description : "This is something I love",
//         views : 24,
//         videoFile : "https://www.youtube.com/embed/nTpaEw5f-OU",
//         creator : {
//             id : 121212,
//             name : "Nicolas",
//             email : "nico@las.com"
//         }
//     }
// ];