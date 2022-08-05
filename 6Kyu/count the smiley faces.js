//return the total number of smiling faces in the array
function countSmileys(arr) {
    var smileys = [":)",";)",":-)",";-)",";~)",":~)",":D",";D",":-D",":~D",";-D",";~D"];
    var count = 0;
    
    for (var i=0; i<arr.length; i++){
      for (var j=0; j<smileys.length; j++){
        if (arr[i]===smileys[j]){
          count++;
        }
      }
      }
    return count;
    }

}

console.log(countSmileys([':D',':~)',';~D',':)']))