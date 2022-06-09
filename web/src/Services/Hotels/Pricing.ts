export class Pricing {
    perNight: number = 0;
    perWeek: number = 0;
    costPerNight: number = 0;

    /**
     *
     * @param perNight
     * @param perWeek
     * @param costPerNight
     */
    constructor(perNight: number = 0, perWeek:number = 0, costPerNight:number = 0) {
        this.perNight = perNight;
        this.perWeek = perWeek;
        this.costPerNight = costPerNight;
    }
}