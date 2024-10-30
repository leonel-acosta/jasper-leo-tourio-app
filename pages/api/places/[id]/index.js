import dbConnect from "../../../../db/connect";
import Place from "../../../../db/models/Place";
import Comment from "../../../../db/models/Comment";

export default async function handler(request, response) {
  try {
    await dbConnect();
    console.log("DB connected ID");
  } catch (error) {
    console.log("DB CONNECTION ERROR ID");
    return response.status(500).json({ error: "Database connection failed" });
  }

  const { id } = request.query;

  if (request.method === "PATCH") {
    try {
      const updatedData = request.body;
      const updatedPlace = await Place.findByIdAndUpdate(id, updatedData, {
        new: true,
      });

      if (!updatedPlace) {
        return response.status(404).json({ status: "Not Found" });
      }

      return response.status(200).json(updatedPlace);
    } catch (error) {
      console.error("Error updating place:", error);
      return response
        .status(500)
        .json({ error: "Internal server error updating place" });
    }
  }

  if (request.method === "GET") {
    try {
      const place = await Place.findById(id).populate("comments");

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

  if (request.method === "POST") {
    try {
      const commentData = request.body;
      const comment = await Comment.create(commentData);
      const place = await Place.findById(id);

      place.comments.push(comment._id);
      await place.save();

      return response.status(201).json({ status: "Comment created" });
    } catch (error) {
      console.log(error);
      return response.status(400).json({ error: error.message });
    }
  }

  if (request.method === "DELETE") {
    await Place.findByIdAndDelete(id);
    response.status(200).json({ status: `Place ${id} successfully deleted.` });
  }

  const place = Place.find((place) => place._id.$oid === id);
  const comment = place?.comments;
  const allCommentIds = comment?.map((comment) => comment.$oid) || [];
  const comments = db_comments.filter((comment) =>
    allCommentIds.includes(comment._id.$oid)
  );

  response.status(200).json();
}
