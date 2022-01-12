var visibleContent = "Home"

function showHome(){
  window.scrollTo(0, 0);
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


function showResume(){
  window.scrollTo(0, 0);
  var body = document.getElementsByClassName("body")
  var source = `
  <h1>Resume (in progress)</h1>
  `

  if(visibleContent != "Resume"){
    body[0].innerHTML = source
    visibleContent = "Resume"
  }
}


function showMyWork(){
  window.scrollTo(0, 0);
  var body = document.getElementsByClassName("body")
  var source = `
  <h1>My Work</h1>
  <div id="myWork">
    <div id="container">

      <div class="cardContainer" onclick="toggleProject(0)">
        <div id="card">
          <div class="projDescription">
            <p onclick="window.open('https://www.oliverredeyoff.com/')"><img src="Assets/webIcon.png"/> Link to website</p>
            <p onclick="window.open('https://github.com/Oliver-Redeyoff/personal')"><img src="Assets/github-logo.png"/> Link to github</p>
          </div>
          <div class="imgContainer"></div>
          <h2>This website</h2>
          <p>I made this personal website to display my resume and showcase
            some projects I have made</p>
        </div>
      </div>

      <div class="cardContainer" onclick="toggleProject(1)">
        <div id="card">
          <div class="projDescription">
            <p onclick="window.open('https://www.hacktheplug.tech/')"><img src="Assets/webIcon.png"/> Link to website</p>
            <p onclick="window.open('https://github.com/willcruse/hack-the-plug')"><img src="Assets/github-logo.png"/> Link to github</p>
          </div>
          <div class="imgContainer"></div>
          <h2>HackThePlug</h2>
          <p>This is a hackathon that I help organise, we are planning on
          holding it again next year in March.</p>
        </div>
      </div>

      <div class="cardContainer" onclick="toggleProject(2)">
        <div id="card">
          <div class="projDescription">
            <p onclick="window.open('https://oliver-redeyoff.github.io/Waste2O/')"><img src="Assets/webIcon.png"/> Link to website</p>
            <p onclick="window.open('https://github.com/Oliver-Redeyoff/Waste2O')"><img src="Assets/github-logo.png"/> Link to github</p>
          </div>
          <div class="imgContainer"></div>
          <h2>Waste20</h2>
          <p>A website I made which allows users to find alternative zero-waste
          products.</p>
        </div>
      </div>

      <div class="cardContainer" onclick="toggleProject(3)">
        <div id="card">
          <div class="projDescription">
            <p><img src="Assets/github-logo.png"/> Link to github</p>
          </div>
          <div class="imgContainer"></div>
          <h2>Gloscricket app</h2>
          <p>I designed an app for the Glocestershire Cricket club, allowing
            to see current news and some AR features.</p>
        </div>
      </div>

      <div class="cardContainer" onclick="toggleProject(4)">
        <div id="card">
          <div class="projDescription">
            <p onclick="window.open('https://oliver-redeyoff.github.io/studyTheSource/')"><img src="Assets/webIcon.png"/> Link to website</p>
            <p onclick="window.open('https://github.com/Oliver-Redeyoff/studyTheSource')"><img src="Assets/github-logo.png"/> Link to github</p>
          </div>
          <div class="imgContainer"></div>
          <h2>Study The Source</h2>
          <p>A website created to compare news articles on the same story from different sources.</p>
        </div>
      </div>

      <div id="github" onclick="window.open('https://github.com/Oliver-Redeyoff')">
        <img src="Assets/github-logo.png"/>
        <p>Link to my github</p>
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
  window.scrollTo(0, 0);
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

var showingProfile = false

function toggleSocial(){
  var style = getComputedStyle(document.body);
  var height = style.getPropertyValue('--header-height');
  console.log(height)

  var pic = document.getElementById("profilePic")
  var social = document.getElementById("socialContainer")

  if(showingProfile == false){
    pic.style.transform = "translateX(calc(260 * " + height +  "/120))"
    social.style.transform = "translateX(calc(260 * " + height +  "/120))"
    showingProfile = true
  } else {
    pic.style.transform = "translateX(0px)"
    social.style.transform = "translateX(0px)"
    showingProfile = false
  }
}


var showingExpandedMenu = false
function toggleMenu(){
  var menu = document.getElementById("expandableMenu")

  if(showingExpandedMenu){
    menu.style.right = "calc(-100% + 30px + var(--header-height) * 0.4)"
    showingExpandedMenu = false
  } else {
    menu.style.right = "-30px"
    showingExpandedMenu = true
  }
}


function toggleResumeView(){
  console.log("quit")
  if(document.getElementById("resumeViewHidden")){
    document.getElementById("resumeViewHidden").id = "resumeViewVisible"
  } else {
    document.getElementById("resumeViewVisible").id = "resumeViewHidden"
  }
}

function toggleProject(num){
  console.log("hello")
  var cards = document.getElementsByClassName("projDescription")
  console.log(cards)
  if(cards[num].style.marginTop != "0px"){
    cards[num].style.marginTop = "0px"
  } else {
    cards[num].style.marginTop = "-350px"
  }
}

function sendEmail(){
  var subj = document.getElementById("subject").value
  var body = document.getElementById("body").value.replace(/(\r\n|\n|\r)/gm,"%0D%0A")

  window.open("mailto:oliver.redeyoff@gmail.com?Subject=" + subj + "&body=" + body, "Contact Me", "width=600,height=600");
}
