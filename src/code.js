import mongoose from "mongoose";
import {DB_NAME} from "./constent";

(async () => {
	try {
		await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
	} catch (error) {
		console.log('ERROR: ',error);
		throw arr
	}
})()