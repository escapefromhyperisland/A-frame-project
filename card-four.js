AFRAME.registerComponent('card-four', {
    init: function () {
      var el = this.el;
      el.addEventListener('click', function (evt) {
        console.log("i m here")
      var pos = el.getAttribute('position')
      console.log(pos)
      if( pos.x <= -6 && pos.x >= -8 && pos.z <=13 && pos.z >=12) {
        let boxOne=document.getElementById("boxFour");
        let imageOne=document.getElementById("imageFour");
        let image2=document.getElementById("aImage4");
        
        imageOne.classList.add("displayNone");
        console.log(imageOne)
        boxOne.setAttribute('visible','false');
        image2.setAttribute('visible','false');
      }
    })
  }
  });