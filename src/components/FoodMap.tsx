import React, { useState, useEffect } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

const style: {
  width: string;
  height: string;
} = {
  width: '100%',
  height: '100px',
};

const FoodMap = (props: {
  searchItem: string;
  createList: (data: string) => void;
  setSearchAddress: (data: string) => void;
}) => {
  const { searchItem, createList, setSearchAddress } = props;
  const [address, setAddress] = useState('');

  // setAddress(searchItem);
  console.log(searchItem);

  // 현재 위치
  let latitude: number = 0;
  let longitude: number = 0;

  useEffect(() => {
    // 현재 위치 좌표
    const setLocation = (callBack: any): void => {
      navigator.geolocation.getCurrentPosition(function (pos) {
        latitude = pos.coords.latitude;
        longitude = pos.coords.longitude;
        callBack(latitude, longitude);
      });
    };

    // 검색 장소 데이터
    let dataList: string[] = [];

    let container: any;
    let map: any;
    let infowindow: any;
    let ps: any;
    let geocoder: any;
    let searchAddrFromCoords: any;
    let displayCenterInfo: any;
    let placesSearchCB: any;
    let displayMarker: any;

    console.log(searchItem);

    setLocation((latitude: number, longitude: number) => {
      const options = {
        center: new window.kakao.maps.LatLng(latitude, longitude),
        level: 5,
      };

      // 지도 엘리먼트
      container = document.getElementById('map');

      // 지도 객체 생성
      map = new window.kakao.maps.Map(container, options);

      // 마커를 클릭하면 장소명을 표출할 인포윈도우
      infowindow = new window.kakao.maps.InfoWindow({ zIndex: 1 });

      // 장소 검색 객체 생성
      ps = new window.kakao.maps.services.Places();

      // 주소 좌표 변환 객체 생성
      geocoder = new window.kakao.maps.services.Geocoder();

      // 좌표로 주소 정보 요청
      searchAddrFromCoords = (coords: any, callback: any) => {
        geocoder.coord2RegionCode(longitude, latitude, callback);
      };

      // 좌표로 주소 정보 결과
      displayCenterInfo = (result: any, status: any) => {
        console.log(result, status);
        setSearchAddress(result[0].address_name);
      };

      // 키워드 검색 완료 시 호출되는 콜백함수
      placesSearchCB = (data: any, status: any, pagination: any) => {
        if (status === window.kakao.maps.services.Status.OK) {
          // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해 LatLngBounds 객체에 좌표를 추가
          let bounds = new window.kakao.maps.LatLngBounds();

          for (let i = 0; i < data.length; i++) {
            displayMarker(data[i]);
            bounds.extend(new window.kakao.maps.LatLng(data[i].y, data[i].x));
            dataList.push(data[i].place_name);
          }

          console.log(dataList);

          // 검색된 장소 위치를 기준으로 지도 범위를 재설정
          map.setBounds(bounds);
        }
      };

      // 지도에 마커를 표시하는 함수
      displayMarker = (place: any) => {
        // 마커를 생성하고 지도에 표시
        let marker = new window.kakao.maps.Marker({
          map: map,
          position: new window.kakao.maps.LatLng(place.y, place.x),
        });

        // 마커에 클릭이벤트를 등록
        window.kakao.maps.event.addListener(marker, 'click', function () {
          // 마커를 클릭하면 장소명이 인포윈도우에 표출
          infowindow.setContent(
            '<div style="padding:5px;font-size:12px;">' +
            place.place_name +
            '</div>'
          );
          infowindow.open(map, marker);
        });
      };

      searchAddrFromCoords(map.getCenter(), displayCenterInfo);
    });

    // 키워드로 장소 검색
    function mapSearch() {
      ps.keywordSearch('서울특별시 동작구 관광명소', placesSearchCB, {
        x: latitude,
        y: longitude,
      });
    }

    // console.log(dataList);
  }, []);

  return <div id="map" style={style} />;
};

export default FoodMap;