
declare const ymaps: any // eslint-disable-line

export function useMap (coords:number[], id?:string, isMark?:boolean) {
  const initMap = () => {
  ymaps.ready().then(async () => {// eslint-disable-line
      let map = new ymaps.Map(id,// eslint-disable-line
        {
          center: coords,
          zoom: 13
        }
      )
      map.controls.remove('geolocationControl') // eslint-disable-line
      map.controls.remove('searchControl') // eslint-disable-line
      map.controls.remove('trafficControl') // eslint-disable-line
      map.controls.remove('typeSelector') // eslint-disable-line
      map.controls.remove('fullscreenControl') // eslint-disable-line
      map.controls.remove('zoomControl') // eslint-disable-line
      map.controls.remove('rulerControl') // eslint-disable-line
      map.behaviors.disable(['scrollZoom']) // eslint-disable-line
      if (isMark) {
      let placeMark = new ymaps.Placemark(coords,{},{// eslint-disable-line
          iconLayout: 'default#image',
          iconImageHref: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
          iconImageSize: [40, 40],
          iconImageOffset: [-16, -40]
        })
      map.geoObjects.add(placeMark)// eslint-disable-line

      }
    })
  }
  return {
    initMap
  }
}
