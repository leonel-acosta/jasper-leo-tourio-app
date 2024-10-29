import dbConnect from "../../../db/connect";
import Place from "../../../db/models/Place";

export default async function handler(request, response) {
  try {
    await dbConnect();
    console.log("Database connected");
  } catch (error) {
    console.log("Database not connected");
    return response.satus(500).json({ error: "Database connection failed" });
  }

  try {
    if (request.method === "GET") {
      const places = await Place.find();
      return response.status(200).json(places);
    } else {
      return response.status(404).json({ status: "Not Found" });
    }
  } catch (error) {
    return response.satus(500).json({ error: "Internal Server Error" });
  }
}
