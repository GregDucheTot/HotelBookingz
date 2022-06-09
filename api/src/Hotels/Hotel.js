module.exports = class Hotel {
    name;
    description;
    image;
    pricing;

    constructor(data) {
        this.name = data['name'];
        this.image = data['image'];
        this.description = data['description'];
        this.pricing = {
            perNight: parseInt(data.pricing?.perNight),
            perWeek: parseInt(data.pricing?.perWeek)
        }
    }
}