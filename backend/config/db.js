import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://ganarajeshgana:7yDzeub8Ehd0eKry@rajesh123.zeda2dl.mongodb.net/deliveryapp').then(()=>console.log("DataBase Connected"));
}