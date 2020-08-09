import React, { useEffect } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

const style: {
  width: string,
  height: string
} = {
  width: '100%',
  height: '500px'
}

const FoodMap = () => {

  useEffect(() => {
    let container = document.getElementById('map');
    let options = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 3
    };

    let map = new window.kakao.maps.Map(container, options);

  }, [])

  return (
    <div id="map" style={style} />
  );

};

export default FoodMap;
