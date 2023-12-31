<template>
  <div class="container mx-auto flex flex-col items-center">
    <div class="recordMicContainer">
      <button
        :class="`mic${isRecording ? ' recording' : ''}`"
        @click="toggleMic"
      >
        {{ isRecording ? "Stop Recording" : "Start Recording" }}
      </button>
      <div class="transcript" v-text="transcript"></div>
    </div>
    <div class="sound-wave ">
      <canvas ref="canvas" class="canvas"></canvas>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    const transcript = ref("");
    const isRecording = ref(false);
    const canvasRef = ref(null);
    const audioContext = ref(null);
    const analyser = ref(null);
    const canvasContext = ref(null);
    const canvasWidth = 800;
    const canvasHeight = 100; // Cubuk yüksekliğini 100px olarak ayarladık
    const audioContextStarted = ref(false);

    const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const sr = new Recognition();

    onMounted(() => {
      sr.continuous = true;
      sr.interimResults = true;

      sr.onstart = () => {
        console.log("SR Started");
        isRecording.value = true;
      };

      sr.onend = () => {
        console.log("SR Stopped");
        isRecording.value = false;
      };

      sr.onresult = (evt) => {
        for (let i = 0; i < evt.results.length; i++) {
          const result = evt.results[i];

          if (result.isFinal) CheckForCommand(result);
        }

        const t = Array.from(evt.results)
          .map((result) => result[0])
          .map((result) => result.transcript)
          .join("");

        transcript.value = t;
      };

      canvasRef.value = document.querySelector(".canvas");
      if (!canvasRef.value) {
        console.error("Canvas element not found.");
      } else {
        setupCanvas();
      }
    });

    const CheckForCommand = (result) => {
      const t = result[0].transcript;
      if (t.includes("stop recording")) {
        sr.stop();
        if (audioContextStarted.value) {
          startAudioContext();
        }
      } else if (
        t.includes("what is the time") ||
        t.includes("what's the time")
      ) {
        sr.stop();
        alert(new Date().toLocaleTimeString());
        setTimeout(() => sr.start(), 100);
      }
    };

    const toggleMic = () => {
      if (isRecording.value) {
        sr.stop();
        if (audioContextStarted.value) {
          startAudioContext();
        }
      } else {
        if (!audioContextStarted.value) {
          startAudioContext();
        }
        sr.start();
      }
    };

    const startAudioContext = async () => {
      try {
        if (!audioContextStarted.value) {
          const stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
          });

          audioContext.value = new (window.AudioContext ||
            window.webkitAudioContext)();
          analyser.value = audioContext.value.createAnalyser();
          const source = audioContext.value.createMediaStreamSource(stream);
          source.connect(analyser.value);
          analyser.value.fftSize = 256;

          audioContextStarted.value = true;

          drawSoundWave();
        } else {
          audioContext.value.close();
          audioContextStarted.value = false;
          canvasContext.value.clearRect(0, 0, canvasWidth, canvasHeight);
        }
      } catch (error) {
        console.error("Mikrofon erişimi reddedildi:", error);
      }
    };

    const setupCanvas = () => {
      const canvas = canvasRef.value;
      if (!canvas) {
        console.error("Canvas element not found.");
        return;
      }
      canvasContext.value = canvas.getContext("2d");
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
    };

    const drawSoundWave = () => {
      
      const dataArray = new Uint8Array(analyser.value.frequencyBinCount);
      const barWidth = canvasWidth / dataArray.length;
     

      const draw = () => {
        analyser.value.getByteFrequencyData(dataArray);
        canvasContext.value.clearRect(0, 0, canvasWidth, canvasHeight);

        for (let i = 0; i < dataArray.length; i++) {
          let color;
          const value = dataArray[i];
          const barHeight = (dataArray[i]/-55)*canvasHeight;

          // Ses şiddetine göre renk değiştir
          if (value < 85) {
            color = "green"; // Düşük ses için yeşil
          } else if (value < 170) {
            color = "yellow"; // Orta şiddetli ses için sarı
          } else {
            color = "red"; // Yüksek ses için kırmızı
          }

          canvasContext.value.fillStyle = color;
          canvasContext.value.fillRect(i * barWidth, canvasHeight - 2, barWidth, 2,barHeight - canvasHeight );
        }

        requestAnimationFrame(draw);
      };
      draw();
    };

    return {
      transcript,
      toggleMic,
      isRecording,
      canvasRef,
      audioContextStarted,
    };
  },
};
</script>

<style lang="css" scoped>
.recordMicContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
}

.mic {
  padding: 10px 20px;
  background-color: #3498db;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

.mic.recording {
  background-color: #e74c3c;
}

.transcript {
  margin-top: 20px;
  font-size: 18px;
}

.wave {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.canvas {
  border: 1px solid #ddd;
  background-color: #f5f5f5; /* Çubuk grafik arkaplan rengi */
}
</style>