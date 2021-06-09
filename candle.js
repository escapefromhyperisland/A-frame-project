function hide() {
    let x = document.getElementById('hide-div')
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
AFRAME.registerComponent('cursor-listener', {
    init: function () {
this.el.addEventListener('click', function (evt) {
let hallMonster=document.getElementById("hall-monster-1");
hallMonster.setAttribute('position', {x: 11.309, y: -0.098, z: 17.683});
let hallMonster2=document.getElementById("hall-monster-2");
hallMonster2.setAttribute('position', {x: 0.883, y: 0.000, z: 17.401});
let candle=document.getElementById("c");
candle.setAttribute('visible','false')
let text=document.getElementById("test");
text.setAttribute('visible','false')          
});
}
});
