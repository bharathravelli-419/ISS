var map = L.map('map').setView([0,0 ], 2);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);


const fetchSpaceStationDetails =  async()=>{
    const res = await fetch('https://api.wheretheiss.at/v1/satellites/25544')
    const data = await res.json();
    const {latitude,longitude} = data;

    console.log(data);
    L.marker([latitude,longitude]).addTo(map);

}


fetchSpaceStationDetails();

// var map = L.map('map').setView([17.1099,80.6094 ], 1);

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);

// L.marker([17.1099,80.6094]).addTo(map)
//     .bindPopup('A pretty CSS popup.<br> Easily customizable.')
//     .openPopup();


// console.log(L)