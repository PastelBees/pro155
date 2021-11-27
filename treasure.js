AFRAME.registerComponent("coin", {
    init: function () {
        for (var i = 1; i <= 10; i++) {

            var id = `coins${i}`
            
            var posX = (Math.random() * 100 + (-50))
            var posY = (Math.random() * 5 + (-5))
            var posZ = (Math.random() * 60 + (-40))

            var position = { x: posX, y: posY, z: posZ }

            this.createCoins(id, position)

        }
    },

    createCoins: (id, position) => {
        
        var oceanEL = document.querySelector("#ocean")

        var coinEL = document.createElement("a-entity")

        coinEL.setAttribute("id", id)
        coinEL.setAttribute("position", position)
        coinEL.setAttribute("material", "color", "#ff9100")
        
        coinEL.setAttribute("geometry",{primitive: "cirle", radius: 1})
        
        coinEL.setAttribute("animation", {
            property: "rotation",
            to: "0 360 0",
            loop: "true",
            dur: 1000
        })

        coinEL.setAttribute("static-body",{
            shape: "sphere",
            sphereRadius: 2
        })
        coinEL.setAttribute("game-play", {
            elementId: `#${id}`
          });

        oceanEL.appendChild(coinEL)
    }
})