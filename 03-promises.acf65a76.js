!function(){function n(n,o){var t=Math.random()>.3;return new Promise((function(e,a){setTimeout((function(){t&&e({position:n,delay:o}),a({position:n,delay:o})}),o)}))}document.querySelector(".form").addEventListener("submit",(function(o){o.preventDefault();var t=new FormData(o.target),e={};t.forEach((function(n,o){return e[o]=+n}));for(var a=0;a<e.amount;a++)n(a+1,e.delay).then((function(n){var o=n.position,t=n.delay;console.log("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms"))})).catch((function(n){var o=n.position,t=n.delay;console.log("❌ Rejected promise ".concat(o," in ").concat(t,"ms"))})),e.delay+=e.step}))}();
//# sourceMappingURL=03-promises.acf65a76.js.map