AFRAME.registerComponent('card-three', {
    init: function () {
      var el = this.el;
      el.addEventListener('click', function (evt) {
        console.log("i m here")
      var pos = el.getAttribute('position')
      console.log(pos)
      if( pos.x <= 13 && pos.x >= 10 && pos.z <=16 && pos.z >=13) {
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