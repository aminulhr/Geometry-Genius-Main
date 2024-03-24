// get Triangle base
function areaclaculate(){
    basefield = document.getElementById('triangle-base');
    basefieldvalue = basefield.value;
    base = parseFloat(basefieldvalue);
    // console.log(base)

    // get Triangle Height  

    heightfield = document.getElementById('triangle-height');
    heightfieldvalue = heightfield.value;
    height = parseFloat(heightfieldvalue);
    // console.log(height);
    console.log(0.5*base*height);
}