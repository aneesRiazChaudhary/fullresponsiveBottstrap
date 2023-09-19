function myFunction() {
  var element = document.getElementById("search");
  if (element.style.display === "none") {
    element.style.display = "block";
    document.getElementById("search").style.animation =
      "dropDown 1.5s alternate 1";
  } else {
    element.style.display = "none";
  }
}


let btnn=document.getElementsByTagName('button');



for (let i = 0; i < btnn.length; i++) {
  btnn[i].style='background-color:blue;width:5rem;text-align:center';

  btnn[i].onmouseover = function (e) { 
    // console.log(e.target); 
    e.target.style='background-color:green;padding:1rem;margin:1rem;'

}

btnn[i].onmouseout = function (e) { 
  // console.log(e.target); 
  e.target.style='background-color:blue;width:5rem;text-align:center';

}


  
}









