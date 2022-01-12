var theme = "dark";

function detectTheme(){
    if(!window.matchMedia('(prefers-color-scheme: dark)').matches) {
        toggleTheme("light");
    }
}

function toggleTheme(set_theme){
  theme = set_theme;

  document.getElementById("dark_theme").className = theme=="dark" ? "active" : "inactive";
  document.getElementById("light_theme").className = theme=="light" ? "active" : "inactive";
  
  let root = document.documentElement;
  root.style.setProperty('--bg-color', theme=="dark" ? "0, 0, 0" : "240, 240, 240");
  root.style.setProperty('--text-color', theme=="dark" ? "240, 240, 240" : "0, 0, 0");
}

var content = `
<span id="a">OliverRedeyoff@VEGA</span>:<span id="b">~</span><span id="c">$</span> cd OliverRedeyoff/<!-- kjsdfhkjdhsfkjdshfkj -->About_Me
<span id="a">OliverRedeyoff@VEGA</span>:<span id="b">~</span><span id="c">$</span> cat <!-- kjsdfhkjdhsfkjdshfkj -->README.txt<br/><br/>

<p>Hey there! My name is <span id="b">Oliver Redeyoff</span>, and I am a passionate <span id="b">software developer</span>.</p>

<p>I am currently completing the final year of my <span id="b">Bachelor's in Computer Science</span> from the University of Bath.</p>

<p>You can find me on the internet here :<br>
      <a href="https://www.linkedin.com/in/oliver-redeyoff">Linkedin</a>
      <a href="https://github.com/Oliver-Redeyoff">Github</a>
      <a href="https://devpost.com/Oliver-Redeyoff">Devpost</a>
      <a href="https://stackoverflow.com/users/6123284/oliver-redeyoff">StackOverflow</a>
</p>

<p>Feel free to get in touch with me by sending an me an email at <a href="mailto: oliver.redeyoff@gmail.com">oliver.redeyoff@gmail.com</a>.</p>

<p>Thank you!</p>

<span id="a">OliverRedeyoff@VEGA</span>:<span id="b">~</span><span id="c">$</span> exit
`;

var Typer = {
  text: '',
  accessCountimer: null,
  index: 0,
  speed: 2,
  accessCount: 0,
  deniedCount: 0,
  init: function () {
    accessCountimer = setInterval(function () {
      Typer.updLstChr();
    }, 500);
    Typer.text = Typer.text.slice(0, Typer.text.length - 1);
  },

  content: function () {
    return $('#console').html();
  },

  write: function (str) {
    $('#console').append(str);
    return false;
  },

  addText: function (key) {
    if (key.keyCode == 18) {
      Typer.accessCount++;

      if (Typer.accessCount >= 3) {
        Typer.makeAccess();
      }
    } else if (key.keyCode == 20) {
      Typer.deniedCount++;

      if (Typer.deniedCount >= 3) {
        Typer.makeDenied();
      }
    } else if (key.keyCode == 27) {
      Typer.hidepop();
    } else if (Typer.text) {
      var cont = Typer.content();
      if (cont.substring(cont.length - 1, cont.length) == '|')
        $('#console').html(
          $('#console')
            .html()
            .substring(0, cont.length - 1),
        );
      if (key.keyCode != 8) {
        Typer.index += Typer.speed;
      } else {
        if (Typer.index > 0) Typer.index -= Typer.speed;
      }
      var text = Typer.text.substring(0, Typer.index);
      var rtn = new RegExp('\n', 'g');

      $('#console').html(text.replace(rtn, '<br/>'));
      window.scrollBy(0, 50);
    }

    if (key.preventDefault && key.keyCode != 122) {
      key.preventDefault();
    }

    if (key.keyCode != 122) {
      // otherway prevent keys default behavior
      key.returnValue = false;
    }
  },

  updLstChr: function () {
    var cont = this.content();

    if (cont.substring(cont.length - 1, cont.length) == '|')
      $('#console').html(
        $('#console')
          .html()
          .substring(0, cont.length - 1),
      );
    else this.write('|'); // else write it
  },
};

function replaceUrls(text) {
  var http = text.indexOf('http://');
  var space = text.indexOf('.me ', http);

  if (space != -1) {
    var url = text.slice(http, space - 1);
    return text.replace(url, '<a href="' + url + '">' + url + '</a>');
  } else {
    return text;
  }
}

Typer.speed = 5;
Typer.text = content;
Typer.init();

var timer = setInterval('t();', 30);
function t() {
  Typer.addText({ keyCode: 123748 });

  if (Typer.index > Typer.text.length) {
    clearInterval(timer);
  }
}
