window.dataLayer = window.dataLayer || [];
// ? Function to randomize the number of snow things
const container = document.querySelector('.wrapper');

function generateDiv() {
  const div = document.createElement('div');
  div.className = 'box';
  div.style.top = Math.floor(Math.random() * 100) + 'px';
  div.style.left = Math.floor(Math.random() * 100) + 'px';
  div.style.width = Math.floor(Math.random() * 100) + 'px';
  div.style.height = Math.floor(Math.random() * 100) + 'px';
  div.style.background = 'red';
  container.appendChild(div);
}
function onLoad() {
for (let i = 0; i < 100; i++) {
  generateDiv();
}
}
 
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-LLWL5N9CSM');
  function setInitialDate() {
            var countDownDate = new Date("Dec 31, 2023 00:00:00").getTime();
            localStorage.setItem('countDownDate', countDownDate);
        }

        // Function to get the remaining time from local storage
        function getRemainingTime() {
            var storedDate = localStorage.getItem('countDownDate');
            if (!storedDate) {
                setInitialDate();
                storedDate = localStorage.getItem('countDownDate');
            }
            return storedDate;
        }

        // Update the countdown every 1 second 
        var x = setInterval(function() {
            // Get the stored initial countdown date
            var countDownDate = getRemainingTime();

            // Get the current date and time
            var now = new Date().getTime();

            // Calculate the remaining time
            var distance = countDownDate - now;

            // Calculate days, hours, minutes, and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the countdown in the #countdown element
            document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

            // If the countdown is over, display a message
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("countdown").innerHTML = "EXPIRED";
            }
        }, 1000);