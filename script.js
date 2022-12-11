(function(){

//Player Class
  class Player {
    constructor(pic, name, country, flag, club, logo, goals, foot, speed, shoot, passing) {
      this.pic = pic;
      this.name = name;
      this.country = country;
      this.flag = flag;
      this.club = club;
      this.logo = logo;
      this.goals = goals;
      this.foot = foot;
      this.speed = speed;
      this.shoot = shoot;
      this.passing = passing;
    }
    sayHello() {
      return `This is ${this.club}'s ${this.name} from ${this.country}`
    }
  }

//Ronaldo instance
  let ronaldo = new Player("images/ronaldo.jpg", "Ronaldo", "Portugal", "images/portugal.png", "Real Madrid", "images/realmadrid.png", 200, "both", 98, 95, 91);

//Messi instance
let messi = new Player("images/messi.jpg", "Messi", "Argentina", "images/argentina.jpg", "Barcelona", "images/barcelonafc.png", 190, "left", 97, 94, 95);

 //Ronaldo element population 
 document.querySelector(".pic-left").setAttribute("src", ronaldo.pic);
 document.querySelector(".name-left").textContent =  ronaldo.name;
 document.querySelector(".country-left").textContent =  ronaldo.country;
 document.querySelector(".flag-left").setAttribute("src", ronaldo.flag);
 document.querySelector(".club-left").textContent =  ronaldo.club;
 document.querySelector(".logo-left").setAttribute("src", ronaldo.logo);
 document.querySelector(".goals-left").textContent =  ronaldo.goals;
 document.querySelector(".foot-left").textContent =  ronaldo.foot;
 document.querySelector(".speed-left").textContent =  ronaldo.speed;
 document.querySelector(".shoot-left").textContent =  ronaldo.shoot;
 document.querySelector(".passing-left").textContent =  ronaldo.passing;
 document.querySelector(".hello-left").textContent =  ronaldo.sayHello();
  
//Messi element population 
document.querySelector(".pic-right").setAttribute("src", messi.pic);
document.querySelector(".name-right").textContent =  messi.name;
document.querySelector(".country-right").textContent =  messi.country;
document.querySelector(".flag-right").setAttribute("src", messi.flag);
document.querySelector(".club-right").textContent =  messi.club;
document.querySelector(".logo-right").setAttribute("src", messi.logo);
document.querySelector(".goals-right").textContent =  messi.goals;
document.querySelector(".foot-right").textContent =  messi.foot;
document.querySelector(".speed-right").textContent =  messi.speed;
document.querySelector(".shoot-right").textContent =  messi.shoot;
document.querySelector(".passing-right").textContent =  messi.passing;
document.querySelector(".hello-right").textContent =  messi.sayHello();
 
//H1 element population
document.querySelector("h1").textContent =  `${ronaldo.name} vs ${messi.name}`;

//Stadium Class
  class Stadium {
    constructor(day, night){
      this.day = day;
      this.night = night;
    }
  }

  let elClassico = new Stadium("images/stadiumday.jpg", "images/stadiumnight.jpg");

  //Time and date variables
 let day = new Date().getDate();
 let weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date().getDay()];
 let month = ['January',"February","March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][new Date().getMonth()];
 let year = new Date().getFullYear();
 let hour = new Date().getHours();
 document.querySelector(".calendar").textContent =  `${weekday}, ${day} ${month}, ${year}`;

  //background color decider
  if (hour > 5 && hour < 19) {
    document.querySelector("body").style.backgroundImage = `url(${elClassico.day})`;
   } else {
    document.querySelector("body").style.backgroundImage = `url(${elClassico.night})`;
   }

})();