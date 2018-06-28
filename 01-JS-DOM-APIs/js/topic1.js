
function fadeInOnLoad(){  //fade in "Hello World" on load.
    setInterval( function() {
      let element = document.getElementById("hide");
      element.classList.remove("hidden");
    },500);
  }

function getData() {    //Get random joke form API
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if(xhr.readyState == 4 && xhr.status==200)
    {
      console.log("received the response", xhr.responseText);
      let response = JSON.parse(xhr.response);
      document.getElementById("joke").innerHTML = response.value.joke;
    } else {
        console.log("error in processing the request");
    }
  }
  xhr.open("GET","http://api.icndb.com/jokes/random",true);
  xhr.send();
}

//  info source = https://medium.com/front-end-hacking/ajax-async-callback-promise-e98f8074ebd7
function getJokePromise(){   //Get random joke from API
  var URL = "http://api.icndb.com/jokes/random"
	makeAjaxCall(URL,"GET").then(renderJoke,errorHandler);
}

function renderJoke(jokeData){  //Send joke data to html
  document.getElementById("joke").innerHTML = jokeData.value.joke;
}

function makeAjaxCall(url, methodType){   // Reusable function to perform AJAX calls.
   let promiseObj = new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();
      xhr.open(methodType, url, true);
      xhr.send();
      xhr.onreadystatechange = function(){
      if (xhr.readyState === 4){
         if (xhr.status === 200){
            console.log("xhr done successfully");
            let resp = xhr.responseText;
            let respJson = JSON.parse(resp);
            resolve(respJson);
         } else {
            reject(xhr.status);
            console.log("xhr failed");
         }
      } else {
         console.log("xhr processing going on");
      }
   }
   console.log("request sent succesfully");
 });
 return promiseObj;
}

function errorHandler(statusCode){   //Show  'jokeContainer' section background in red when a server error occurs.
	document.getElementById('jokeContainer').element.style.backgroundColor = "red";
}

function search(){    //Get data from github repositories API so the user can perform search for any repository.
    let search = document.getElementById("Search");
    let url = "https://api.github.com/search/repositories?q=javascript";
    url += "?q="+ search.value;

    makeAjaxCall(url,"GET").then(renderGitHub,errorHandler);
	}

function renderGitHub(gitData){ //Send data from github repositories API to HTML.
  let list = document.getElementById("list");
  for (let repo of gitData.items){
    let repoName = document.createElement('li');
    repoName.innerHTML = repo.full_name;
    list.appendChild(repoName);
  }
}
