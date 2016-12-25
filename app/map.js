import mapStyles from './mapStyles'

class Map {
  render() {
    this.el = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: {lat: 52.42932, lng: 13.4},
        styles: mapStyles
    });
  }

  getCanvas() {
    return this.el
  }
}

let map = new Map();

export default map;


