export type Image={
  'path': string
}
export type Apartment = {
  'id': string,
  'name': string,
  'address': string,
  'sum': string|number,
  'isPets': boolean,
  'isKitchen': boolean,
  'isWifi': boolean,
  'bed': string|number,
  'bedroom': string|number,
  'coords': string,
  'adults': string|number,
  'child': string|number,
  'description': string,
  'images': Image[],
  'hasWashingMachine': false,
  'apartmentLocation': string,
  'l1':string|number,
  'l2': string|number,
  'complexDescription': string,
  'wiFiName': null,
  'wiFiPwd': null,
  'checkIn': string,
  'checkOut': string,
  'floor': string|number,
  'hasFreeRooms': boolean
}
