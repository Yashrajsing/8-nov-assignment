let cylinder = {
    "height": 28, "radius":7 
}


function volumeOfCylinder(height, radius) {
    
    return (22 / 7) * radius * radius * height;      
}


function surfaceAreaOfCylinder(height, radius) {
   return (2 * (22 / 7) * radius * height) + (2 * (22 / 7) * radius * radius); 
}

var volume = volumeOfCylinder(cylinder.height, cylinder.radius);    
var surfaceArea = surfaceAreaOfCylinder(cylinder.height, cylinder.radius);   
console.log(volume,surfaceArea);  