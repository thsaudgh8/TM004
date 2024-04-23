let model, webcam, labelContainer, maxPredictions;

async function init() {
    const URL = "https://teachablemachine.withgoogle.com/models/P58zqHugb/";
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    const flip = true;
    webcam = new tmImage.Webcam(200, 200, flip);
    await webcam.setup();
    await webcam.play();
    window.requestAnimationFrame(loop);

    document.getElementById("webcam-container").appendChild(webcam.canvas);
    labelContainer = document.getElementById("label-container");
    for (let i = 0; i < maxPredictions; i++) {
        labelContainer.appendChild(document.createElement("div"));
    }
}

async function loop() {
    webcam.update();
    await predict();
    window.requestAnimationFrame(loop);
}

async function predict() {
    const prediction = await model.predict(webcam.canvas);
    for (let i = 0; i < maxPredictions; i++) {
        const classPrediction = prediction[i].className;
        const probability = prediction[i].probability.toFixed(2);

        let label = "";
        if (parseFloat(probability) >= 0.85) {
            if (classPrediction === "Lion") {
                label = "사자";
            } else if (classPrediction === "Tiger") {
                label = "호랑이";
            } else {
                label = classPrediction;
            }
            labelContainer.childNodes[i].innerHTML = `이것은 ${label}입니다 어흥!<br>점수: ${probability}`;
        } else {
            labelContainer.childNodes[i].innerHTML = "";
        }
    }
}

function startCamera() {
    init();
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}

function stopCamera() {
    webcam.stop();
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
}
