import { User } from "../models/user.model.js";
import Message from "../models/message.model.js";
import cloudinary from "../services/cloudinary.service.js";

export const getUsers = async (request, response) => {
  try {
    const loggedInUser = request.user?._id;

    if (!loggedInUser) {
      return response.status(401).json({
        message: "Unauthorized access",
      });
    }
    const users = await User.find({ _id: { $ne: loggedInUser } }).select(
      "-password",
    );

    response.status(200).json(users);
  } catch (error) {
    console.log(`Error in getUsers controller: ${error.message}`);
    response.status(500).json({ message: error.message });
  }
};

export const getMessages = async (request, response) => {
  try {
    const { id: userToChatId } = request.params;
    const myId = request.user._id;

    const messages = await Message.find({
      $or: [
        { senderId: myId, receiverId: userToChatId },
        { senderId: userToChatId, receiverId: myId },
      ],
    }).sort({ createdAt: 1 });
    response.status(200).json(messages);
  } catch (error) {
    console.error(`Error in getMessages: ${error.message}`);
    response.status(500).json({ message: error.message });
  }
};

export const sendMessage = async (request, response) => {
  try {
    const { id: receiverId } = request.params;
    const myId = request.user._id;

    const { text, messageType, media, fileName, duration } = request.body;
    // const {} = messageType

    if (!text && !media) {
      return response
        .status(400)
        .json({ message: "Please provide text and media" });
    }

    let mediaUrl = "";
    let mediaPublicId = "";

    if (media) {
      {
        const uploadResponse = await cloudinary.uploader.upload(media, {
          folder: "chat-app/messages",
          resource_type: "auto",
        });

        mediaUrl = uploadResponse.secure_url;
        mediaPublicId = uploadResponse.public_id;
      }
    }

    const newMessage = new Message({
      senderId: myId,
      receiverId,
      text,
      messageType,
      media: {
        url: mediaUrl,
        public_id: mediaPublicId,
        fileName: fileName || "",
        duration: duration || 0,
      },
    });

    await newMessage.save();

    response.status(200).json(newMessage);
  } catch (error) {
    console.error(`Error in sendMessage: ${error.message}`);
    response.status(500).json({ message: error.message });
  }
};
