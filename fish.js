AFRAME.registerComponent("fish", {
    init: function () {
        for (var i = 1; i <= 10; i++) {

            var id = `fishes${i}`
            
            var posX = (Math.random() * 100 + (-50))
            var posY = (Math.random() * 5 + (-5))
            var posZ = (Math.random() * 60 + (-40))

            var position = { x: posX, y: posY, z: posZ }

            this.swimmingFish(id, position)

        }
    },

    swimmingFish: (id, position) => {
        
        var oceanEL = document.querySelector("#ocean")

        var fishEL = document.createElement("a-entity")

        fishEL.setAttribute("id", id)
        fishEL.setAttribute("position", position)
        fishEL.setAttribute("scale", { x: 600, y: 600, z: 600 })

        fishEL.setAttribute("gltf-model", "assets/fish/scene.gltf")
        
        fishEL.setAttribute("animation-mixer", {})

        fishEL.setAttribute("static-body",{
            shape: "sphere",
            sphereRadius: 2
        })
        fishEL.setAttribute("game-play", {
            elementId: `#${id}`
          });

        oceanEL.appendChild(fishEL)
    }
})