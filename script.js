var visibleContent = "Home"

function showHome(){
  var body = document.getElementsByClassName("body")
  var source = `
  <h1>About me</h1>
  <div id="aboutMe">

    <div id="text">
      <p>I am a Computer-Science student, currently studying at the University
      of Bath. I am passionate about my subject and love to further my knowledge through
      pratical projects and research.</p>
    </div>
    <div class="customButton" onclick="showMyWork()" onmouseover="appearMyWork()" onmouseleave="hideMyWork()">
      <img src="Assets/fileIcon.png"/>
      <p>View my work</p>
    </div>

    <div id="text">
      <p>I am currently completing the final year of my degree and am looking
        for a graduate position. You can view my Resume <a onclick="toggleResumeView()">here</a>, and can contact me <a onclick="showContact()">here</a>. </p>
    </div>
    <div class="customButton" onclick="toggleResumeView()" onmouseover="appearResume()" onmouseleave="hideResume()">
      <img src="Assets/personIcon.png"/>
      <p>View my Resume</p>
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
  <div id="myWork">
    <div id="container">

      <div class="cardContainer">
        <div id="card">
          <div class="imgContainer"></div>
          <h2>HackThePlug</h2>
          <p>This is a hackathon that I help organise, we are planning on
          holding it again next year in March.</p>
        </div>
      </div>

      <div class="cardContainer">
        <div id="card">
          <div class="imgContainer"></div>
          <h2>Waste20</h2>
          <p>A website I made which allows users to find alternative zero-waste
          products.</p>
        </div>
      </div>

      <div class="cardContainer">
        <div id="card">
          <div class="imgContainer"></div>
          <h2>Gloscricket app</h2>
          <p>I designed an app for the Glocestershire Cricket club, allowing
            to see current news and some AR features.</p>
        </div>
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
  <h1>Contact me</h1>
  <div id="contact">
    <input type="text" id="subject" placeholder="Subject"><br>
    <textarea id="body" placeholder="Message"></textarea><br>
    <div id="buttonWrapper" onclick="sendEmail()"><div id="button"><img src="Assets/arrow.png"/></div><a id="buttonText">Send Email</a></div>
  </div>
  `

  if(visibleContent != "Contact"){
    body[0].innerHTML = source
    visibleContent = "Contact"
  }
}


function hideMyWork(){
  document.getElementById('visible1').id = "hidden1"
}
function appearMyWork(){
  document.getElementById('hidden1').id = "visible1"
}

function hideResume(){
  document.getElementById('visible2').id = "hidden2"
}
function appearResume(){
  document.getElementById('hidden2').id = "visible2"
}

function toggleResumeView(){
  console.log("quit")
  if(document.getElementById("resumeViewHidden")){
    document.getElementById("resumeViewHidden").id = "resumeViewVisible"
  } else {
    document.getElementById("resumeViewVisible").id = "resumeViewHidden"
  }
}

function sendEmail(){
  var subj = document.getElementById("subject").value
  var body = document.getElementById("body").value.replace(/(\r\n|\n|\r)/gm,"%0D%0A")

  window.open("mailto:oliver.redeyoff@gmail.com?Subject=" + subj + "&body=" + body, "Contact Me", "width=600,height=600");
}
