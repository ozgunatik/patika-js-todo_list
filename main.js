const inputBox = document.getElementById("ad");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".footer button");


let getLocalStorage = localStorage.getItem('task') ? JSON.parse(localStorage.getItem('task')) : [];
let listArray = [] ; 
showTasks()


addBtn.addEventListener('click',function(){
  
  console.log(getLocalStorage)
  listArray.push(inputBox.value);
  localStorage.setItem("task",JSON.stringify(listArray));
  showTasks()
});


let newLiTag = "";
listArray.forEach((element, index) => {
  newLiTag += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><i class="fa fa-trash"></i></span></li>`;
});
todoList.innerHTML = newLiTag; // ul'e li tag ekler
inputBox.value = ""; // giriş yapıldıktan sonra girişin silinmesi için



//ul'e liste ekleme func.
function showTasks() {
  let getLocalStorage = localStorage.getItem("task");
  if (getLocalStorage == null) {
    listArray = [];
  } else {
    listArray = JSON.parse(getLocalStorage); //json string'i bir js nesnesine dönüştürme
  }

  const pendingNumb = document.querySelector(".pendingNumber");
  pendingNumb.textContent = listArray.length;
  if (listArray.length > 0) {
    deleteAllBtn.classList.add("active");
  } else {
    deleteAllBtn.classList.remove("active");
  }

  let newLiTag = "";
  listArray.forEach((element, index) => {
    newLiTag += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><i class="fa fa-trash"></i></span></li>`;
  });
  todoList.innerHTML = newLiTag; // ul'e li tag ekler
  inputBox.value = ""; // giriş yapıldıktan sonra girişin silinmesi için
}

function deleteTask(getID)
{
  
  listArray.splice(getID, 1); // bu li'yi sil
console.log(listArray);
  //li'yi kaldırınca localstorage'da da güncelle
  localStorage.setItem("task", JSON.stringify(listArray));
  console.log("Silindi");  showTasks();
}