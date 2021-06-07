AFRAME.registerComponent('card-three', {
    init: function () {
      var el = this.el;
      el.addEventListener('click', function (evt) {
        console.log("i m here")
      var pos = el.getAttribute('position')
      console.log(pos)
      if( pos.x <= -6 && pos.x >= -8 && pos.z <=13 && pos.z >=12) {
        let boxOne=document.getElementById("boxThree");
        let imageOne=document.getElementById("imageThree");
        let image2=document.getElementById("aImage3");
        
        imageOne.classList.add("displayNone");
        console.log(imageOne)
        boxOne.setAttribute('visible','false');
        image2.setAttribute('visible','false');
      }
    })
  }
  });