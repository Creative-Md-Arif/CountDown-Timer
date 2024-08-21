

function updateCountdown(){
      const targetDate = new Date("2024-08-31T23:59:59");// Set your target date here
      const now = new Date();
      const timeDiff = targetDate - now;

      if(timeDiff <= 0 ){
            document.getElementById("days").textContent = "00";
            document.getElementById("hours").textContent = "00";
            document.getElementById("mins").textContent = "00";
            document.getElementById("secs").textContent = "00";
            return
      }

      const days = Math.floor(timeDiff/ (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60 ));
      const secs = Math.floor((timeDiff % (1000 * 60)) / 1000 );

      document.getElementById("days").textContent = String(days).padStart(2, "0");
      document.getElementById("hours").textContent = String(hours).padStart(2, "0");
      document.getElementById("mins").textContent = String(mins).padStart(2, "0");
      document.getElementById("secs").textContent = String(secs).padStart(2, "0");

}

setInterval(updateCountdown, 1000); // Update every second