module.exports = class HotelRepository {
    constructor() {}
    create() {

    }
    read() {
        return [
            {
                name: 'Lovely Inn',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt mauris vehicula nulla mattis tristique. In ut purus sed ex facilisis tempus vitae ac ante. Duis ultricies aliquam neque vehicula luctus. Etiam fringilla elit dolor. Curabitur dictum vestibulum feugiat. Quisque lacinia facilisis ipsum. Integer dignissim urna vitae pharetra tincidunt. Suspendisse venenatis nisl felis, id ornare leo feugiat nec.',
                image: '/assets/images/sf.png',
                country: 'Australia',
                city : 'Sydney',
                perNight: 150,
                perWeek: 500,
                costPerNight: 100
            }
        ];
    }
    update() {}
    delete() {}
}