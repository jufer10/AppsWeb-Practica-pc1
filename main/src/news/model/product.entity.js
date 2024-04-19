export class Product {
    constructor(title = '', image = '',
                price = null, description='',
                category='', id= null) {
        this.id = id;
        this.title = title;
        this.image = image;
        this.price = price;
        this.description = description;
        this.category = category;

    }
}