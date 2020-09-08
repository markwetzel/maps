import { Mappable } from './Map';
import faker from 'faker';

// 'implements' forces us to add all of the Mappable properties
// to make it compatible with the Mappable interface
export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string;

  constructor() {
    this.name = `${faker.name.firstName()} ${faker.name.lastName()}`;

    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };

    this.color = 'magenta';
  }

  markerContent = (): string => {
    return `
      <div>
        <h1>Name: ${this.name}</h1>        
      </div>
    `;
  };
}
