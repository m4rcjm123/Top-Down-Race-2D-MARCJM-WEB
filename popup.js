document.addEventListener("DOMContentLoaded", function () {
    var container = document.querySelector("#unityContainer");
    createUnityInstance(container, {
      dataUrl: "Build/game.data",
      frameworkUrl: "Build/game.framework.js",
      codeUrl: "Build/game.wasm",
    }).then((unityInstance) => {
      console.log("Juego cargado");
    }).catch((error) => {
      console.error(error);
    });
  });
  