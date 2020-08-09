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

const FoodMap = (props: {
  createList: (data: string) => void;
}) => {
  const { createList } = props;

  useEffect(() => {

    // 검색 엘리먼트
    let container = document.getElementById('map');
    let options = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 4
    };

    let map = new window.kakao.maps.Map(container, options);

    // 마커를 클릭하면 장소명을 표출할 인포윈도우
    let infowindow = new window.kakao.maps.InfoWindow({ zIndex: 1 });

    // 장소 검색 객체를 생성
    let ps = new window.kakao.maps.services.Places();

    // 키워드로 장소를 검색
    ps.keywordSearch('안양', placesSearchCB);

    // 키워드 검색 완료 시 호출되는 콜백함수
    function placesSearchCB(data: any, status: any, pagination: any) {
      if (status === window.kakao.maps.services.Status.OK) {

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해 LatLngBounds 객체에 좌표를 추가
        let bounds = new window.kakao.maps.LatLngBounds();

        for (let i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new window.kakao.maps.LatLng(data[i].y, data[i].x));
          // createList(data[i].place_name);
        }

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정
        map.setBounds(bounds);
      }
    }

    // 지도에 마커를 표시하는 함수
    function displayMarker(place: any) {

      // 마커를 생성하고 지도에 표시
      let marker = new window.kakao.maps.Marker({
        map: map,
        position: new window.kakao.maps.LatLng(place.y, place.x)
      });

      // 마커에 클릭이벤트를 등록
      window.kakao.maps.event.addListener(marker, 'click', function () {

        // 마커를 클릭하면 장소명이 인포윈도우에 표출
        infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
        infowindow.open(map, marker);
      });
    }


  }, []);

  return (
    <div id="map" style={style} />
  );

};

export default FoodMap;
