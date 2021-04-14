import { useEffect, useState } from "react";
import React from "react";
import { MapillaryViewer } from "react-mapillary";
// const europe = [
//   "Albania",
//   "Andorra",
//   "Armenia",
//   "Austria",
//   "Azerbaijan",
//   "Belarus",
//   "Belgium",
//   "Bosnia and Herzegovina",
//   "Bosnia",
//   "Herzegovina",
//   "Bosnia-Herzegovina",
//   "Bulgaria",
//   "Croatia",
//   "Cyprus",
//   "Czechia",
//   "Denmark",
//   "Estonia",
//   "Finland",
//   "France",
//   "Georgia",
//   "Germany",
//   "Greece",
//   "Hungary",
//   "Iceland",
//   "Ireland",
//   "Italy",
//   "Kazakhstan",
//   "Kosovo",
//   "Latvia",
//   "Liechtenstein",
//   "Lithuania",
//   "Luxembourg",
//   "Malta",
//   "Moldova",
//   "Monaco",
//   "Montenegro",
//   "Netherlands",
//   "North Macedonia",
//   "Macedonia",
//   "Norway",
//   "Poland",
//   "Portugal",
//   "Romania",
//   "Russia",
//   "San Marino",
//   "Serbia",
//   "Slovakia",
//   "Slovenia",
//   "Spain",
//   "Sweden",
//   "Switzerland",
//   "Turkey",
//   "Ukraine",
//   "United Kingdom",
//   "UK",
//   "Vatican City",
// ];
// const asia = [
//   "Afghanistan",
//   "Armenia",
//   "Azerbaijan",
//   "Bahrain",
//   "Bangladesh",
//   "Bhutan",
//   "Brunei",
//   "Cambodia",
//   "China",
//   "Cyprus",
//   "Georgia",
//   "India",
//   "Indonesia",
//   "Iran",
//   "Iraq",
//   "Israel",
//   "Japan",
//   "Jordan",
//   "Kazakhstan",
//   "Kuwait",
//   "Kyrgyzstan",
//   "Laos",
//   "Lebanon",
//   "Macao",
//   "Macau",
//   "Malaysia",
//   "Maldives",
//   "Mongolia",
//   "Myanmar",
//   "Burma",
//   "Nepal",
//   "North Korea",
//   "Oman",
//   "Pakistan",
//   "Palestine",
//   "Philippines",
//   "Qatar",
//   "Russia",
//   "Saudi Arabia",
//   "Singapore",
//   "South Korea",
//   "Sri Lanka",
//   "Syria",
//   "Taiwan",
//   "Tajikistan",
//   "Thailand",
//   "Timor-Leste",
//   "Turkey",
//   "Turkmenistan",
//   "United Arab Emirates",
//   "UAE",
//   "Uzbekistan",
//   "Vietnam",
//   "Yemen",
// ];
// const africa = [
//   "Algeria",
//   "Angola",
//   "Benin",
//   "Botswana",
//   "Burkina Faso",
//   "Burundi",
//   "Cabo Verde",
//   "Cameroon",
//   "Central African Republic",
//   "CAR",
//   "Chad",
//   "Comoros",
//   "Congo, Democratic Republic of the",
//   "Democratic Republic of the Congo",
//   "Congo, Republic of the",
//   "Republic of the Congo",
//   "Cote d'Ivoire",
//   "Djibouti",
//   "Egypt",
//   "Equatorial Guinea",
//   "Eritrea",
//   "Eswatini",
//   "Swaziland",
//   "Ethiopia",
//   "Gabon",
//   "Gambia",
//   "Ghana",
//   "Guinea",
//   "Guinea-Bissau",
//   "Kenya",
//   "Lesotho",
//   "Liberia",
//   "Libya",
//   "Madagascar",
//   "Malawi",
//   "Mali",
//   "Mauritania",
//   "Mauritius",
//   "Morocco",
//   "Mozambique",
//   "Namibia",
//   "Niger",
//   "Nigeria",
//   "Rwanda",
//   "Sao Tome and Principe",
//   "Sao Tome",
//   "Principe",
//   "Saint Thomas and Prince",
//   "Senegal",
//   "Seychelles",
//   "Sierra Leone",
//   "Somalia",
//   "South Africa",
//   "South Sudan",
//   "Sudan",
//   "Tanzania",
//   "Togo",
//   "Tunisia",
//   "Uganda",
//   "Zambia",
//   "Zimbabwe",
// ];
// const northAmerica = [
//   "Antigua and Barbuda",
//   "Bahamas",
//   "Barbados",
//   "Belize",
//   "Canada",
//   "Costa Rica",
//   "Cuba",
//   "Dominica",
//   "Dominican Republic",
//   "El Salvador",
//   "Grenada",
//   "Guatemala",
//   "Haiti",
//   "Honduras",
//   "Jamaica",
//   "Mexico",
//   "Nicaragua",
//   "Panama",
//   "Saint Kitts and Nevis",
//   "Saint Lucia",
//   "Saint Vincent and the Grenadines",
//   "Trinidad and Tobago",
//   "United States of America",
//   "United States",
//   "US",
//   "USA",
//   "Anguilla",
//   "Aruba",
//   "Bermuda",
//   "Bonaire",
//   "British Virgin Islands",
//   "Cayman Islands",
//   "Clipperton Island",
//   "Curacao",
//   "Greenland",
//   "Guadeloupe",
//   "Martinique",
//   "Montserrat",
//   "Navassa Island",
//   "Puerto Rico",
//   "Saba",
//   "Saint Barthelemy",
//   "Saint Martin",
//   "Saint Pierre and Miquelon",
//   "Sint Eustatius",
//   "Sint Maarten",
//   "Turks and Caicos Islands",
//   "US Virgin Islands",
// ];
// const southAmerica = [
//   "Argentina",
//   "Bolivia",
//   "Brazil",
//   "Chile",
//   "Colombia",
//   "Ecuador",
//   "Guyana",
//   "Paraguay",
//   "Peru",
//   "Suriname",
//   "Uruguay",
//   "Venezuela",
//   "Falkland Islands",
//   "Falkland Islands (Islas Malvinas)",
//   "Islas Malvinas",
//   "French Guiana",
//   "South Georgia and the South Sandwich Islands",
// ];
// const oceania = [
//   "Australia",
//   "Fiji",
//   "Kiribati",
//   "Marshall Islands",
//   "Micronesia",
//   "Nauru",
//   "New Zealand",
//   "Palau",
//   "Papua New Guinea",
//   "Samoa",
//   "Solomon Islands",
//   "Tonga",
//   "Tuvalu",
//   "Vanuatu",
//   "American Samoa",
//   "Cook Islands",
//   "French Polynesia",
//   "Guam",
//   "New Caledonia",
//   "Niue",
//   "Norfolk Island",
//   "Northern Mariana Islands",
//   "Pitcairn Islands",
//   "Tokelau",
//   "Wake Island",
//   "Wallis and Futuna",
// ];

