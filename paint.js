var n = 7;
var height = 7;
var width = 7;

function wallPaint(n, height, width) {   
    
    var areaOfWall = height * width;
    
    if (areaOfWall % n == 0)          
        return areaOfWall / n;
    
    return (areaOfWall/n)+1;
}

var totalWallPaint = wallPaint(n, height, width);  

console.log(totalWallPaint);