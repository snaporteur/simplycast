var input = document.querySelector('#file');
var body = document.querySelector('body');
var url = document.querySelector('#url');
var type = document.querySelector('#type');

input.addEventListener('change', updateImageDisplay);

function updateImageDisplay() {
  var curFiles = input.files;
  if(curFiles.length === 0) {
  } else {
    for(var i = 0; i < curFiles.length; i++) {
      if(validFileType(curFiles[i]) == 1) {
        var image = document.querySelector('#calculate-image');
        image.style = "display: block;";
        image.src = window.URL.createObjectURL(curFiles[i]);
        url.innerHTML = image.src
        type.innerHTML = "image"

        body.appendChild(image);
      } else if(validFileType(curFiles[i]) == 2) {
        var video = document.querySelector('#calculate-video');
        video.style = "display: block;";
        video.src = window.URL.createObjectURL(curFiles[i]);
        url.innerHTML = video.src
        type.innerHTML = "video"

        body.appendChild(video);
      } else {
        alert("ERROR")
      }
    }
  }
}

var fileTypesImage = [
  'image/jpeg',
  'image/pjpeg',
  'image/png'
]
var fileTypesVideo = [
  'video/mp4'
]

function validFileType(file) {
  for(var i = 0; i < fileTypesImage.length; i++) {
    if(file.type === fileTypesImage[i]) {
      return 1;
    }
  }
  for(var i = 0; i < fileTypesVideo.length; i++) {
    if(file.type === fileTypesVideo[i]) {
      return 2;
    }
  }

  return 0;
}

function returnFileSize(number) {
  if(number < 1024) {
    return number + ' octets';
  } else if(number >= 1024 && number < 1048576) {
    return (number/1024).toFixed(1) + ' Ko';
  } else if(number >= 1048576) {
    return (number/1048576).toFixed(1) + ' Mo';
  }
}