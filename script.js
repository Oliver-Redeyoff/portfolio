var visibleContent = "Home"

function showHome(){
  var body = document.getElementsByClassName("body")
  var source = `
  <h1>About me</h1>
  <div id="aboutMe">
    <div id="row">
      <div id="image">
        <img src="Assets/terminal.png"/>
      </div>
      <div id="spacer"></div>
      <div id="text">
        <p>I am a Computer-Science student, currently studying at the Univeristy
        of Bath. I am passionate about my subject and love to further my knowledge through
        pratical projects and research.</p>
      </div>
    </div>

    <div id="row">
      <div id="text">
        <p>I am currently completing the final year of my degree and am looking
          for a graduate position. You can view my work <a>here</a>, and can contact me <a>here</a>. </p>
      </div>
      <div id="spacer"></div>
      <div id="image">
        <img src="Assets/resume.png"/>
      </div>
    </div>
  </div>
  `

  if(visibleContent != "Home"){
    body[0].innerHTML = source
    visibleContent = "Home"
  }
}


function showMyWork(){
  var body = document.getElementsByClassName("body")
  var source = `
  <h1>My Work</h1>
  <div id="aboutMe">
    <div id="row">
      <div id="image">
        <img src="Assets/terminal.png"/>
      </div>
      <div id="spacer"></div>
      <div id="text">
        <p>I am a Computer-Science student, currently studying at the Univeristy
        of Bath. I am passionate about my subject and love to further my knowledge through
        pratical projects and research.</p>
      </div>
    </div>

    <div id="row">
      <div id="text">
        <p>I am currently completing the final year of my degree and am looking
          for a graduate position. You can view my work <a>here</a>, and can contact me <a>here</a>. </p>
      </div>
      <div id="spacer"></div>
      <div id="image">
        <img src="Assets/resume.png"/>
      </div>
    </div>
  </div>
  `

  if(visibleContent != "MyWork"){
    body[0].innerHTML = source
    visibleContent = "MyWork"
  }
}


function showContact(){
  var body = document.getElementsByClassName("body")
  var source = `
  <div id="contact">
    <h1>Contact me</h1>
    <input type="text" id="subject" placeholder="Subject"><br>
    <textarea id="body" placeholder="Message"></textarea>
  </div>
  `

  if(visibleContent != "Contact"){
    body[0].innerHTML = source
    visibleContent = "Contact"
  }
}
