// Accordion
var acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {

    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      var featureImage = document.getElementsByClassName('feature-image')[i];
      featureImage.style.opacity = '1';
      featureImage.style.transform = 'translate(-50%, -50%)';
    }

    // close other accordions
    var j;
    for (j = 0; j < acc.length; j++) {
      if (acc[j] != this) {
        acc[j].classList.remove("active");
        acc[j].nextElementSibling.style.maxHeight = null;
        var featureImage = document.getElementsByClassName('feature-image')[j];
        featureImage.style.opacity = '0';
        featureImage.style.transform = 'translate(-50%, 0)';
      }
    }
  });
}
acc[0].click();

// Start Progress Bar Animation
var progressBar = document.getElementsByClassName('progress-bar')[0];
var progressBarFill = document.getElementsByClassName('progress-bar-fill')[0];

var progressValue = 0;
var timer = null;
progressBarFill.style.width = '0%';
var playState = 'running';

function animateProgressBar() {
  if (timer) {
    clearTimeout(timer);
  }

  if (progressValue < 100 && playState != 'paused') {
    timer = setTimeout(function() {
      progressBarFill.style.width = progressValue + '%';
      progressValue += 0.05;
      animateProgressBar();
    }, 1);
  } else if (progressValue >= 100) {
    var j;
    var currentAccordion = document.getElementsByClassName('accordion active')[0];
    progressValue = 0;

    for (j = 0; j < acc.length; j++) {
      if (acc[j] == currentAccordion) {
        if (acc.length > j + 1) {
          acc[j + 1].click();
          animateProgressBar();
        } else {
          acc[0].click();
        }
      }
    }
  }
}

// Pause Progress Bar Animation on Hover
var featuresAccordion = document.getElementsByClassName('features-accordion')[0];
featuresAccordion.addEventListener('mouseover', function() {
  playState = 'paused';
});
featuresAccordion.addEventListener('mouseout', function() {
  playState = 'running';
  animateProgressBar();
});
featuresAccordion.addEventListener('click', function() {
  progressValue = 0;
  progressBarFill.style.width = progressValue + '%';
  animateProgressBar();
});

// Start Progress Bar Animation when Accordion is in view
var observer = new IntersectionObserver(function(entries) {
  if (entries[0].isIntersecting === true) {
    playState = 'running';
    animateProgressBar();
  } else {
    playState = 'paused';
  }
}, { threshold: [0] });
observer.observe(featuresAccordion);