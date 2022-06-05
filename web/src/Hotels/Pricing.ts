export class Pricing {
    perNight: number;
    perWeek: number;
    costPerNight: number;

    /**
     *
     * @param perNight
     * @param perWeek
     * @param costPerNight
     */
    constructor(perNight: number, perWeek:number, costPerNight:number) {
        this.perNight = perNight;
        this.perWeek = perWeek;
        this.costPerNight = costPerNight;
    }
}