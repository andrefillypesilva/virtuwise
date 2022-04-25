export default interface Vehicle {
    title: string;
    brand: string;
    image: string;
    panoramicImage: string;
    location: {
        placeName: string;
        address: string;
    },
    options: string[];
}
