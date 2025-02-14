// Set the date we're counting down to
const countDownDate = new Date("Dec 14, 2021 14:00:00").getTime();

// Update the count down every 1 second
const x = setInterval(function () {
  // Get today's date and time
  const now = new Date().getTime();

  // Find the distance between now and the count down date
  const distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById(
    "count"
  ).innerHTML = `Det er <strong>${days}</strong> dager, <strong>${hours}</strong> timer, <strong>${minutes}</strong> minutter og <strong>${seconds}</strong> sekunder igjen.`;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("count").innerHTML =
      "Nå bør du ha levert, ass. <br/>Fristen er ute.<br/> God jul! 🎅🎄🎁";
  }
}, 1000);
