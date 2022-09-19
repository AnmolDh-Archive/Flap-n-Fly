// Exit alert
function erralt() {
    alert("oops! Something went wrong.");
}

// Confirmation Alert (contact.html)
function confAlert(){
    if (confirm("Are you sure? You want to send this!") == true){
      if (document.getElementById("bug").checked == true){
        alert("Thank You! for reporting a bug.");
      } else{
        alert("Thank You! for your valuable Feedback!");
      }
    } else{
      alert("Looks like you Cancelled!");
    }
  }