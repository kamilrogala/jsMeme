/*jshint esversion:6,browser:true,devel: true*/
document.addEventListener('DOMContentLoaded', function () {
	const canvas = document.getElementById('meme');
	const canvasBtnDownload = document.getElementById('btn-download');
	const canvasBtnGenerate = document.getElementById('btn-generate');
	const canvasLine1 = document.getElementById('line1');
	const canvasLine2 = document.getElementById('line2');
	const canvasPic = document.getElementById('img');
	const canvasBg = document.getElementById('color');
	const ctx = canvas.getContext('2d');
	canvasBtnDownload.style.opacity = 0;
	canvasBtnDownload.style.transition = '.7s all ease-in-out';

	const jsMemeBg = function (color) {
		ctx.fillStyle = color;
		ctx.fillRect(0, 0, canvas.width, canvas.height);
	};

	const jsMemeGenerate = function () {
		const imageObj = new Image();
		let X, Y, sourceWidth, sourceHeight, destWidth, destHeight;
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
