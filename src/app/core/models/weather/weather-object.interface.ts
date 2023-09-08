export interface IWeatherObject {
    coordinations?: {
        lat: number,
        long: number
    },
    cityName: string;
    weatherType: string;
    weatherDesc: string;
    temprature?: {
        temp: number;
        tempMax: number;
        tempMin: number;
        feelsLike: number;
    };
    wind?: {
        speed: number;
        deg: number;
        gust: number;
    }
    country: string;
    sunrise: number;
    sunset: number;
}