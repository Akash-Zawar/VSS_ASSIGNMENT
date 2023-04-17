/** compare password and confirmpassword
 * Search for uppercase, lowercase, numerical and special character
 * check for length of string
 *
 */

document.addEventListener("DOMContentLoaded", function (e) {
    const _submitButton = document.getElementById("submitButton");
    console.log(_submitButton);
    _submitButton.addEventListener("click", () => {
      const _passwordElem = document.getElementById("pass1");
      const _confirmPasswordElem = document.getElementById("pass2");
  
      const _password = _passwordElem.value;
      const _confirmPassword = _confirmPasswordElem.value;
  
      console.log(_password);
      console.log(_confirmPassword);
      const cL = checkLength(_password);
      const com = compare(_password,_confirmPassword);
      const cUc = checkUpperCase(_password);
      const cLc = checkLowerCase(_password);
      const cNum = checkNumber(_password);
      const cSc = checkSpecialCharacter(_password);   
        changeImage(cLc,"img1");
        changeImage(cSc,"img2");
        changeImage(cUc,"img3");
        changeImage(cL,"img4");
        changeImage(cNum,"img5");
    });
  });
  
  function compare(a,b){
      if (a==b) {
          console.log("Passwords are same"); 
          return true;
      }
       console.log("Error, password and confirm password must be same");
       return false;
      }
  
  function checkLength(a){
      if(a.length>=8){
          console.log("Minimun length satisfied"); 
          return true;
      }
      console.log("Password must contain atleast 8 characters");
      return false;
  }
  
  function checkUpperCase(a){
      const match = a.search(/[A-Z]/) == '-1' ? false : true;
      if (match) {
          console.log("contains Upper case letter");
      return true;
      }
      console.log("must contain a Upper case Letter");
      return false;
  }
  
  function checkLowerCase(a){
      const match = a.search(/[a-z]/) == '-1' ? false : true;
      if (match) {
          console.log("contains Lower case letter");
      return true;
      }
      console.log("must contain a Lower case Letter");
      return false;
  }
  
  function checkNumber(a){
      const match = a.search(/[0-9]/) == '-1' ? false : true;
      if (match) {
          console.log("contains Number");
      return true;
      }
      console.log("must contain Number");
      return false;
  }
  
  // /!@#\$%\^\&*\)\(+=._-]+$/ regex for checking special character
  
  function checkSpecialCharacter(a){
      const regex = /[!@#$%^&*(),.?":{}|<>]/;
      const match = a.search(regex) == '-1' ? false : true;
      if (match) {
          console.log("contains Special Character");
      return true;
      }
      console.log("must contain a Special Character");
      return false;
  }

  function changeImage(a,id) {
    var image = document.getElementById(id);
    if (a) {
      image.src = "./asset/image/right-tick.png";
      return;
    } else {
      image.src = "./asset/image/red-cross.png";
      return;
    }
  }