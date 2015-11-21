var myRes1={};
var myRes2={};
var myRes3={};

chrome.runtime.onMessage.addListener(  function(request, sender, sendResponse) {
  console.log(sender.tab ?  "from a content script:" + sender.tab.url : "from the extension");
  console.log(request.res_1);
  console.log(request.res_2);
  console.log(request.res_3);
  myRes1=request.res_1;
  myRes2=request.res_2;
  myRes3=request.res_3;
  console.log(myRes1);
  console.log(myRes2);
  console.log(myRes3);

  // // var pNode = document.getElementById('ul_1');
  // for (var i = 0; i < request.res_1.length; i++){
  //   var cNode = document.createElement("p");
  //   cNode.innerHTML = request.res_1[i];
  //   pNode.appendChild(cNode);
  // }
  //
  // //var pNode = document.getElementById('ul_2');
  // for (var i = 0; i < request.res_2.length; i++){
  //   var cNode = document.createElement("p");
  //   cNode.innerHTML = request.res_2[i];
  //   pNode.appendChild(cNode);
  // }
  //
  // //var pNode = document.getElementById('ul_3');
  // for (var i = 0; i < request.res_3.length; i++){
  //   var cNode = document.createElement("p");
  //   cNode.innerHTML = request.res_1[i];
  //   pNode.appendChild(cNode);
  // }

});
