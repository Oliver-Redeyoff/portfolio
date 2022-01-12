var theme = "dark";

function detectTheme(){
    if(!window.matchMedia('(prefers-color-scheme: dark)').matches) {
        toggleTheme();
    }
}

var themeColors = {
    "dark": {
        bg_color: "rgba(0, 0, 0)",
        box_bg_color: "rgba(26, 26, 26)",
        box_default_text_color: "white",
        content_bg_color: "rgba(26, 26, 26)",
        content_header_bg_color: "rgba(255, 255, 255, 0.08)",
        content_default_text_color: "white"
    },
    "light": {
        bg_color: "rgba(240, 240, 240)",
        box_bg_color: "rgba(200, 200, 200)",
        box_default_text_color: "black",
        content_bg_color: "rgb(240, 240, 240)",
        content_header_bg_color: "rgba(0, 0, 0, 0.08)",
        content_default_text_color: "black"
    }
}

function selectWidget(id_name) {
    
    //document.getElementById("content").innerHTML = sections[id_name];

    var all = document.getElementsByClassName('box');
    translateBox(all, 0, '-100vh');
    setTimeout(() => {document.getElementById("content-container").style.transform = "translateY(-100vh)";}, 500);
}

function translateBox(all, i, value) {
    //all[i].style.transition = "all 1s";
    all[i].style.transform = "translateY(" + value + ")";
    if(i < all.length-1){
        setTimeout(() => {translateBox(all, i+1, value)}, 20);
    }
}
function translateBoxReverse(all, i, value) {
    //all[i].style.transition = "all 1s";
    all[i].style.transform = "translateY(" + value + ")";
    if(i >= 0){
        setTimeout(() => {translateBoxReverse(all, i-1, value)}, 20);
    }
}

function returnMenu() {
    var all = document.getElementsByClassName('box');
    console.log(all.length);
    translateBoxReverse(all, all.length-1, '0vh')
    document.getElementById("content-container").style.transform = "translateY(0vh)";
}

function toggleTheme(){
    theme = theme=="dark" ? "light" : "dark";

    document.getElementById("dark_theme").className = theme=="dark" ? "active" : "inactive";
    document.getElementById("light_theme").className = theme=="light" ? "active" : "inactive";
    
    let root = document.documentElement;
    root.style.setProperty('--background-color', themeColors[theme].bg_color);
    root.style.setProperty('--box-background-color', themeColors[theme].box_bg_color);
    root.style.setProperty('--box-default-text-color', themeColors[theme].box_default_text_color);
    root.style.setProperty('--content-background-color', themeColors[theme].content_bg_color);
    root.style.setProperty('--content-header-background-color', themeColors[theme].content_header_bg_color);
    root.style.setProperty('--content-default-text-color', themeColors[theme].content_default_text_color);
}