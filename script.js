document.addEventListener("DOMContentLoaded", () => {
  const currtime = document.querySelector(".curr-time");
  const greeting = document.querySelector(".greetings");

  function time() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let year = now.getFullYear();

    document.getElementById("fullYear").innerHTML = `${year}`

    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
    currtime.innerText = formattedTime;

    let greetMsg;
    if (hours < 12) {
      greetMsg = "Good Morning!";
    } else if (hours >=12 && hours < 16) {
      greetMsg = "Good Afternoon!";
    }
     else if(hours >= 16 && hours < 20) {
      greetMsg = "Good Evening!";
    }
    else{
      greetMsg = "Good Night!";
    }
    greeting.innerText = greetMsg;
  }

  time();
  setInterval(time, 60000);
});

