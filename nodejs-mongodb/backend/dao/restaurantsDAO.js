let restaurants;

export default class RestaurantsDAO {

    static async injectDB(conn) {
        if (restaurants) {
            return
        }
        try {
            restaurants = await conn.db(process.env.RESTREVIEWS_NS).collection("restaurants")
        } catch (e) {
            console.error('Unable to connect');
        }
    }

    static async getRestaurants ({
        filters = null,
        page = 0,
        itemsPerPage = 20
    } = {}) {
        let query;
        if (filters) {
            if ('name' in filters) {
                query = {$text: {$search: filters['name']}}// name contiene parametro
            } else if ('zipcode' in filters) {
                query = {'address.zipcode': {$eq: filters['zipcode']}}// zipcode === parametro
            }
        }

        let cursor;

        try {
            cursor = await restaurants.find(query);//esegui la query
        } catch (error) {
            console.error(error);
            return {list: [], total: 0}
        }

        const displayCursor = cursor.limit(itemsPerPage).skip(itemsPerPage * page);// estrazione paginata

        try {
            const itemsList = await displayCursor.toArray();
            const total = await restaurants.countDocuments(query);
            
            return {itemsList, total};

        } catch (error) {
            console.error(error);
            return {list: [], total: 0}
        }


    }

}