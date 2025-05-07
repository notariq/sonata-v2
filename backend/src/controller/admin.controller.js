import { Song } from "../models/songs.model.js";
import { Album } from "../models/albums.model.js";
import cloudinary from "../lib/cloudinary.js";

const uploadToCLoudinary = async (file) => {
    try {
        const result = await cloudinary.uploader.upload(file.tempFilePath, {
            resource_type: "auto",
            folder: "songs",
            resource_type: "auto",
        });

        return result.secure_url;
    } catch (error) {
        console.error("Error uploading file in uploadToCLoudinary:");
        throw new Error("Error uploading file to Cloudinary");
    }
}

export const createSong = async (req, res, next) => {
    try {
        if (!req.file || !req.files.audioFile || !req.files.imageFile) {
            return res.status(400).json({ message: "No file uploaded" });
        }

        const { title, artist, albumId, duration } = req.body;
        const audioFile = req.files.audioFile;
        const imageFile = req.files.imageFile;

        const audioUrl = await uploadToCLoudinary(audioFile);
        const imageUrl = await uploadToCLoudinary(imageFile);

        const song = new Song({
            title,
            artist,
            audioUrl,
            imageUrl,
            duration,
            albumId: albumId || null
        });

        await song.save();

        // update album if song is not added yet
        if (albumId) {
            await Album.findByIdAndUpdate(albumId, {
                $push: { songs: song._id },
            });
        }

        res.status(201).json({ message: "Song created successfully", song });
    } catch (error) {
        console.error(error);
        next(error);
    }
}

export const deleteSong = async (req, res, next) => {
    try {
        const { id } = req.params;
        const song = await Song.findById(id);

        if (song.albumId) {
            await Album.findByIdAndUpdate(song.albumId, {
                $pull: { songs: song._id },
            });
        }
        await Song.findByIdAndDelete(id);
        res.status(200).json({ message: "Song deleted successfully" });
    } catch (error) {
        console.error("Error deleting song:", error);
        next(error);
    }
}

export const createAlbum = async (req, res, next) => {
    try {
        const { title, artist } = req.body;
        const imageFile = req.files.imageFile;
        
        const imageUrl = await uploadToCLoudinary(imageFile);

        const album = new Album({
            title: title,
            artist: artist,
            imageUrl: imageUrl,
        });

        await album.save();
    } catch (error) {
        console.error("Error creating album:", error);
        next(error);
    }
}

export const deleteAlbum = async (req, res, next) => {
    try {
        const { id } = req.params;
        await Song.deleteMany({ albumId: id });
        await Album.findByIdAndDelete(id);
        res.status(200).json({ message: "Album deleted successfully" });
    } catch (error) {
        console.error("Error deleting album:", error);
        next(error);
    }
}


export const checkAdmin = async (req, res, next) => {
    try {
        res.status(200).json({ admin: true });
    } catch (error) {
        console.error("Error checking admin:", error);
        next(error);
    }
}