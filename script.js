(function(){

//Ronaldo object
  let player = {
  name: "Ronaldo",
  playerImage: "images/ronaldo.jpg",
  countryFlag: "images/portugal.png",
  club: "images/realmadrid.png",
  stadiumDay: "images/stadiumday.jpg",
  stadiumNight: "images/stadiumnight.jpg",
  goals: 200,
  foot: "both",
  speed: 98,
  shoot: 95,
  passing: 91,
  sayHello() {
    return `This is ${this.name} from Portugal`
  }
 }

 //Messi object
 let messi = {
  name: "Messi",
  playerImage: "images/messi.jpg",
  countryFlag: "images/argentina.jpg",
  club: "images/barcelonafc.png",
  goals: 190,
  foot: "left",
  speed: 97,
  shoot: 94,
  passing: 95,
  sayHello() {
    return `This is ${this.name} from Argentina`
  }
 }

 //Time and date variables
 let day = new Date().getDate();
 let weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date().getDay()];
 let month = ['January',"February","March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][new Date().getMonth()];
 let year = new Date().getFullYear();
 let hour = new Date().getHours();
 document.querySelector(".calendar").textContent =  `${weekday}, ${day} ${month}, ${year}`;

 //background color decider
 if (hour > 5 && hour < 19) {
  document.querySelector("body").style.backgroundImage = `url(${player.stadiumDay})`;
 } else {
  document.querySelector("body").style.backgroundImage = `url(${player.stadiumNight})`;
 }

 //element population Ronaldo
 document.querySelector(".hello-left").textContent =  player.sayHello();
 document.querySelector(".name-left").textContent =  player.name;
 document.querySelector(".pic-left").setAttribute("src", player.playerImage);
 document.querySelector(".country-left").setAttribute("src", player.countryFlag);
 document.querySelector(".club-left").setAttribute("src", player.club);
 document.querySelector(".goals-left").textContent =  player.goals;
 document.querySelector(".foot-left").textContent =  player.foot;
 document.querySelector(".speed-left").textContent =  player.speed;
 document.querySelector(".shoot-left").textContent =  player.shoot;
 document.querySelector(".passing-left").textContent =  player.passing;

  //element population Messi
 document.querySelector(".hello-right").textContent =  messi.sayHello();
 document.querySelector(".name-right").textContent =  messi.name;
 document.querySelector(".pic-right").setAttribute("src", messi.playerImage);
 document.querySelector(".country-right").setAttribute("src", messi.countryFlag);
 document.querySelector(".club-right").setAttribute("src", messi.club);
 document.querySelector(".goals-right").textContent =  messi.goals;
 document.querySelector(".foot-right").textContent =  messi.foot;
 document.querySelector(".speed-right").textContent =  messi.speed;
 document.querySelector(".shoot-right").textContent =  messi.shoot;
 document.querySelector(".passing-right").textContent =  messi.passing;
})();