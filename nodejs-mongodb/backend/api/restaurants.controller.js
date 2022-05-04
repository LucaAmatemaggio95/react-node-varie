import RestaurantsDAO from '../dao/restaurantsDAO.js'

export default class RestaurantsController {

    static async apiGetRestaurants (req, res, next) {

        const itemsPerPage = req.query.itemsPerPage ? parseInt(req.query.itemsPerPage, 10) : 20;//setto il query param dell'url per avere il numero di items per pagina
        const page = req.query.page ? parseInt(req.query.page, 10) : 0;// stessa cosa di sopra ma con il numero di pagine

        let filters = {};

        if (req.query.zipcode) {
            filters.zipcode = req.query.zipcode;
        } else if (req.query.name) {
            filters.name = req.query.name
        }

        const {itemsList, total} = await RestaurantsDAO.getRestaurants({// eseguo la query
            filters,
            page,
            itemsPerPage
        });

        const response = {// invio la risposta
            itemsList: itemsList,
            page: page,
            filters: filters,
            itemsPerPage: itemsPerPage,
            total: total
        }

        res.json(response);

    }

}