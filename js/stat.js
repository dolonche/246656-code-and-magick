window.renderStatistics = function (ctx, names, times) {
	ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
	ctx.fillRect(110, 20, 420, 270);
	ctx.fillStyle = 'rgba(256, 256, 256, 1)';
	ctx.strokeRect(100, 10, 420, 270);
	ctx.fillRect(100, 10, 420, 270);
	ctx.fillStyle = '#000';
	ctx.font = '16px PT Mono';
	ctx.fillText('Ура вы победили!', 120, 40);
	ctx.fillText('Список результатов:', 120, 60);
	var max = -1;
	var maxIndex = -1;
	for (var i = 0; i < times.length; i++) {
		var time = times[i];
		if (time > max) {
			max = time;
			maxIndex = i;
		}
	}
	var histogramHeight = 150;
	var step = histogramHeight / (max - 0);
	var maxOpacity = 1;
	var minOpacity = 0;
	var randomOpacity = Math.random() * (maxOpacity - minOpacity) + minOpacity;
	//	ctx.fillRect(120, 80, 40, times[0] * step);
	//	ctx.fillRect(210, 80, 40, times[1] * step);
	//	ctx.fillRect(300, 80, 40, times[2] * step);
	//	for (var i = 0; i < times.length; i++) {
	//		var timeLevel = Math.round(times[i]);
	//		ctx.fillText(timeLevel, 120 + 80 * i, 0);
	//	}
	ctx.textBaseline = 'top'; // Рисуем надпись от левого верхнего угла
	for (var i = 0; i < names.length; i++) {
		if (names[i] === 'Вы') {
			ctx.fillStyle = '#ff0000';
			console.log(names[i]);
		} else {
			ctx.fillStyle = 'rgba(0, 0, 255,' + randomOpacity + ')';
		}
		ctx.fillRect(120 + 80 * i, 2 * histogramHeight - times[i] * step - 60, 40, times[i] * step);
		ctx.fillText(names[i], 120 + 80 * i, 60 + histogramHeight + 40);
		var timeLevel = Math.round(times[i]);
		ctx.fillText(timeLevel, 120 + 80 * i, 2 * histogramHeight - times[i] * step - 80);
	}
};