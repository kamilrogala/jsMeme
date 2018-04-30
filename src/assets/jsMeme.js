/*jshint esversion:6,browser:true,devel: true*/
document.addEventListener('DOMContentLoaded', () => {
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

	const jsMemeBg = (color) => {
		ctx.fillStyle = color;
		ctx.fillRect(0, 0, canvas.width, canvas.height);
	};
	const addImageProcess = (src) => {
		return new Promise((resolve, reject) => {
			let img = new Image()
			img.onload = () => {
				resolve(img);
			}
			img.onerror = reject
			img.src = src
		})
	}
	const jsMemeGenerate = (imageObj) => {
		let X, Y, sourceWidth, sourceHeight, destWidth, destHeight;
		
		X = Y = 10;
		
		sourceWidth = imageObj.width;
		sourceHeight = imageObj.height;
		imageObj.crossOrigin = "Anonymous";
		
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

	const memeRender = () => {
		jsMemeBg(canvasBg.value);
		addImageProcess(canvasPic.value).then(img => {
			jsMemeGenerate(img);
		});
	}
	
	jsMemeBg('#000');

	canvasBg.addEventListener('change', memeRender);
	canvasPic.addEventListener('change', memeRender);
	canvasBtnGenerate.addEventListener('click', memeRender);
	
	canvasBtnDownload.addEventListener('click', function () {
		canvasBtnDownload.href = canvas.toDataURL();
	});
});
