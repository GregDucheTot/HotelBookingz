module.exports = class Hotel {
    name;
    description;
    image;
    constructor(data) {
        this.name = data['name'];
        this.image = data['image'];
        this.description = data['description'];
    }
}