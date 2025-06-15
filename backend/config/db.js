import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect('mongodb+srv://SaswataDhara:Saswata9932326549@cluster0.wupresm.mongodb.net/food-del').then(()=>console.log("DB Connected"));
} 