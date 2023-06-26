let local_stream_data;
let global_stream_data;
const init = async () => {
  camera_audio_access = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true,
  });
  document.getElementById("user1").srcObject = camera_audio_access;
};

init();
