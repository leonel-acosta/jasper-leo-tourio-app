import dbConnect from "../../../../db/connect";
import Place from "../../../../db/models/Place";

export default async function handler(request, response) {
  try {
    await dbConnect();
    console.log("DB connected ID");
  } catch (error) {
    console.log("DB CONNECTION ERROR ID");
  }

  /*   await dbConnect();
   */
  const { id } = request.query;

  /*   if (!id) {
    return response.status(400).json({ error: "ID is required" });
  } */

  if (request.method === "GET") {
    try {
      const place = await Place.findById(id);

      if (!place) {
        return response.status(404).json({ status: "Not Found" });
      }

      return response.status(200).json(place);
    } catch (error) {
      console.error("Error fetching place:", error);
      return response
        .status(500)
        .json({ error: "Internal server Error fetching place" });
    }
  }

  if (request.method === "DELETE") {
    await Place.findByIdAndDelete(id);
    // Declare jokeToDelete to be the joke identified by its id and delete it.
    // This line handles the entire deletion process.
    response.status(200).json({ status: `Place ${id} successfully deleted.` });
  }

  /*   const place = Place.find((place) => place._id.$oid === id);
   */
  /*   const comment = place?.comments;
  const allCommentIds = comment?.map((comment) => comment.$oid) || [];
  const comments = db_comments.filter((comment) =>
    allCommentIds.includes(comment._id.$oid)
  );
 */
  response.status(200).json();
}
