document.addEventListener("DOMContentLoaded", function(){  //changed AddListenerEvent to AddEventListener
  const button = document.getElementById("notifiable") //changed "notaflyable" to "notifiable"
  button.addEventListener('click', function(){ //changed AddListenerEvent to AddEventListener
    console.log("Printing a Message!")
  })
});
