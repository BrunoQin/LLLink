  var link = document.getElementsByTagName('a');
  alert("aassa");
  var str = '';
  var result_1 = new Array();
  var result_2 = new Array();
  var result_3 = new Array();
  for (var i = 0; i < link.length; i++){
    if (link[i].attributes['href'] != null){
      str =  link[i].attributes['href'].value;
      if (str != null){
        var s0 = str.charAt(0);
        var s1 = str.charAt(str.length - 1);
        var s2 = str.charAt(str.length - 2);
        var s3 = str.charAt(str.length - 3);
        var s4 = str.charAt(str.length - 4);
        if(!(s1 == '\/' || s1 == '#' || s1 == ';' || s0 == '#' || s0 == '\/' || s1 == ')' || s1 == 'l' || s1 == 'm' || (s1 == 'p' && s2 == 'h' && s3 == 'p') || (s1 == 'p' && s2 == 's' && s3 == 'j') || (s1 == 'p' && s2 == 's' && s3 == 'a'))){
          if((s1 == 'e' && s2 == 'x' && s3 == 'e' && s4 == '.') || (s1 == 'p' && s2 == 'i' && s3 == 'z' && s4 == '.') || (s1 == 'g' && s2 == 'm' && s3 == 'd' && s4 == '.') || (s1 == 'z' && s2 == 't' && s3 == '.') || (s1 == 'z' && s2 == 'g' && s3 == '.')){
            result_1.push(str);
          } else if(str.toLowerCase().indexOf('download') > 0 || str.toLowerCase().indexOf('xiazai') > 0){
            result_2.push(str);
          } else if(str.toLowerCase().indexOf('down') > 0 || str.toLowerCase().indexOf('route') > 0){
            result_3.push(str);
          }
        }
      }
    }
  }

chrome.runtime.sendMessage({res_1: result_1,res_2: result_2,res_3: result_3}, function(response) {  console.log("ewewe"); });
