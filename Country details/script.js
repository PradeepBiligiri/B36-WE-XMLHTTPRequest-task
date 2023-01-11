// Use the same rest countries and print all countries name, region, sub region and population

const getCountries = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "https://restcountries.eu/rest/v2/all", true);
  //  xhr.responseType = "json";
  //   request.send();
  request.onload = () => {
    const data = JSON.parse(this.response);
    console.log(data);
    // console.log(JSON.parse(data));

    let result = data.map((country) => {
      return country.name;
    });
    console.log(result);
  };
  request.send();
};
getCountries();
