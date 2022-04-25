export default interface Vehicle {
    title: String;
    brand: String;
    image: String;
    panoramicImage: String;
    location: {
        placeName: String;
        address: String;
    },
    options: String[];
}
