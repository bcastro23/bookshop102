using { bookshop102 as my } from '../db/datamodel';

@path : '/admin'
//@impl: './admin-catalog.js'
service AdminService {

    entity Books as projection on my.Books {
        *, author.name as AuthorName
    };
    entity Authors as projection on my.Authors;

}
