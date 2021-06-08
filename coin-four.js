AFRAME.registerComponent('coin-handler-four', {
    init: function () {
      var el = this.el;
      el.addEventListener('click', function (evt) {
        console.log("i m here")
     
                let coin=document.getElementById("coin4");
                let htmlCoin=document.getElementById("coinFour");
                htmlCoin.classList.add("displayNone");
                coin.setAttribute('visible','false'); 
      })
    }
  });