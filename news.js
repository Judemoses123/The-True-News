//GRABBED ALL IMPORTANT ELEMENTS BY ID

//https://newsapi.org/v2/everything?q=Apple&from=2022-04-16&sortBy=popularity&apiKey=9e004ac5f8194b87957dec494c6451ac

let toop = "top-headlines";
let general = "general";
let business = "business";
let entertainment = "entertainment";
let health = "health";
let science = "science";
let sports = "sports";
let technology = "technology";

let list = document.getElementById("list");
let itemsul = document.getElementById("itemsul");
let itemsli = document.getElementsByClassName("itemsli");

// let Home = document.getElementById("Home");
// let Politics = document.getElementById("Politics");
// let Sports = document.getElementById("Sports");
// let Culture = document.getElementById("Culture");
// let Travel = document.getElementById("Travel");
// let Health = document.getElementById("Health");
// let Business = document.getElementById("Business");
// let Aboutus = document.getElementById("AboutUs");

title = document.getElementById("title");
let current = Home;

let date = new Date();
let day = date.getDay();
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
// console.log(day);

let weekDay = days[day];
let weekDate = date.getDate().toString();
let weekMonth = months[date.getMonth()];
// console.log(weekMonth);
// console.log(weekDate);
// console.log(weekDay);
// console.log(date);
let displayDate = weekDay + "," + " " + weekDate + " " + weekMonth;
// console.log(displayDate);

document.getElementById("date").innerHTML = displayDate;
//SET A VALUE CURRENT AS HOME AS DEFAULT AND KEEP CHANGING IT ON CLICK OF NAVBAR BUTTONS

//MADE EVENTLISTENERS FUNCTIONS TO CHANGE CURRENT AS THE SELECTED NAVBAR INDEX

Home.addEventListener("click", function () {
  title.innerText = this.innerHTML;
  current.classList.remove("active");
  current = Home;
  current.classList.add("active");

  request("in", "general");
});
Business.addEventListener("click", function () {
  title.innerText = this.innerHTML;
  current.classList.remove("active");
  current = Business;
  current.classList.add("active");

  request("in", "business");
});
Entertainment.addEventListener("click", function () {
  title.innerText = this.innerHTML;
  current.classList.remove("active");
  current = Entertainment;
  current.classList.add("active");

  request("in", "entertainment");
});
Health.addEventListener("click", function () {
  title.innerText = this.innerHTML;
  current.classList.remove("active");
  current = Health;
  current.classList.add("active");

  request("in", "health");
});
Science.addEventListener("click", function () {
  title.innerText = this.innerHTML;
  current.classList.remove("active");
  current = Science;
  current.classList.add("active");

  request("in", "science");
});
Sports.addEventListener("click", function () {
  title.innerText = this.innerHTML;
  current.classList.remove("active");
  current = Sports;
  current.classList.add("active");

  request("in", "sports");
});

Technology.addEventListener("click", function () {
  title.innerText = this.innerHTML;
  current.classList.remove("active");
  current = Technology;
  current.classList.add("active");

  request("in", "technology");
});

// xhr.open("GET","new.txt",true);
// let politics="Politics";

//GET https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=API_KEY

// xhr.open("GET",``,true);
// let country="us";
// category="general";
request("in", "general");
function request(country, category) {
  let xhr = new XMLHttpRequest();
  list.innerHTML = "";
  xhr.open(
    "GET",
    `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=9e004ac5f8194b87957dec494c6451ac`,
    true
  );
  xhr.getResponseHeader("Content-type", "application/json");
  xhr.onload = function () {
    if ((this.status = 200)) {
      let obj = JSON.parse(this.responseText);

      let content = obj.articles;
      console.log(content);
      for (key in content) {
        let object = content[key];
        let card = document.createElement("a");
        card.classList.add("news");
        card.setAttribute("href", object.url);
        document.getElementById("list").appendChild(card);
        let images = document.createElement("img");
        images.classList.add("imgl");
        // images.src=window.URL.createObjectURL(object.urlToImage);
        images.setAttribute("src", object.urlToImage);
        let news1 = document.createElement("div");
        news1.innerHTML = object.description;
        news1.classList.add("new");
        document.getElementById("list").children[key].appendChild(images);
        document.getElementById("list").children[key].appendChild(news1);
      }
      let stus = "ok";
      console.log(obj);
      console.log(stus);
    } else {
      let stus = "error";
      console.log(stus);
    }
    // console.clear();
  };
  xhr.send();
  // console.log(document.getElementById('list').children[5]);
}
request2("us", "general");

function request2(country, category) {
  let xhttp = new XMLHttpRequest();
  list.innerHTML = "";
  xhttp.open(
    "GET",
    `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=9e004ac5f8194b87957dec494c6451ac`,
    true
  );
  xhttp.getResponseHeader("Content-type", "application/json");
  xhttp.onload = function () {
    if ((this.status = 200)) {
      let obj = JSON.parse(this.responseText);

      let content = obj.articles;
      console.log(content);
      for (key in content) {
        let object = content[key];
        let card = document.createElement("a");
        card.classList.add("newsint");
        card.setAttribute("href", object.url);
        document.getElementById("listr").appendChild(card);
        let images = document.createElement("img");
        images.classList.add("rimg");
        // images.src=window.URL.createObjectURL(object.urlToImage);
        images.setAttribute("src", object.urlToImage);
        let news1 = document.createElement("div");
        news1.innerHTML = object.description;
        news1.classList.add("rnews");
        document.getElementById("listr").children[key].appendChild(images);
        document.getElementById("listr").children[key].appendChild(news1);
      }
      let stus = "ok";
      console.log(obj);
      console.log(stus);
    } else {
      let stus = "error";
      console.log(stus);
    }
    // console.clear();
  };
  xhttp.send();
  // console.log(document.getElementById('list').children[5]);
}
// setTimeout(() => {
//   console.clear();
// }, 5000);