
document.addEventListener('DOMContentLoaded', function() {
  var data=chrome.extension.getBackgroundPage().myRes1;
  var pNode = document.getElementById('ul_1');
  data = unique(data);
  for (var i = 0; i < data.length; i++){
    var cNode = document.createElement("li");
    var aNode = document.createElement("a");
    aNode.href = data[i];
    aNode.innerHTML = data[i];
    pNode.appendChild(cNode);
    cNode.appendChild(aNode);
  }

  data=chrome.extension.getBackgroundPage().myRes2;
  pNode = document.getElementById('ul_2');
  data = unique(data);
  for (var i = 0; i < data.length; i++){
    var cNode = document.createElement("li");
    var aNode = document.createElement("a");
    aNode.href = data[i];
    aNode.innerHTML = data[i];
    pNode.appendChild(cNode);
    cNode.appendChild(aNode);
  }

  data=chrome.extension.getBackgroundPage().myRes3;
  pNode = document.getElementById('ul_3');
  data = unique(data);
  for (var i = 0; i < data.length; i++){
    var cNode = document.createElement("li");
    var aNode = document.createElement("a");
    aNode.href = data[i];
    aNode.innerHTML = data[i];
    pNode.appendChild(cNode);
    cNode.appendChild(aNode);
  }
});

function unique(arr) {
    var result = [], hash = {};
    for (var i = 0, elem; (elem = arr[i]) != null; i++) {
        if (!hash[elem]) {
            result.push(elem);
            hash[elem] = true;
        }
    }
    return result;
}
