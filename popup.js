document.addEventListener("DOMContentLoaded", function () {
    var container = document.querySelector("#unityContainer");
    createUnityInstance(container, {
      dataUrl: "Build/BuildWebGL.data",
      frameworkUrl: "Build/BuildWebGL.framework.js",
      codeUrl: "Build/BuildWebGL.wasm",
    }).then((unityInstance) => {
      console.log("Juego cargado");
    }).catch((error) => {
      console.error(error);
    });
  });
  