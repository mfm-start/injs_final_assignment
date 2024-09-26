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

exports.bookmarkUser = async (req, res, next) => {
    const user = req.user;
    try {
        const bookmark = await Bookmark.findAll({
            where: {
                userId: user.id,
            },
            include: [ Movie ],
        });
        if (!bookmark) throw new NotFoundError();
        res.status(200).json(bookmark);
    } catch (error) {
        next(error);
    }
}

exports.setbookmark = async (req, res, next) => {
    const { movieId } = req.params;
    const user = req.user;
    try {
        const userId = user.id;
        const bookmark = await Bookmark.create({ userId, movieId });
        res.status(201).json(bookmark);
    } catch (error) {
        next(error);
    }
}