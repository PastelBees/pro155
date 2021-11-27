AFRAME.registerComponent("game-play", {
    schema: {
        elementId: { type: "string", default: "#coins1" },
    },

    update: function () {
        this.isCollided(this.data.elementId);
    },

    isCollided: function (elementId) {
        const element = document.querySelector(elementId);
        
        element.addEventListener("collide", (e) => {

            if (elementId.includes("#coins")) {
                element.setAttribute("visible", false)
                console.log("coin collision");
            }
            if (elementId.includes("#fishes")) {
                console.log("fish collision");
            }
        });
    },
});