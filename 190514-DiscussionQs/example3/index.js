document.addEventListener('DOMContentLoaded',function(){
  const button = document.getElementById("notify")
  button.addEventListener('mouseover', function(){
    console.log("Printing a Message!")
  })
})

//unless "AddEventListener#DOMContentLoaded" is called, the content of the js file is not executed 
