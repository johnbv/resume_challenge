// Animations
AOS.init({
  anchorPlacement: 'top-left',
  duration: 1000
});

// Add your javascript here

function websiteVisits(response) {
  document.querySelector("#visits").textContent = response.value;
}
