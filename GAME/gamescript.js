const fpscounter = document.getElementById("fpscounter");
let lastTime = 0, dtlist = [];
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

let maxhp = 100, hp = maxhp;
let maxsp = 100, sp = maxsp;

const hpcounter = document.getElementById("hpcounter");
function promptHPChange(hpchange) {
    if (typeof(hpchange) != "number") {
        return;
    }
    hp = Math.min(hpchange+hp, maxhp);
    const ratio = hp/maxhp;
    const strhp = hp.toString(), strmax = maxhp.toString();
    if (ratio >= 0.5) {
        hpcounter.textContent = "❤️ HEALTH: " + strhp + "/" + strmax;
    } else if (ratio >= 0.25) {
        hpcounter.textContent = "❤️‍🩹 HEALTH!: " + strhp + "/" + strmax;
    } else if (hp > 10) { //it not being a greater or equal is intentional
        hpcounter.textContent = "❤️‍🔥 HEALTH!!: " + strhp + "/" + strmax;
    } else if (hp > 0) {
        hpcounter.textContent = "💔 HEALTH!!!: " + strhp + "/" + strmax;
    } else {
        hpcounter.textContent = "💔 health...: " + strhp + "/" + strmax;
    }
}
const spcounter = document.getElementById("spcounter");
function promptSPChange(spchange) {
    if (typeof(spchange) != "number") {
        return;
    }
    sp = Math.max(0,Math.min(maxsp,sp+spchange));
    const ratio = sp/maxsp;
    const strsp = sp.toString(), strmax = maxsp.toString();
    if (ratio >= 0.5) {
        spcounter.textContent = "🎮 STAMINA: " + strsp + "/" + strmax;
    } else if (ratio >= 0.25) {
        spcounter.textContent = "🏃 STAMINA↘: " + strsp + "/" + strmax;
    } else if (sp > 10) { //it not being a greater or equal is intentional
        spcounter.textContent = "🥱 STAMINA↘↘: " + strsp + "/" + strmax;
    } else {
        spcounter.textContent = "😴 STAMINA↘↘↘: " + strsp + "/" + strmax;
    }
}