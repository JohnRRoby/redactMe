// redaction script. this works.

function init(){
  var replace = document.getElementsByClassName("redactMe");
  var box = "<img src = 'blackbar.png'>";
  //console.log(replace.length);
    for (index = 0; index < replace.length; ++ index){
      a = replace[index];
      a.innerHTML = box;
    }
}
window.onload = init;