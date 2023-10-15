 
 
 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyDIg-jeIe4XMhUX2cqeV0gKtkwDuBrOBd8",
    authDomain: "to-dolist-clouddb.firebaseapp.com",
    databaseURL: "https://to-dolist-clouddb-default-rtdb.firebaseio.com",
    projectId: "to-dolist-clouddb",
    storageBucket: "to-dolist-clouddb.appspot.com",
    messagingSenderId: "622342421465",
    appId: "1:622342421465:web:eda6e162aa0aac46a2b7c8"
  };

  //initialize firebase
  firebase.initializeApp(firebaseConfig);


  //reference your database
  var toDoDB = firebase.database().ref("to-dolist-cloudDB");

  document.getElementById("input-box-id", "list-container").addEventListener("click", submitTask);

  function submitTask(e){
    e.preventDefault();

    var task = getElementVal('task');

    console.log(task);
  }

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };


const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }else{
        let li = document.createElement("li");
        li.setAttribute("id", "task");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    // clear to-do list input
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// save task data to local storage
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();