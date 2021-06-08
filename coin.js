AFRAME.registerComponent('coin-handler', {
    init: function () {
      var el = this.el;
      el.addEventListener('click', function (evt) {
        console.log("i m here")
    
    
        let coin=document.getElementById("coin1");
        let htmlCoin=document.getElementById("coinOne");
      
        
        htmlCoin.classList.add("displayNone");
       
        coin.setAttribute('visible','false');
       
      })
    }
  });