function Map({ imgKey }) {
  const [latlong, setLatlong] = useState({ lat: 0, long: 0 });
  console.log(latlong);

  {
    //the following comments are mostly from when i was fetching random mapillary images - and they depended on state being located here.
    // function randCoord() {
    //   // LATITUDE -90 to +90
    //   let lat = (Math.random() * 90).toFixed(3);
    //   if (Math.random() < 0.5) {
    //     lat = lat * -1;
    //   }
    //   // LONGITUDE -180 to + 180
    //   let long = (Math.random() * 180).toFixed(3);
    //   if (Math.random() < 0.5) {
    //     long = long * -1;
    //   }
    //   return { lat: parseFloat(lat), long: parseFloat(long) }; //why the heck would i need to do this??? long was a string and lat wasnt...
    // }
    // function makebbox() {
    //   const coord = randCoord();
    //   return {
    //     minlong: coord.long - 4,
    //     minlat: coord.lat - 2,
    //     maxlong: coord.long + 4,
    //     maxlat: coord.lat + 2,
    //   };
    // }
    // useEffect(() => {
    //   fetchSequences();
    // }, []); //[trigger]
    // function fetchSequences() {
    //   const bbox = makebbox();
    //   fetch(
    //     `https://a.mapillary.com/v3/sequences?bbox=${bbox.minlong},${
    //       bbox.minlat
    //     },${bbox.maxlong},${
    //       bbox.maxlat
    //     }&client_id=${"MHZvSFJXZjRWR0p0YWZpODRTMDhDbjoxOTUzYjNlMjVlMWM0NTcw"}`
    //   )
    //     .then((r) => r.json())
    //     .then((data) => getApic(data));
    // }
    // function getApic(data) {
    //   console.log("justfetchedsomestuff", data);
    //   // if (data.features) {
    //   if (data.features.length < 30) {
    //     fetchSequences(); //setTrigger(true);
    //   } else {
    //     let feature =
    //       data.features[Math.floor(Math.random() * data.features.length)];
    //     console.log("did this work? grabbing a random sample", feature);
    //     let count = 0;
    //     while (
    //       feature.properties.coordinateProperties.image_keys.length < 30 &&
    //       count < 3 * data.features.length
    //     ) {
    //       feature = data.features.sample;
    //       count++;
    //     }
    //     if (count === 3 * data.features.length) {
    //       fetchSequences(); // setTrigger(true);
    //     } else {
    //       console.log(feature.properties.coordinateProperties.image_keys[0]);
    //       setLatlong({
    //         lat: feature.geometry.coordinates[0],
    //         long: feature.geometry.coordinates[1],
    //       });
    //       setImgKey(feature.properties.coordinateProperties.image_keys[0]);
    //     }
    //   }
    //   //  }
    // }
    // console.log(address);
    // useEffect(() => {
    //   fetch(`${api}/city_info`, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       accept: "application/json",
    //     },
    //     body: JSON.stringify(latlong),
    //   })
    //     .then((r) => r.json())
    //     .then((body) => handleLocationData(body));
    // }, [imgKey]); // [latlong]
    // function handleLocationData(data) {
    //   setAddress({
    //     city: "",
    //     state: "",
    //     country: "",
    //     continent: "",
    //   });
    //   console.log("does this look right to you?", data, typeof data);
    //   if (!data.error) {
    //     data.forEach((d) => {
    //       if (d.types.includes("country")) {
    //         const countryName = d.long_name;
    //         if (europe.includes(countryName)) {
    //           setAddress((address) => ({
    //             ...address,
    //             country: countryName,
    //             continent: "Europe",
    //           }));
    //         } else if (asia.includes(countryName)) {
    //           setAddress((address) => ({
    //             ...address,
    //             country: countryName,
    //             continent: "Asia",
    //           }));
    //         } else if (africa.includes(countryName)) {
    //           setAddress((address) => ({
    //             ...address,
    //             country: countryName,
    //             continent: "Africa",
    //           }));
    //         } else if (northAmerica.includes(countryName)) {
    //           setAddress((address) => ({
    //             ...address,
    //             country: countryName,
    //             continent: "North America",
    //           }));
    //         } else if (southAmerica.includes(countryName)) {
    //           setAddress((address) => ({
    //             ...address,
    //             country: countryName,
    //             continent: "South America",
    //           }));
    //         } else if (oceania.includes(countryName)) {
    //           setAddress((address) => ({
    //             ...address,
    //             country: countryName,
    //             continent: "Oceania/Australia",
    //           }));
    //         }
    //       } else if (
    //         d.types.includes("locality") ||
    //         d.types.includes("administrative_area_level_1")
    //       ) {
    //         const stateName = d.long_name;
    //         setAddress((address) => ({ ...address, state: stateName }));
    //       } else if (
    //         d.types.includes("sublocality") ||
    //         d.types.includes("administrative_area_level_2")
    //       ) {
    //         const cityName = d.long_name;
    //         setAddress((address) => ({ ...address, city: cityName }));
    //       }
    //     });
    //     console.log("finished finding geography info");
    //     setStamp(!stamp);
    //   }
    // }
    // useEffect(() => {
    //   fetch(`${api}/stamp/${user.id}`, {
    //     method: "POST",
    //     headers: {
    //       "content-type": "application/json",
    //       accept: "application/json",
    //     },
    //     body: JSON.stringify(address),
    //   })
    //     .then((r) => r.json())
    //     .then((reply) => console.log("saved this place, or tried to", reply));
    // }, [stamp]);
  }
  return (
    <div
      id="map-container"
      // role="button"
      // tabIndex="-1"
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <MapillaryViewer
        clientId="MHZvSFJXZjRWR0p0YWZpODRTMDhDbjoxOTUzYjNlMjVlMWM0NTcw"
        imageKey={imgKey}
        // filter={["==", "userKey", "2PiRXqdqbY47WzG6CRzEIA"]}
        // onTiltChanged={(tilt) => console.log(`Tilt: ${tilt}`)} //vertical angle
        // onFovChanged={(fov) => console.log(`FoV: ${fov}`)}  //zoom
        onNodeChanged={(node) => {
          console.log("Lat:", node.latLon.lat, "Long:", node.latLon.lon);
          setLatlong({ lat: node.latLon.lat, long: node.latLon.lon });
        }}
        // onBearingChanged={(bearing) => console.log(`Bearing: ${bearing}`)} //horiz angle
      />
    </div>
  );
}

export default Map;
