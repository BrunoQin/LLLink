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

});
