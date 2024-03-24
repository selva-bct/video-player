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
  }
};

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
