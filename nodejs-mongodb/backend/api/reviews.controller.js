import ReviewsDAO from '../dao/reviewsDAO.js';

export default class ReviewsController {

    static async apiPostReview (req, res) {
        try {
            const itemId = req.body.itemId;
            const review = req.body.text;
            const userInfo = {
                name: req.body.name,
                _id: req.body.userId
            }

            const date = new Date();

            const response = await ReviewsDAO.addReview(
                itemId,
                userInfo,
                review,
                date
            )
            console.log(response)
            res.json({status: 'success'})

        } catch (err) {
            res.status(500).json({error: err.message})
        }
    }

    static async apiUpdateReview (req, res) {
        try {
            
            const itemId = req.body.itemId;
            const review = req.body.text;
            const date = new Date();

            const response = await ReviewsDAO.updateReview(
                itemId,
                req.body.userId,
                review,
                date
            )

            const {error} = response;
            if (error) {
                res.status(400).json({error});
            }

            if (response.modifiedCount === 0) {
                throw new Error('unable to update')
            }

        } catch (error) {
            console.log('error :>> ', error);
            res.status(500).json({error: error})
        }
    }

    static async apiDeleteReview (req, res) {
        try {
            const itemId = req.query.id;
            const userId = req.body.userId;
            const response = await ReviewsDAO.deleteReview(
                itemId,
                userId
            )
            res.json({status: 'success'})

        } catch (error) {
            res.status(500).json({error: error})
        }
    }

}