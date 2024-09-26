const { Bookmark, Movie, User } = require("../models");


exports.bookmarklist = async (req, res, next) => {   
    try {
        const bookmarks = await Bookmark.findAll(
            {include: [ Movie ],}
        );
        if(!bookmarks) throw new NotFoundError();
        res.status(200).json(bookmarks);
    } catch (error) {
        next(error);
    } 
    
}

exports.setbookmark = async (req, res, next) => {
    const { movieId } = req.params;
    try {
        const userId = "2";
        const bookmark = await Bookmark.create({ userId, movieId });
        res.status(201).json(bookmark);
    } catch (error) {
        next(error);
    }
}