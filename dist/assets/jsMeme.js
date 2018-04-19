'use strict';

/*jshint esversion:6,browser:true,devel: true*/
document.addEventListener('DOMContentLoaded', function () {
	var canvas = document.getElementById('meme');
	var canvasBtnDownload = document.getElementById('btn-download');
	var canvasBtnGenerate = document.getElementById('btn-generate');
	var canvasLine1 = document.getElementById('line1');
	var canvasLine2 = document.getElementById('line2');
	var canvasPic = document.getElementById('img');
	var canvasBg = document.getElementById('color');
	var ctx = canvas.getContext('2d');
	canvasBtnDownload.style.opacity = 0;
	canvasBtnDownload.style.transition = '.7s all ease-in-out';

	var jsMemeBg = function jsMemeBg(color) {
		ctx.fillStyle = color;
		ctx.fillRect(0, 0, canvas.width, canvas.height);
	};

	var jsMemeGenerate = function jsMemeGenerate() {
		var imageObj = new Image();
		var X = void 0,
		    Y = void 0,
		    sourceWidth = void 0,
		    sourceHeight = void 0,
		    destWidth = void 0,
		    destHeight = void 0;
		imageObj.crossOrigin = "Anonymous";
		imageObj.src = canvasPic.value;
		X = Y = 10;
		sourceWidth = imageObj.width;
		sourceHeight = imageObj.height;
		destWidth = sourceWidth - 10;
		destHeight = sourceHeight - 100;
		ctx.drawImage(imageObj, X, Y, sourceWidth, sourceHeight, X, Y, destWidth, destHeight);

		ctx.font = "35px Arial";
		ctx.fillStyle = '#fff';
		ctx.textAlign = "center";
		ctx.fillText(canvasLine1.value.toUpperCase(), canvas.width / 2, canvas.height - 55);
		ctx.font = "25px Arial";
		ctx.fillText(canvasLine2.value.toUpperCase(), canvas.width / 2, canvas.height - 15);
		canvasBtnDownload.style.opacity = 1;
	};

	jsMemeBg('#000');

	canvasBg.addEventListener('change', function () {
		jsMemeBg(canvasBg.value);
		jsMemeGenerate();
	});
	canvasPic.addEventListener('change', function () {
		jsMemeBg(canvasBg.value);
		jsMemeGenerate();
	});
	canvasBtnGenerate.addEventListener('click', function () {
		jsMemeGenerate();
	});
	canvasBtnDownload.addEventListener('click', function () {
		canvasBtnDownload.href = canvas.toDataURL();
	});
});