import { Mappable } from './Map';
import faker from 'faker';

export class CarLot implements Mappable {
  location: {
    lat: number;
    lng: number;
  };
  color: string;

  constructor() {
    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude(),
    };
    this.color = 'blue';
  }

  markerContent(): string {
    return 'Car Lot';
  }
}
