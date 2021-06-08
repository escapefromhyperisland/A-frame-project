AFRAME.registerComponent('coin-handler-three', {
    init: function () {
      var el = this.el;
      el.addEventListener('click', function (evt) {
        console.log("i m here")
     
                let coin=document.getElementById("coin3");
                let htmlCoin=document.getElementById("coinThree");
                htmlCoin.classList.add("displayNone");
                coin.setAttribute('visible','false'); 
      })
    }
  });