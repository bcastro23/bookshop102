
async function after(srv) {

    // Use reflection to get the csn definition of Books
    const {Books} = cds.entities;

    // Add discount for overtocked books
    //const admin = require('./admin-catalog.js');
    const over_stock = 50;

    // https://cap.cloud.sap/docs/node.js/api#srv-after
    // srv.after (event, entity?, handler) → this
    srv.after ('READ', 'Books', (each)=> {
        //console.log('>>>> /catalog... srv.after -handler- ' + over_stock);
        if (each.Stock >= over_stock) {
            each.Title += ' -- SALE 15% discount!';
        }
    })

}

module.exports = after