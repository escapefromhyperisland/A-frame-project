AFRAME.registerComponent('coin-handler-two', {
    init: function () {
      var el = this.el;
      el.addEventListener('click', function (evt) {
        console.log("i m here")
     
                let coin=document.getElementById("coin2");
                let htmlCoin=document.getElementById("coinTwo");
                htmlCoin.classList.add("displayNone");
                coin.setAttribute('visible','false'); 
      })
    }
  });