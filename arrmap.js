var myImages=["baby2.jpg","baby3.jpg","baby4.jpg"];
var myObj=['{"Monday":"asdh","Tuesday":"kdjfkdf","Wednesday":"skdhfjhsdf"}',
'{"Monday":"asdh1","Tuesday":"kdjfkdf","Wednesday":"skdhfjhsdf"}',
'{"Monday":"asdh2","Tuesday":"kdjfkdf","Wednesday":"skdhfjhsdf"}'];
function myFunc()
{
  var mynamearr = Array.prototype.slice.call(document.getElementsByTagName("td"));
  mynamearr.map(function(myNode,index){
    myNode.innerHTML="<img src="+myImages[index]+">";
});
}
function myJson()
{
  //var myObjJ=Array.prototype.slice.call(myObj);
  myObj.map(function(myNode,index){
    myJsonObj=JSON.parse(myNode);
    document.write(myJsonObj.Monday+" "+myJsonObj.Tuesday+" "+myJsonObj.Wednesday);
  });
}
  function arrmaptry()
  {
    var myname = document.getElementsByName("fig");
    var mynamearr = Array.prototype.slice.call(myname);
    mynamearr.map(function(mynode){
      mynode.innerHTML="Hello";
    });
  }

  /*function schedule()
  {
    var users={User1: obj2
      obj2={ "Blues + Charged - Meeting + Wednesday: Code + Thursday=Study Friday=Hurray... Weekend"};
    var myname = document.getElementsByName("week");
    var mynamearr = Array.prototype.slice.call(myname);
  //  var user1arr=Array.prtotype.slice.call(user1);

    mynamearr.map(function(mynode){
      mynode.innerHTML= users.User1;
    });
  }*/
