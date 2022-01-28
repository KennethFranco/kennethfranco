var i = 0;
var txt = '<skills>'; /* The text */
var speed = 25; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }

}

function showFirst(){
  var initial = document.getElementById("initialExp");
  initial.style.display = "none";

  var x = document.getElementById("firstCompany");
  x.style.display = "block";

  var y = document.getElementById("secondCompany");
  y.style.display = "none";

  var z = document.getElementById("thirdCompany");
  z.style.display = "none";

  // var current = document.getElementById("currentCompany");
  // current.style.color =  "#04f06a";

  // var other1 = document.getElementById("currentCompany2");
  // other1.style.color =  "white";

  // var other2 = document.getElementById("currentCompany3");
  // other2.style.color =  "white";

  // var currentTab = document.getElementById("tabItem1");
  // currentTab.style.transition = "all 0.4s";
  // currentTab.style.borderLeft = "3px solid #04f06a"

  // var otherTab1 = document.getElementById("tabItem2");
  // otherTab1.style.transition = "all 0.4s";
  // otherTab1.style.borderLeft = "3px solid white";

  // var otherTab2 = document.getElementById("tabItem3");
  // otherTab2.style.transition = "all 0.4s";
  // otherTab2.style.borderLeft = "3px solid white";

  var currentTab = document.getElementById("tabItem1");
  currentTab.style.transition = "all 0.4s";
  currentTab.style.borderLeft = "4px solid #04f06a";
  currentTab.style.color = "#04f06a";
  currentTab.style.cursor = "default";

  var otherTab1 = document.getElementById("tabItem2");
  otherTab1.transition = "all 0.4s";
  otherTab1.style.borderLeft = "4px solid white";
  otherTab1.style.color = "white";
  otherTab1.style.cursor = "pointer";

  var otherTab2 = document.getElementById("tabItem3");
  otherTab2.transition = "all 0.4s";
  otherTab2.style.borderLeft = "4px solid white";
  otherTab2.style.color = "white";
  otherTab2.style.cursor = "pointer";

  var currentMobileTab = document.getElementById("tabItemSmall1");
  currentMobileTab.style.transition = "all 0.4s";
  currentMobileTab.style.borderBottom = "4px solid #04f06a";
  currentMobileTab.style.color = "#04f06a";
  currentMobileTab.style.cursor = "default";

  var otherMobileTab1 = document.getElementById("tabItemSmall2");
  otherMobileTab1.transition = "all 0.4s";
  otherMobileTab1.style.borderBottom = "4px solid white";
  otherMobileTab1.style.color = "white";
  otherMobileTab1.style.cursor = "pointer";

  var otherMobileTab2 = document.getElementById("tabItemSmall3");
  otherMobileTab2.transition = "all 0.4s";
  otherMobileTab2.style.borderBottom = "4px solid white";
  otherMobileTab2.style.color = "white";
  otherMobileTab2.style.cursor = "pointer";
}

function showSecond(){
  var initial = document.getElementById("initialExp");
  initial.style.display = "none";

  var x = document.getElementById("secondCompany");
  x.style.display = "block";

  var y = document.getElementById("firstCompany");
  y.style.display = "none";

  var z = document.getElementById("thirdCompany");
  z.style.display = "none";

  var currentTab = document.getElementById("tabItem2");
  currentTab.style.transition = "all 0.4s";
  currentTab.style.borderLeft = "4px solid #04f06a";
  currentTab.style.color = "#04f06a";
  currentTab.style.cursor = "default";

  var otherTab1 = document.getElementById("tabItem1");
  otherTab1.transition = "all 0.4s";
  otherTab1.style.borderLeft = "4px solid white";
  otherTab1.style.color = "white";
  otherTab1.style.cursor = "pointer";

  var otherTab2 = document.getElementById("tabItem3");
  otherTab2.transition = "all 0.4s";
  otherTab2.style.borderLeft = "4px solid white";
  otherTab2.style.color = "white";
  otherTab2.style.cursor = "pointer";

  var currentMobileTab = document.getElementById("tabItemSmall2");
  currentMobileTab.style.transition = "all 0.4s";
  currentMobileTab.style.borderBottom = "4px solid #04f06a";
  currentMobileTab.style.color = "#04f06a";
  currentMobileTab.style.cursor = "default";

  var otherMobileTab1 = document.getElementById("tabItemSmall1");
  otherMobileTab1.transition = "all 0.4s";
  otherMobileTab1.style.borderBottom = "4px solid white";
  otherMobileTab1.style.color = "white";
  otherMobileTab1.style.cursor = "pointer";

  var otherMobileTab2 = document.getElementById("tabItemSmall3");
  otherMobileTab2.transition = "all 0.4s";
  otherMobileTab2.style.borderBottom = "4px solid white";
  otherMobileTab2.style.color = "white";
  otherMobileTab2.style.cursor = "pointer";
}

function showThird(){
  var initial = document.getElementById("initialExp");
  initial.style.display = "none";

  var x = document.getElementById("thirdCompany");
  x.style.display = "block";

  var y = document.getElementById("secondCompany");
  y.style.display = "none";

  var z = document.getElementById("firstCompany");
  z.style.display = "none";

  // var current = document.getElementById("currentCompany3");
  // current.style.color =  "#04f06a";

  // var other1 = document.getElementById("currentCompany");
  // other1.style.color =  "white";

  // var other2 = document.getElementById("currentCompany2");
  // other2.style.color =  "white";

  // var currentTab = document.getElementById("tabItem3");
  // currentTab.style.transition = "all 0.4s";
  // currentTab.style.borderLeft = "3px solid #04f06a"

  // var otherTab1 = document.getElementById("tabItem1");
  // otherTab1.style.transition = "all 0.4s";
  // otherTab1.style.borderLeft = "3px solid white";

  // var otherTab2 = document.getElementById("tabItem2");
  // otherTab2.style.transition = "all 0.4s";
  // otherTab2.style.borderLeft = "3px solid white";

  var currentTab = document.getElementById("tabItem3");
  currentTab.style.transition = "all 0.4s";
  currentTab.style.borderLeft = "4px solid #04f06a";
  currentTab.style.color = "#04f06a";
  currentTab.style.cursor = "default";

  var otherTab1 = document.getElementById("tabItem2");
  otherTab1.transition = "all 0.4s";
  otherTab1.style.borderLeft = "4px solid white";
  otherTab1.style.color = "white";
  otherTab1.style.cursor = "pointer";

  var otherTab2 = document.getElementById("tabItem1");
  otherTab2.transition = "all 0.4s";
  otherTab2.style.borderLeft = "4px solid white";
  otherTab2.style.color = "white";
  otherTab2.style.cursor = "pointer";

  var currentMobileTab = document.getElementById("tabItemSmall3");
  currentMobileTab.style.transition = "all 0.4s";
  currentMobileTab.style.borderBottom = "4px solid #04f06a";
  currentMobileTab.style.color = "#04f06a";
  currentMobileTab.style.cursor = "default";

  var otherMobileTab1 = document.getElementById("tabItemSmall2");
  otherMobileTab1.transition = "all 0.4s";
  otherMobileTab1.style.borderBottom = "4px solid white";
  otherMobileTab1.style.color = "white";
  otherMobileTab1.style.cursor = "pointer";

  var otherMobileTab2 = document.getElementById("tabItemSmall1");
  otherMobileTab2.transition = "all 0.4s";
  otherMobileTab2.style.borderBottom = "4px solid white";
  otherMobileTab2.style.color = "white";
  otherMobileTab2.style.cursor = "pointer";
}