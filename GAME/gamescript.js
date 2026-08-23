const fpscounter = document.getElementById("fpscounter");
let lastTime = 0;
let dtlist = [];
function onNewFrame(currentTime) {
    const deltatime = (currentTime - lastTime) / 1000;
    dtlist.push(deltatime);
    if (dtlist.length > 50) {
        dtlist.shift();
    }
    const average = dtlist.reduce((last, current) => last + current,0) / dtlist.length;
    const fps = average > 0 ? Math.round(10/average)/10 : 0;
    fpscounter.textContent = "FPS: " + fps.toFixed(1);

    lastTime = currentTime;
    requestAnimationFrame(onNewFrame);
}
requestAnimationFrame(onNewFrame);