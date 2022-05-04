import mongodb from 'mongodb'

const ObjectId = mongodb.ObjectID

let reviews;

export default class ReviewsDAO {

    /*
        questo pezzo di codice è cannato perchè la connessione al db deve essere sempre stabilita prima di fare qualche chiamata
        risolto mettendo inject in index.js ma non è una buona soluzione
    */

    static async injectDB(conn) {// link the mongodb collection 
        if (reviews) {
            return
        }
        try {
            reviews = await conn.db(process.env.RESTREVIEWS_NS).collection('reviews')// se questa collection non esiste viene creata in automatico
        } catch (error) {
            console.log(error)
        }
    }

    static async addReview (itemId, user, text, date) {
        try {

            const reviewDoc = {
                name: user.name,
                userId: user._id,
                date: date,
                text: text,
                restaurant_id: ObjectId(itemId)// restaurant_id viene convertito in un ObjectId di MongoDB
            }

            return await reviews.insertOne(reviewDoc)

        } catch (error) {
            return {error: error}
        }
    }

    static async updateReview (itemId, userId, text, date) {
        try {
            /*
                questo pezzo di codice non funziona, non trova mai il record
            */
            const updateResponse = await reviews.updateOne(
                {"userId": userId, "_id": Object(itemId)},// filtra le review in base allo userId e al review ObjectId
                {$set: {"text": text, "date": date}}
            )
            
            return updateResponse;

        } catch (error) {
            return {error: error}
        }
    }

    static async deleteReview (reviewId, userId) {
        try {
            const deleteResponse = await reviews.deleteOne(
                {userId: userId, _id: Object(reviewId)}// filtra le review in base allo userId e al review ObjectId
            )

            return deleteResponse;

        } catch (error) {
            return {error: error}
        }
    }

}