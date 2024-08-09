// Define the API URL
const apiUrl = "https://restcountries.com/v3.1/all";

// Make a GET request
fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    const countries = document.querySelector(".countries");
    var input = document.querySelector(".input");

    input.addEventListener("keyup", () => {
      var inputvalue = input.value.toLowerCase();
      console.log(inputvalue);
      countries.innerHTML = "";
      data.forEach((element) => {
        if (element.name.common.toLowerCase().includes(inputvalue)) {
          var country = document.createElement("div");
          country.classList.add("country");
          country.addEventListener("click", () => {
            country.classList.toggle("open");
            country.children[1].classList.toggle("d-none");
          });
          country.innerHTML += `<div class="img-name">
              <div class="img">
                <img src= ${element.flags.png} alt="" />
              </div>
              <div class="name">
                <h1>${element.name.common}</h1>
              </div>
            </div>
            <div class="opensection d-none">
                <ul>
                    <li><span>Currency:</span> ${
                      Object.values(element.currencies)[0].name
                    } (${Object.values(element.currencies)[0].symbol})</li>
                    <li><span>Capital:</span> ${element.capital[0]}</li>
                    <li><span>Region:</span> ${element.region}</li>
                    <li><span>Language:</span> ${
                      Object.values(element.languages)[0]
                    }</li>
                    <li><span>Area:</span> ${element.area} km<sup>2</sup></li>
                    <li><span>Population:</span> ${element.population}</li>                        
                    <li><span>Car Side:</span> ${element.car.side}</li>
                    <li><span>Start of Week:</span> ${element.startOfWeek}</li>
                    <li><span>Dialing code:</span> ${element.idd.root}${element.idd.suffixes}</li>
                    <li><span>Flag:</span> ${element.flag}</li>
                    <li><span>Continents:</span> ${element.continents}</li>
                    <li><span>Army Logo:</span> <img src="${
                      element.coatOfArms.png
                    }"></li>
                </ul>
                <a target=_blank href=${element.maps.googleMaps}>Map</a>
            </div>`;
          countries.appendChild(country);
        }
      });
    });
    if (input.value == "") {
      data.forEach((element) => {
        var country = document.createElement("div");
        country.classList.add("country");
        country.addEventListener("click", () => {
          country.classList.toggle("open");
          country.children[1].classList.toggle("d-none");
        });
        country.innerHTML += `<div class="img-name">
            <div class="img">
              <img src= ${element.flags.png} alt="" />
            </div>
            <div class="name">
              <h1>${element.name.common}</h1>
            </div>
          </div>
          <div class="opensection d-none">
              <ul>
                  <li><span>Currency:</span> ${
                    Object.values(element.currencies)[0].name
                  } (${Object.values(element.currencies)[0].symbol})</li>
                  <li><span>Capital:</span> ${element.capital[0]}</li>
                  <li><span>Region:</span> ${element.region}</li>
                  <li><span>Language:</span> ${
                    Object.values(element.languages)[0]
                  }</li>
                  <li><span>Area:</span> ${element.area} km<sup>2</sup></li>
                  <li><span>Population:</span> ${element.population}</li>                        
                  <li><span>Car Side:</span> ${element.car.side}</li>
                  <li><span>Start of Week:</span> ${element.startOfWeek}</li>
                  <li><span>Dialing code:</span> ${element.idd.root}${element.idd.suffixes}</li>
                  <li><span>Flag:</span> ${element.flag}</li>
                  <li><span>Continents:</span> ${element.continents}</li>
                  <li><span>Army Logo:</span> <img src="${
                    element.coatOfArms.png
                  }"></li>
              </ul>
              <a target=_blank href=${element.maps.googleMaps}>Map</a>
          </div>`;
        countries.appendChild(country);
      });
    }
  })
  .catch((error) => {
    console.error("Error:", error);
  });
