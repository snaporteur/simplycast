const videoElem = document.getElementById("video");
const logElem = document.getElementById("log");
const startElem = document.getElementById("start");

// Options for getDisplayMedia()

var displayMediaOptions = {
video: {
cursor: "always"
},
audio: false
};

// Set event listeners for the start and stop buttons
startElem.addEventListener("click", function(evt) {
startCapture();
}, false);

console.log = msg => logElem.innerHTML += `${msg}<br>`;
console.error = msg => logElem.innerHTML += `<span class="error">${msg}</span><br>`;
console.warn = msg => logElem.innerHTML += `<span class="warn">${msg}<span><br>`;
console.info = msg => logElem.innerHTML += `<span class="info">${msg}</span><br>`;

        async function startCapture() {
        logElem.innerHTML = "";

        try {
            videoElem.srcObject = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
            dumpOptionsInfo();
        } catch(err) {
            console.error("Error: " + err);
        }
        }

        function dumpOptionsInfo() {
            const videoTrack = videoElem.srcObject.getVideoTracks()[0];

            console.info("Track settings:");
            console.info(JSON.stringify(videoTrack.getSettings(), null, 2));
            console.info("Track constraints:");
            console.info(JSON.stringify(videoTrack.getConstraints(), null, 2));
        }