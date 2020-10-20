
const over_stock = 50;

module.exports = (srv) => {

    const {Books} = cds.entities;

    srv.after ('READ', 'Books', (books) =>{
        //console.log('>>>> /admin -after-')
        for (let each of books) {
            if (each.stock >= over_stock) {
                each.title += ' ++ ATTENTION: Item over stocked!!!';
            }
        }

    })

}


exports.over_stock = over_stock