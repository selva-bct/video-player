var videosByDiagnosis = {};
var diagnosisCategorySet = new Set();
var currentCategory = "";
var currentCategoryVideos = [];
var currentVideo = "";

videosForTvHome.forEach(function (data) {
  videosByDiagnosis[data.videos.diagnosisDescription] = data.videos;
  diagnosisCategorySet.add(data.videos.diagnosisDescription);
});
var diagnosisCategory = Array.from(diagnosisCategorySet);
console.log(diagnosisCategory, videosByDiagnosis);

if (!currentCategory) {
  currentCategoryVideos = videosByDiagnosis[diagnosisCategory[0]]?.videos;
}

/**
 * Template generator for the diagnosis videos
 */
function generateHtmlForDiagnosisVideos(videos) {
  var template = ``;
  if (videos.length) {
    videos.forEach(function (video, index) {
      template += `
        <div class="diagnosis-video diagnosis-${index} n-item ${currentVideo === video?.videoUrl ? "active" : ""}" onclick="setCurrentVideo('${video?.videoUrl}');">
          <img src="${video.thumbnailUrl}" width="300" height="200" class="diagnosis-video-thumbnail">
        </div>
      `;
    });
  }
  return template;
}

/**
 * Template generator for the diagnosis category
 */
function generateHtmlForDiagnosisCategory(diagnosisCategory) {
  var template = ``;
  if (diagnosisCategory.length) {
    diagnosisCategory.forEach(function (category, index) {
      template += `
        <div class="diagnosis-category diagnosis-${index} n-item ${currentCategory}
        ${currentCategory === category ? "active" : ""}" onclick="setCurrentCategory('${category}');">
          ${category}
        </div>
      `;
    });
  }
  return template;
}

/**
 * Set the current active VideoUrl
 * @param {*} videoUrl
 */
var setCurrentVideo = function (videoUrl) {
  if (videoUrl) {
    currentVideo = videoUrl;
    console.log(currentVideo);
    updateVideoListDom();
    const videoElement = document.getElementById("my-video");
    const videoContainer = document.getElementById("video");
    // const videoSource = document.getElementById("video-source");
    // videoElement.src = `${videoUrl}`;
    /**
     * Updating the new video url
     */
    videoContainer.style.display = "block";

    var myPlayer = videojs("my-video");

    myPlayer.src({
      type: "video/mp4",
      src: `${videoUrl}`,
    });
  }
};

/**
 * mute and unmute video player
 */
function togglePlayerMute() {
  var myPlayer = videojs("my-video");
  myPlayer.muted(!myPlayer.muted);
}
/**
 * Volume control
 */
function increasePlayerVolume() {
  var myPlayer = videojs("my-video");
  const currentVolume = myPlayer.volume();
  myPlayer.volume(currentVolume + 0.25);
}
function decreasePlayerVolume() {
  var myPlayer = videojs("my-video");
  const currentVolume = myPlayer.volume();
  if (currentVolume != 0) myPlayer.volume(currentVolume - 0.25);
}

/**
 * go full screen
 */
function toggleFullScreen() {
  var myPlayer = videojs("my-video");
  myPlayer.isFullscreen(!myPlayer.isFullscreen);
}

/**
 * exit full screen
 */
function ExitFullScreen() {
  var myPlayer = videojs("my-video");
  myPlayer.exitFullscreen();
}

/**
 * play/pause the player
 */
function playVideo() {
  var myPlayer = videojs("my-video");
  myPlayer.play();
}
function pauseVideo() {
  var myPlayer = videojs("my-video");
  myPlayer.pause();
}

function getvideoPlayerStats() {
  var myPlayer = videojs("my-video");
  var stats = {
    currentTime: myPlayer.currentTime(),
    totalVideoLength: myPlayer.duration(),
    remainingTime: myPlayer.remainingTime(),
  };
  return stats;
}
function fastForwardvideo() {
  var myPlayer = videojs("my-video");
  var currenTime = myPlayer.currentTime();
  const fastForwardedTime = currenTime + Math.min(10, myPlayer.duration());
  myPlayer.currentTime(fastForwardedTime);
}

function goBackOnVideo() {
  var myPlayer = videojs("my-video");
  var currenTime = myPlayer.currentTime();
  const updatedTime = currenTime - 10 < 0 ? 0 : currenTime - 10;
  myPlayer.currentTime(updatedTime);
}

function closeVideoPlayer() {
  const videoContainer = document.getElementById("video");
  if (videoContainer) {
    videoContainer.style.display = "none";
  }
}

/**
 * Set the current active Category Name
 * @param {*} videoUrl
 */
var setCurrentCategory = function (category) {
  if (category) {
    currentCategory = category;
    updateDiagnosisCategoryDom();
    currentCategoryVideos = videosByDiagnosis[category]?.videos;
    updateVideoListDom();
  }
};

function updateVideoListDom() {
  const videosDom = document.getElementById("diagnosis-videos");
  videosDom.innerHTML = generateHtmlForDiagnosisVideos(currentCategoryVideos);
}

function updateDiagnosisCategoryDom() {
  const videoCategoryDom = document.getElementById("diagnosis-category");
  videoCategoryDom.innerHTML =
    generateHtmlForDiagnosisCategory(diagnosisCategory);
}
updateDiagnosisCategoryDom();
updateVideoListDom();
