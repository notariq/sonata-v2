import { Song }from '../models/songs.model.js';

export const getAllSongs = async (req, res, next) => {
    try {
        const songs = await Song.find().sort({createdAt: -1});
        res.status(200).json(songs);
    } catch (error) {
        console.error("Error fetching songs:", error);
        next(error);
    }
}