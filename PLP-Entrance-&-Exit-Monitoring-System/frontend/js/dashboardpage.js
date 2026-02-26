// ========== LIVE DATE & TIME ==========
function updateClock(){
  const now = new Date();

  const dateOptions = { weekday:'long', year:'numeric', month:'long', day:'2-digit' };
  const timeOptions = { hour:'2-digit', minute:'2-digit', second:'2-digit' };

  document.getElementById("dateText").textContent = now.toLocaleDateString("en-US", dateOptions);
  document.getElementById("timeText").textContent = now.toLocaleTimeString("en-US", timeOptions);
}

updateClock();
setInterval(updateClock, 1000);


// ========== DATA PER TAB ==========
const dataSets = {
  today: { timeIn: 342, timeOut: 342, unreg: 7 },
  week:  { timeIn: 1980, timeOut: 1914, unreg: 31 },
  month: { timeIn: 7810, timeOut: 7692, unreg: 102 }
};


// ========== jQuery UI INTERACTIONS ==========
$(document).ready(function(){

  // Tabs (Today/Week/Month)
  $(".tab").on("click", function(){
    $(".tab").removeClass("active");
    $(this).addClass("active");

    const key = $(this).data("tab");
    const d = dataSets[key];

    // Animate number update
    animateValue("#timeInVal", d.timeIn);
    animateValue("#timeOutVal", d.timeOut);
    animateValue("#unregVal", d.unreg);
  });

  // Clear Alerts
  $("#clearAlerts").on("click", function(){
    $("#alertList").fadeOut(250, function(){
      $(this).html(`
        <div style="padding:14px; font-weight:900; opacity:.7;">
          No alerts right now.
        </div>
      `).fadeIn(200);
    });
  });

  // Hamburger toggle (sidebar show/hide for small screens)
  $(".hamburger").on("click", function(){
    $(".sidebar").toggleClass("show");
  });

});


// ========== Helper: Animate numbers ==========
function animateValue(selector, end){
  const $el = $(selector);
  const start = parseInt($el.text()) || 0;

  $({count: start}).animate({count: end}, {
    duration: 450,
    easing: "swing",
    step: function(){
      $el.text(Math.floor(this.count));
    },
    complete: function(){
      $el.text(end);
    }
  });
}
