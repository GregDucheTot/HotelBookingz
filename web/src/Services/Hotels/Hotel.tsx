import {Pricing} from "./Pricing";

export class Hotel {
    name: string;
    image: string;
    country: string;
    city: string;
    description: string;
    pricing: Pricing;


    // @fixme: this constructor is not nice.
    constructor(dbData: any) {
        this.name = dbData['name'];
        this.image = dbData['image'];
        this.country = dbData['country'];
        this.city = dbData['city'];
        this.description = dbData['description'];
        this.pricing = new Pricing(dbData['perNight'], dbData['perWeek'], dbData['costPerNight']);
    }

    setAttribute(field: string, value: any) {
        switch (field) {
            case 'name':
                this.name = value;
                break;
            case 'image':
                this.image = value;
                break;
            case 'country':
                this.country = value;
                break;
            case 'city':
                this.country = value;
                break;
            case 'description':
                this.country = value;
                break;

                // @todo: pricing

        }
    }
}