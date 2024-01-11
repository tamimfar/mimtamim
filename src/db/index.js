import mongoose from "mongoose";
import { DB_NAME } from "../constent.js";

const connectDB = async () => {

	try {
	const connectedDB =	await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
	console.log(`\n connected mongodb !! db host ${connectedDB.connection.host}`);
	} catch (error) {
		console.log('ERROR hello:', error);
		process.exit(1)
	}
}

export default connectDB