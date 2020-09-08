export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
  color: string;
}

export class Map {
  private map: google.maps.Map;

  constructor(elementId: string) {
    const parsedElementId = elementId.replace('#', '');

    this.map = new google.maps.Map(document.getElementById(parsedElementId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  // Dependency Inversion Example
  // addMarker(mappable: User | CarLot | Company): void {
  // ^----> Bad approach! We should use dependency inversion here
  // Instead of Map.ts trying to accomodate every possible class,
  // Make the various classes accomodate Map!
  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.map,
      position: mappable.location,
      animation: 2,
    });

    const infoWindow = new google.maps.InfoWindow({
      content: `<div style='color: ${
        mappable.color
      }'> ${mappable.markerContent()}</div>`,
    });

    marker.addListener('click', () => {
      infoWindow.open(this.map, marker);
    });
  }
}
