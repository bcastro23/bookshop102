using { bookshop102 as my } from '../db/datamodel';

@path : '/catalog'

service CatalogService {

    entity Books as projection on my.Books {
        title as Title, author.name as Author, stock as Stock
    }

}
