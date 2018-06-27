

function fadeInOnLoad(){

    var element = document.getElementById("hide");
    element.classList.remove("hidden");

  };

// function setup()
// {
//   loadJSON('http://api.icndb.com/jokes/random',getJoke,'jsonp');
// }
//
// function getJoke(data) {
//   alert(data.value.joke);
// }
//

function getData() {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if(xhr.readyState == 4 && xhr.status==200)
    {
      var response = JSON.parse(xhr.response);
      document.getElementById("joke").innerHTML = response.value.joke;
    }
  }
  xhr.open("GET","http://api.icndb.com/jokes/random",true);
  xhr.send();
}
