// prevent form from being submitted
document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault()
  });

document.getElementById("submit").addEventListener("click", namedFunction);

function namedFunction() { 
    console.log("test");
};
