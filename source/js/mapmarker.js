if (document.querySelector(".contacts__map")) {

  var imageMap = document.querySelector(".contacts__image-wrapper");

  function initMap() {
    var uluru = {
      lat: 59.9387255,
      lng: 30.322964
    };
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 17,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map,
      draggable: true,
      animation: google.maps.Animation.DROP,
      icon: {
        url: "../img/icon-map-pin.svg",
        scaledSize: new google.maps.Size(67, 100)
      }
    });
  }

  function hideImageMap() {
    imageMap.classList.add("visually-hidden");
  }

  window.onload = hideImageMap;
  window.addEventListener("load", initMap);
}
