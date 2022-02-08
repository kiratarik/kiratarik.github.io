window.onload = function() {
  // Nav Buttons
  var navButtons = document.querySelectorAll('nav > div > div')
  for (var i = 0; i < navButtons.length; i++) {
    var button = navButtons[i]
    button.onclick = function() {
      showSection(this)
    }
  }

  //  Links
  var links = document.querySelectorAll('a')
  for (var j = 0; j < links.length; j++) {
    var link = links[j]
    link.target = '_blank'
    link.rel = 'noopener noreferrer'
  } 

  // Projects
  var projects = document.querySelectorAll('#projects > div > div')
  for (var k = 0; k < projects.length; k++) {
    var project = projects[k]
    project.onclick = function(event) {
      console.log('project click',event.target.tagName.toLowerCase())
      if (event.target.tagName.toLowerCase() !== 'a') {
        click(this)
      }
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

// OnClick projects to reveal more details
function click(e) {
  e.classList.toggle('show')
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
