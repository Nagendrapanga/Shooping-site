
if(localStorage.getItem("currentuser")){
    alert("you have already logged in");
      setTimeout(()=>{
      window.location.href  ="./profile/myprofile.html";
     },1000);
}