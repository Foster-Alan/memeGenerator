// eslint-disable-next-line no-unused-vars
function onLoadText() {
  const texto = document.getElementById('text-input').value;
  document.getElementById('meme-text').innerHTML = texto;
}

// eslint-disable-next-line no-unused-vars
function onLoadImg() {
  // eslint-disable-next-line sonarjs/no-duplicate-string
  const img = document.getElementById('meme-image');
  // eslint-disable-next-line no-restricted-globals
  img.src = URL.createObjectURL(event.target.files[0]);
  // eslint-disable-next-line func-names
  img.onload = function () {
    URL.revokeObjectURL(img.src);
  };
}

// eslint-disable-next-line no-unused-vars
function changeBorderFire() {
  // eslint-disable-next-line sonarjs/no-duplicate-string
  document.getElementById('meme-image-container').style.border = '3px dashed red';
}

// eslint-disable-next-line no-unused-vars
function changeBorderWater() {
  document.getElementById('meme-image-container').style.border = '5px double blue';
}

// eslint-disable-next-line no-unused-vars
function changeBorderEarth() {
  document.getElementById('meme-image-container').style.border = '6px groove green';
}

// eslint-disable-next-line no-unused-vars
function selectImg1() {
  const url = document.getElementById('meme-1').src;
  const img = document.getElementById('meme-image');
  img.src = url;
}

// eslint-disable-next-line no-unused-vars
function selectImg2() {
  const url = document.getElementById('meme-2').src;
  const img = document.getElementById('meme-image');
  img.src = url;
}

// eslint-disable-next-line no-unused-vars
function selectImg3() {
  const url = document.getElementById('meme-3').src;
  const img = document.getElementById('meme-image');
  img.src = url;
}

// eslint-disable-next-line no-unused-vars
function selectImg4() {
  const url = document.getElementById('meme-4').src;
  const img = document.getElementById('meme-image');
  img.src = url;
}
