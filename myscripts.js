window.onload = function() {
  // Nav Buttons
  var navButtons = document.querySelectorAll('nav > div > div')
  for (var i = 0; i < navButtons.length; i++) {
    var button = navButtons[i]
    button.onclick = function() {
      showSection(this)
    }
  }

  // Mouse On/Off
  var projects = document.querySelectorAll('#projects > div > a')
  for (var j = 0; j < projects.length; j++) {
    var project = projects[j]
    project.onmouseenter = function() {
      mouseOn(this)
    }
    project.onmouseleave = function() {
      mouseOff(this)
    }
  } 
}

// Nav Buttons
function showSection(element) {
  var id = element.textContent.toLowerCase()
  // If main: show all
  if (id === 'main') {
    // Remove all hidden sections
    var hiddens = document.querySelectorAll('section.hidden')
    for (var i = 0; i < hiddens.length; i++) {
      hiddens[i].classList.remove('hidden')
    }
  // If not main: show specific
  } else {
    // Remove all sections not specific id
    var sections = document.querySelectorAll(`section:not(#${id})`)
    for (i = 0; i < sections.length; i++) {
      var section = sections[i]
      section.classList.add('hidden')
    }
    // Add hidden to specific id
    document.querySelector(`section#${id}`).classList.remove('hidden')
  }

  // Grey Current Button 
  var currentButton = document.querySelector('.white-border')
  currentButton.classList.remove('white-border')
  // White Clicked Button
  element.classList.add('white-border')
}

// Mouse On/Off projects to reveal more details
function mouseOn(e) {
  e.classList.add('show')
}
function mouseOff(e) {
  e.classList.remove('show')
}

// Form Submitting
document.querySelector('#gform').addEventListener('submit', submit)
document.querySelector('#hidden_iframe').addEventListener('load', load)
var submitted = false
function submit() {
  submitted = true
}
function load() {
  if (submitted) {
    document.querySelector('#gform').classList.add('hidden')
    document.querySelector('#processed').classList.remove('hidden')
  }
}
