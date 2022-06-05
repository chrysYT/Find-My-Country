const main_content = document.querySelector(".main-content");
const loading = document.querySelector(".loading");
const header = document.querySelector(".header");

const API_URL = "https://restcountries.com/v3.1/all";

const all_continents = document.querySelector(
  ".switch-continent .all-continents"
);
const africa = document.querySelector(".switch-continent .africa");
const asia = document.querySelector(".switch-continent .asia");
const europe = document.querySelector(".switch-continent .europe");
const oceania = document.querySelector(".switch-continent .oceania");
const antarctica = document.querySelector(".switch-continent .antarctica");
const n_america = document.querySelector(".switch-continent .n-america");
const s_america = document.querySelector(".switch-continent .s-america");

async function getApi(url) {
  main_content.innerHTML = "";
  const response = await fetch(url);
  const data = await response.json();

  const DataSort = [];

  for (let i = 0; i < data.length; i++) {
    const commonnames = data[i].name["common"].split(",");

    const capital = data[i].capital ? data[i].capital.toString() : null;

    const official_name = data[i].altSpellings[data[i].altSpellings.length - 1];

    const continento = data[i].continents[0];

    const languages = data[i].languages
      ? Object.values(data[i].languages)
      : null;

    const Currency = data[i].currencies
      ? Object.values(data[i].currencies)[0].name
      : null;

    const ccode = data[i].idd["root"] + data[i].idd["suffixes"];

    const Timezone = data[i].timezones[0];

    const Population = data[i].population;

    const Independent = data[i].independent;

    const UNMember = data[i].unMember;

    const countryFlag = data[i].flags["png"];

    const CoatOfArms = data[i].coatOfArms["png"];

    DataSort.push(commonnames);
    commonnames.push(official_name);
    commonnames.push(capital);
    commonnames.push(continento);
    commonnames.push(languages);
    commonnames.push(Currency);
    commonnames.push(ccode);
    commonnames.push(Timezone);
    commonnames.push(Population);
    commonnames.push(Independent);
    commonnames.push(UNMember);
    commonnames.push(countryFlag);
    commonnames.push(CoatOfArms);

    DataSort.sort();

    // const country_name_off =
    //   data[i].altSpellings[data[i].altSpellings.length - 1];

    // const country_name = data[i].name['common'];

    // const country_capital = data[i].capital;

    // const language = data[i].languages
    //   ? Object.values(data[i].languages)
    //   : null;

    // const coatOfArms = data[i].coatOfArms['png'];

    // const continent = data[i].continents[0];

    // const currency = data[i].currencies
    //   ? Object.values(data[i].currencies)[0].name
    //   : null;

    // const flag = data[i].flags['png'];

    // const independent = data[i].independent;

    // const unMember = data[i].unMember;

    // const timezone = data[i].timezones[0];

    // const population = data[i].population;

    // const county_code = data[i].idd['root'] + data[i].idd['suffixes'];

    // const country = document.createElement('div');
    // country.classList.add('country');

    // country.innerHTML = `<img src="" />
    // <div class="coat-of-arms">
    // <img src=${coatOfArms} />
    // </div>
    // <div class="flag--name">

    // <div class="flag">
    // <img src=${flag} />
    // </div>
    // <h1>${country_name}</h1>

    // </div>

    // <h3>

    // ${country_name_off}

    // <div class="details">
    // <h6>Capital: <p>${country_capital} </p> </h6>
    // <h6>continent:<p>${continent} </p> </h6>
    // <h6>language/s:<p>${language} </p> </h6>
    // <h6>currency:<p>${currency} </p> </h6>
    // <h6>country-code:<p>${county_code} </p> </h6>
    // <h6>timezone:<p>${timezone} </p> </h6>
    // <h6>polulation:<p>${population} </p> </h6>
    // <h6>independent:<p>${independent} </p> </h6>
    // <h6>UN-Member:<p>${unMember} </p> </h6>
    // </div>

    // </h3>

    // <div class="more-details"><span>more</span><ion-icon name="chevron-down-outline"></ion-icon></div>
    // `;

    // main_content.appendChild(country);

    // loading.classList.add('active');
  }

  const Africa_array = [];
  const Asia_array = [];
  const Antartica_array = [];
  const Australia_array = [];
  const Europe_array = [];
  const North_america_array = [];
  const South_america_array = [];

  //filterAll
  all_continents.addEventListener("click", filterAll);
  function filterAll() {
    main_content.innerHTML = "";

    for (let j = 0; j < DataSort.length; j++) {
      const Country_Flag = DataSort[j][11];
      const CoatOfArms = DataSort[j][12];
      const country_name = DataSort[j][0];
      const country_name_off = DataSort[j][1];
      const country_capital = DataSort[j][2];
      const continent = DataSort[j][3];
      const language = DataSort[j][4];
      const currency = DataSort[j][5];
      const county_code = DataSort[j][6];
      const timezone = DataSort[j][7];
      const population = DataSort[j][8];
      const independent = DataSort[j][9];
      const unMember = DataSort[j][10];

      const country = document.createElement("div");
      country.classList.add("country");

      country.innerHTML = `<img src="" />
      <div class="coat-of-arms">
      <img src=${CoatOfArms} />
      </div>
      <div class="flag--name">
  
      <div class="flag">
      <img src=${Country_Flag} />
      </div>
      <h1>${country_name_off}</h1>
  
      </div>
  
      <h3>
  
      ${country_name}
  
      <div class="details">
      <h6>Capital: <p>${country_capital} </p> </h6>
      <h6>continent:<p>${continent} </p> </h6>
      <h6>language/s:<p>${language} </p> </h6>
      <h6>currency:<p>${currency} </p> </h6>
      <h6>country-code:<p>${county_code} </p> </h6>
      <h6>timezone:<p>${timezone} </p> </h6>
      <h6>polulation:<p>${population} </p> </h6>
      <h6>independent:<p>${independent} </p> </h6>
      <h6>UN-Member:<p>${unMember} </p> </h6>
      </div>
      
      </h3>
  
      <div class="more-details"><span>more</span><ion-icon name="chevron-down-outline"></ion-icon></div>
      `;

      main_content.appendChild(country);

      loading.classList.add("active");
    }
  }

  filterAll();

  //================================

  //africa
  for (let a = 0; a < DataSort.length; a++) {
    const Africa_list = DataSort[a];
    Africa_array.push(Africa_list);
  }

  const africa_only = Africa_array.filter((data) => data.includes("Africa"));

  africa.addEventListener("click", filterAfrica);
  function filterAfrica() {
    main_content.innerHTML = "";

    for (let f = 0; f < africa_only.length; f++) {
      const Country_Flag = africa_only[f][11];
      const CoatOfArms = africa_only[f][12];
      const country_name = africa_only[f][0];
      const country_name_off = africa_only[f][1];
      const country_capital = africa_only[f][2];
      const continent = africa_only[f][3];
      const language = africa_only[f][4];
      const currency = africa_only[f][5];
      const county_code = africa_only[f][6];
      const timezone = africa_only[f][7];
      const population = africa_only[f][8];
      const independent = africa_only[f][9];
      const unMember = africa_only[f][10];

      const country = document.createElement("div");
      country.classList.add("country");

      country.innerHTML = `<img src="" />
      <div class="coat-of-arms">
      <img src=${CoatOfArms} />
      </div>
      <div class="flag--name">
  
      <div class="flag">
      <img src=${Country_Flag} />
      </div>
      <h1>${country_name_off}</h1>
  
      </div>
  
      <h3>
  
      ${country_name}
  
      <div class="details">
      <h6>Capital: <p>${country_capital} </p> </h6>
      <h6>continent:<p>${continent} </p> </h6>
      <h6>language/s:<p>${language} </p> </h6>
      <h6>currency:<p>${currency} </p> </h6>
      <h6>country-code:<p>${county_code} </p> </h6>
      <h6>timezone:<p>${timezone} </p> </h6>
      <h6>polulation:<p>${population} </p> </h6>
      <h6>independent:<p>${independent} </p> </h6>
      <h6>UN-Member:<p>${unMember} </p> </h6>
      </div>
      
      </h3>
  
      <div class="more-details"><span>more</span><ion-icon name="chevron-down-outline"></ion-icon></div>
      `;

      main_content.appendChild(country);

      loading.classList.add("active");
    }
  }
  //===========================

  //antartica
  for (let b = 0; b < DataSort.length; b++) {
    const Antartica_list = DataSort[b];
    Antartica_array.push(Antartica_list);
  }

  const antartica_only = Antartica_array.filter((data) =>
    data.includes("Antarctica")
  );

  antarctica.addEventListener("click", filterAntarctica);
  function filterAntarctica() {
    main_content.innerHTML = "";

    for (let j = 0; j < antartica_only.length; j++) {
      const Country_Flag = antartica_only[j][11];
      const CoatOfArms = antartica_only[j][12];
      const country_name = antartica_only[j][0];
      const country_name_off = antartica_only[j][1];
      const country_capital = antartica_only[j][2];
      const continent = antartica_only[j][3];
      const language = antartica_only[j][4];
      const currency = antartica_only[j][5];
      const county_code = antartica_only[j][6];
      const timezone = antartica_only[j][7];
      const population = antartica_only[j][8];
      const independent = antartica_only[j][9];
      const unMember = antartica_only[j][10];

      const country = document.createElement("div");
      country.classList.add("country");

      country.innerHTML = `<img src="" />
      <div class="coat-of-arms">
      <img src=${CoatOfArms} />
      </div>
      <div class="flag--name">
  
      <div class="flag">
      <img src=${Country_Flag} />
      </div>
      <h1>${country_name_off}</h1>
  
      </div>
  
      <h3>
  
      ${country_name}
  
      <div class="details">
      <h6>Capital: <p>${country_capital} </p> </h6>
      <h6>continent:<p>${continent} </p> </h6>
      <h6>language/s:<p>${language} </p> </h6>
      <h6>currency:<p>${currency} </p> </h6>
      <h6>country-code:<p>${county_code} </p> </h6>
      <h6>timezone:<p>${timezone} </p> </h6>
      <h6>polulation:<p>${population} </p> </h6>
      <h6>independent:<p>${independent} </p> </h6>
      <h6>UN-Member:<p>${unMember} </p> </h6>
      </div>
      
      </h3>
  
      <div class="more-details"><span>more</span><ion-icon name="chevron-down-outline"></ion-icon></div>
      `;

      main_content.appendChild(country);

      loading.classList.add("active");
    }
  }
  //===========================

  //asia
  for (let c = 0; c < DataSort.length; c++) {
    const Asia_list = DataSort[c];
    Asia_array.push(Asia_list);
  }

  const asia_only = Asia_array.filter((data) => data.includes("Asia"));

  asia.addEventListener("click", filterAsia);
  function filterAsia() {
    main_content.innerHTML = "";

    for (let j = 0; j < asia_only.length; j++) {
      const Country_Flag = asia_only[j][11];
      const CoatOfArms = asia_only[j][12];
      const country_name = asia_only[j][0];
      const country_name_off = asia_only[j][1];
      const country_capital = asia_only[j][2];
      const continent = asia_only[j][3];
      const language = asia_only[j][4];
      const currency = asia_only[j][5];
      const county_code = asia_only[j][6];
      const timezone = asia_only[j][7];
      const population = asia_only[j][8];
      const independent = asia_only[j][9];
      const unMember = asia_only[j][10];

      const country = document.createElement("div");
      country.classList.add("country");

      country.innerHTML = `<img src="" />
      <div class="coat-of-arms">
      <img src=${CoatOfArms} />
      </div>
      <div class="flag--name">
  
      <div class="flag">
      <img src=${Country_Flag} />
      </div>
      <h1>${country_name_off}</h1>
  
      </div>
  
      <h3>
  
      ${country_name}
  
      <div class="details">
      <h6>Capital: <p>${country_capital} </p> </h6>
      <h6>continent:<p>${continent} </p> </h6>
      <h6>language/s:<p>${language} </p> </h6>
      <h6>currency:<p>${currency} </p> </h6>
      <h6>country-code:<p>${county_code} </p> </h6>
      <h6>timezone:<p>${timezone} </p> </h6>
      <h6>polulation:<p>${population} </p> </h6>
      <h6>independent:<p>${independent} </p> </h6>
      <h6>UN-Member:<p>${unMember} </p> </h6>
      </div>
      
      </h3>
  
      <div class="more-details"><span>more</span><ion-icon name="chevron-down-outline"></ion-icon></div>
      `;

      main_content.appendChild(country);

      loading.classList.add("active");
    }
  }
  // filterAsia();
  //===========================

  //Oceania
  for (let d = 0; d < DataSort.length; d++) {
    const Australia_list = DataSort[d];
    Australia_array.push(Australia_list);
  }

  const Australia_only = Australia_array.filter((data) =>
    data.includes("Oceania")
  );

  oceania.addEventListener("click", filterOceania);
  function filterOceania() {
    main_content.innerHTML = "";

    for (let j = 0; j < Australia_only.length; j++) {
      const Country_Flag = Australia_only[j][11];
      const CoatOfArms = Australia_only[j][12];
      const country_name = Australia_only[j][0];
      const country_name_off = Australia_only[j][1];
      const country_capital = Australia_only[j][2];
      const continent = Australia_only[j][3];
      const language = Australia_only[j][4];
      const currency = Australia_only[j][5];
      const county_code = Australia_only[j][6];
      const timezone = Australia_only[j][7];
      const population = Australia_only[j][8];
      const independent = Australia_only[j][9];
      const unMember = Australia_only[j][10];

      const country = document.createElement("div");
      country.classList.add("country");

      country.innerHTML = `<img src="" />
      <div class="coat-of-arms">
      <img src=${CoatOfArms} />
      </div>
      <div class="flag--name">
  
      <div class="flag">
      <img src=${Country_Flag} />
      </div>
      <h1>${country_name_off}</h1>
  
      </div>
  
      <h3>
  
      ${country_name}
  
      <div class="details">
      <h6>Capital: <p>${country_capital} </p> </h6>
      <h6>continent:<p>${continent} </p> </h6>
      <h6>language/s:<p>${language} </p> </h6>
      <h6>currency:<p>${currency} </p> </h6>
      <h6>country-code:<p>${county_code} </p> </h6>
      <h6>timezone:<p>${timezone} </p> </h6>
      <h6>polulation:<p>${population} </p> </h6>
      <h6>independent:<p>${independent} </p> </h6>
      <h6>UN-Member:<p>${unMember} </p> </h6>
      </div>
      
      </h3>
  
      <div class="more-details"><span>more</span><ion-icon name="chevron-down-outline"></ion-icon></div>
      `;

      main_content.appendChild(country);

      loading.classList.add("active");
    }
  }
  // filterOceania();
  //===========================

  //europe
  for (let e = 0; e < DataSort.length; e++) {
    const Europe_list = DataSort[e];
    Europe_array.push(Europe_list);
  }

  const Europe_only = Europe_array.filter((data) => data.includes("Europe"));

  europe.addEventListener("click", filterEurope);
  function filterEurope() {
    main_content.innerHTML = "";

    for (let j = 0; j < Europe_only.length; j++) {
      const Country_Flag = Europe_only[j][11];
      const CoatOfArms = Europe_only[j][12];
      const country_name = Europe_only[j][0];
      const country_name_off = Europe_only[j][1];
      const country_capital = Europe_only[j][2];
      const continent = Europe_only[j][3];
      const language = Europe_only[j][4];
      const currency = Europe_only[j][5];
      const county_code = Europe_only[j][6];
      const timezone = Europe_only[j][7];
      const population = Europe_only[j][8];
      const independent = Europe_only[j][9];
      const unMember = Europe_only[j][10];

      const country = document.createElement("div");
      country.classList.add("country");

      country.innerHTML = `<img src="" />
      <div class="coat-of-arms">
      <img src=${CoatOfArms} />
      </div>
      <div class="flag--name">
  
      <div class="flag">
      <img src=${Country_Flag} />
      </div>
      <h1>${country_name_off}</h1>
  
      </div>
  
      <h3>
  
      ${country_name}
  
      <div class="details">
      <h6>Capital: <p>${country_capital} </p> </h6>
      <h6>continent:<p>${continent} </p> </h6>
      <h6>language/s:<p>${language} </p> </h6>
      <h6>currency:<p>${currency} </p> </h6>
      <h6>country-code:<p>${county_code} </p> </h6>
      <h6>timezone:<p>${timezone} </p> </h6>
      <h6>polulation:<p>${population} </p> </h6>
      <h6>independent:<p>${independent} </p> </h6>
      <h6>UN-Member:<p>${unMember} </p> </h6>
      </div>
      
      </h3>
  
      <div class="more-details"><span>more</span><ion-icon name="chevron-down-outline"></ion-icon></div>
      `;

      main_content.appendChild(country);

      loading.classList.add("active");
    }
  }
  //==========================

  //N-america
  for (let f = 0; f < DataSort.length; f++) {
    const North_America_list = DataSort[f];
    North_america_array.push(North_America_list);
  }

  const north_america_only = North_america_array.filter((data) =>
    data.includes("North America")
  );

  n_america.addEventListener("click", filterNAmerica);
  function filterNAmerica() {
    main_content.innerHTML = "";

    for (let j = 0; j < north_america_only.length; j++) {
      const Country_Flag = north_america_only[j][11];
      const CoatOfArms = north_america_only[j][12];
      const country_name = north_america_only[j][0];
      const country_name_off = north_america_only[j][1];
      const country_capital = north_america_only[j][2];
      const continent = north_america_only[j][3];
      const language = north_america_only[j][4];
      const currency = north_america_only[j][5];
      const county_code = north_america_only[j][6];
      const timezone = north_america_only[j][7];
      const population = north_america_only[j][8];
      const independent = north_america_only[j][9];
      const unMember = north_america_only[j][10];

      const country = document.createElement("div");
      country.classList.add("country");

      country.innerHTML = `<img src="" />
      <div class="coat-of-arms">
      <img src=${CoatOfArms} />
      </div>
      <div class="flag--name">
  
      <div class="flag">
      <img src=${Country_Flag} />
      </div>
      <h1>${country_name_off}</h1>
  
      </div>
  
      <h3>
  
      ${country_name}
  
      <div class="details">
      <h6>Capital: <p>${country_capital} </p> </h6>
      <h6>continent:<p>${continent} </p> </h6>
      <h6>language/s:<p>${language} </p> </h6>
      <h6>currency:<p>${currency} </p> </h6>
      <h6>country-code:<p>${county_code} </p> </h6>
      <h6>timezone:<p>${timezone} </p> </h6>
      <h6>polulation:<p>${population} </p> </h6>
      <h6>independent:<p>${independent} </p> </h6>
      <h6>UN-Member:<p>${unMember} </p> </h6>
      </div>
      
      </h3>
  
      <div class="more-details"><span>more</span><ion-icon name="chevron-down-outline"></ion-icon></div>
      `;

      main_content.appendChild(country);

      loading.classList.add("active");
    }
  }
  //==========================

  //S-america
  for (let g = 0; g < DataSort.length; g++) {
    const South_America_list = DataSort[g];
    South_america_array.push(South_America_list);
  }

  const south_america_only = South_america_array.filter((data) =>
    data.includes("South America")
  );

  s_america.addEventListener("click", filterSAmerica);
  function filterSAmerica() {
    main_content.innerHTML = "";

    for (let j = 0; j < south_america_only.length; j++) {
      const Country_Flag = south_america_only[j][11];
      const CoatOfArms = south_america_only[j][12];
      const country_name = south_america_only[j][0];
      const country_name_off = south_america_only[j][1];
      const country_capital = south_america_only[j][2];
      const continent = south_america_only[j][3];
      const language = south_america_only[j][4];
      const currency = south_america_only[j][5];
      const county_code = south_america_only[j][6];
      const timezone = south_america_only[j][7];
      const population = south_america_only[j][8];
      const independent = south_america_only[j][9];
      const unMember = south_america_only[j][10];

      const country = document.createElement("div");
      country.classList.add("country");

      country.innerHTML = `<img src="" />
      <div class="coat-of-arms">
      <img src=${CoatOfArms} />
      </div>
      <div class="flag--name">
  
      <div class="flag">
      <img src=${Country_Flag} />
      </div>
      <h1>${country_name_off}</h1>
  
      </div>
  
      <h3>
  
      ${country_name}
  
      <div class="details">
      <h6>Capital: <p>${country_capital} </p> </h6>
      <h6>continent:<p>${continent} </p> </h6>
      <h6>language/s:<p>${language} </p> </h6>
      <h6>currency:<p>${currency} </p> </h6>
      <h6>country-code:<p>${county_code} </p> </h6>
      <h6>timezone:<p>${timezone} </p> </h6>
      <h6>polulation:<p>${population} </p> </h6>
      <h6>independent:<p>${independent} </p> </h6>
      <h6>UN-Member:<p>${unMember} </p> </h6>
      </div>
      
      </h3>
  
      <div class="more-details"><span>more</span><ion-icon name="chevron-down-outline"></ion-icon></div>
      `;

      main_content.appendChild(country);

      loading.classList.add("active");
    }
  }
  //==========================

  const searchbar = document.querySelector(".header .search-bar .search");

  const search_icon = document.querySelector(".header .search-bar ion-icon");

  const search_array = [];

  searchbar.addEventListener("keyup", searchResults);

  function searchResults(e) {
    search = e.target.value;

    search_icon.addEventListener("click", () => {
      filterSearch();
      filterSearchResults();
    });

    if (e.code == "Enter") {
      filterSearch();
      filterSearchResults();
      e.target.value = "";
    }
  }

  const filterSearch = () => {
    for (let i = 0; i < DataSort.length; i++) {
      search_array.push(DataSort[i]);
    }

    search_only = search_array.filter((data) => data.includes(search));
  };

  function filterSearchResults() {
    main_content.innerHTML = "";

    const Country_Flag = search_only[0][11];
    const CoatOfArms = search_only[0][12];
    const country_name = search_only[0][0];
    const country_name_off = search_only[0][1];
    const country_capital = search_only[0][2];
    const continent = search_only[0][3];
    const language = search_only[0][4];
    const currency = search_only[0][5];
    const county_code = search_only[0][6];
    const timezone = search_only[0][7];
    const population = search_only[0][8];
    const independent = search_only[0][9];
    const unMember = search_only[0][10];

    const country = document.createElement("div");
    country.classList.add("country");

    country.innerHTML = `<img src="" />
      <div class="coat-of-arms">
      <img src=${CoatOfArms} />
      </div>
      <div class="flag--name">
  
      <div class="flag">
      <img src=${Country_Flag} />
      </div>
      <h1>${country_name_off}</h1>
  
      </div>
  
      <h3>
  
      ${country_name}
  
      <div class="details">
      <h6>Capital: <p>${country_capital} </p> </h6>
      <h6>continent:<p>${continent} </p> </h6>
      <h6>language/s:<p>${language} </p> </h6>
      <h6>currency:<p>${currency} </p> </h6>
      <h6>country-code:<p>${county_code} </p> </h6>
      <h6>timezone:<p>${timezone} </p> </h6>
      <h6>polulation:<p>${population} </p> </h6>
      <h6>independent:<p>${independent} </p> </h6>
      <h6>UN-Member:<p>${unMember} </p> </h6>
      </div>
      
      </h3>
  
      <div class="more-details"><span>more</span><ion-icon name="chevron-down-outline"></ion-icon></div>
      `;

    main_content.append(country);

    loading.classList.add("active");
  }

  const scroll_up = document.querySelector(".scroll-up");
  const country = document.querySelectorAll(".main-content .country");

  function scrollAnimation() {
    const window_height = window.innerHeight;
    const animationPoint = 600;

    var main_content_Top = main_content.getBoundingClientRect().top;

    var country_Top = country[5].getBoundingClientRect().top;

    if (main_content_Top < window_height - animationPoint) {
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }

    if (country_Top < window_height - animationPoint) {
      scroll_up.classList.add("active");
    } else {
      scroll_up.classList.remove("active");
    }
  }

  window.addEventListener("scroll", scrollAnimation);
}

getApi(API_URL);

const switch_mode = document.querySelector(".switch-mode");
const toggle = document.querySelector(".switch-mode .toggle");

switch_mode.addEventListener("click", () => {
  toggle.classList.toggle("active");
  document.body.classList.toggle("active");
});

const switch_opt = document.querySelectorAll(".switch-continent h3");

switch_opt.forEach((opt) => {
  opt.addEventListener("click", () => {
    removeActives();
    opt.classList.add("active");
  });
});

const removeActives = () => {
  switch_opt.forEach((opt) => {
    opt.classList.remove("active");
  });
};

const openMenu = document.querySelector(".open-menu");
const switch_continent = document.querySelector(".switch-continent");
const continents = document.querySelectorAll(".switch-continent h3");

openMenu.addEventListener("click", () => {
  openMenu.classList.toggle("active");
  switch_continent.classList.toggle("active");

  continents.forEach((continent) => {
    continent.addEventListener("click", () => {
      setTimeout(() => {
        openMenu.classList.remove("active");
        switch_continent.classList.remove("active");
      }, 300);
    });
  });
  main_content.addEventListener("click", () => {
    openMenu.classList.remove("active");
    switch_continent.classList.remove("active");
  });
});
