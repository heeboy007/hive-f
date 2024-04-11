import { camera } from "./init";

let x = 2, y = 0, z = 0;

//snippnet for later
window.onkeydown = (e) => {
    //lvLogger.info(e);
    if(e.key == "a") {
        x += 1
        lvLogger.info("x(deg): " + x);
        camera.rotation.x = x;
    } else if (e.key == "s"){
        y += 1
        lvLogger.info("y(deg): " + y);
        camera.rotation.y = y;
    } else if (e.key == "q"){
        z += 1
        lvLogger.info("z(deg): " + z);
        camera.rotation.z = z;
    } else if(e.key == "d") {
        x -= 1
        lvLogger.info("x(deg): " + x);
        camera.rotation.x = x;
    } else if (e.key == "w"){
        y -= 1
        lvLogger.info("y(deg): " + y);
        camera.rotation.y = y;
    } else if (e.key == "e"){
        z -= 1
        lvLogger.info("z(deg): " + z);
        camera.rotation.z = z;
    }
}