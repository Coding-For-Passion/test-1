var nims = 21;
var yourTurn = true;
firstTurn = confirm("Would you like to go first?");
if (firstTurn == true) {
  yourTurn = true;
}
if (firstTurn == false) {
  document.getElementById("nims").innerHTML = "Nims Remaining: 20"
  yourTurn = true;
}
function play() {
  if (nims == 0) {
    document.getElementById("nims").innerHTML = "You Win!!"
  } else {
    if (yourTurn == true) {
      nims -= document.getElementById("select").value; 
      document.getElementById("nims").innerHTML = "Nims Remaining: " + nims;
      yourTurn = false; 
      setTimeout(AI, 2000);
    } else {
      alert("It isn't your turn yet!!"); 
    }
  }
}

function AI() {
  if (nims % 4 == 0) {
    nims -= Math.floor(Math.random() * 3) + 1;
  } else {
    nims -= (nims % 4); 
  }
  if (nims > 0) {
  document.getElementById("nims").innerHTML = "Nims Remaining: " + nims;}
  else if (nims == 0) {
    document.getElementById("nims").innerHTML = "You Lose!!"
    var con = confirm("Would you like to play again?")
    if (con == false) {
    location.replace('../Homepage/homepage.html');
    }
    if (con == true) {
    location.replace('nim.html');
    }
  } else if (nims < 0) {
    document.getElementById("nims").innerHTML = "You Win!!"
    var con = confirm("Would you like to play again?")
    if (con == false) {
    location.replace('../Homepage/homepage.html');
    }
    if (con == true) {
    location.replace('nim.html');
    }
  }
  yourTurn = true;
}
