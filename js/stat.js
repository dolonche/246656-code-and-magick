'use strict';
window.renderStatistics = function (ctx, names, times) {
  function paintBlock(positionX, positionY, widthBlock, heightblock, colorBlock) {
    ctx.fillStyle = colorBlock;
    ctx.fillRect(positionX, positionY, widthBlock, heightblock);
  }
  paintBlock(110, 20, 420, 270, 'rgba(0, 0, 0, 0.7)');
  paintBlock(100, 10, 420, 270, 'rgba(256, 256, 256, 1)');
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);
  var max = -1;
  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }
  var histogramHeight = 150;
  var step = histogramHeight / (max - 0);
  var maxOpacity = 1;
  var minOpacity = 0.2;
  ctx.textBaseline = 'top';
  for (var e = 0; e < names.length; e++) {
    if (names[e] === 'Вы') {
      ctx.fillStyle = '#ff0000';
    } else {
      var randomOpacity = Math.random() * (maxOpacity - minOpacity) + minOpacity;
      ctx.fillStyle = 'rgba(0, 0, 255,' + randomOpacity + ')';
    }
    ctx.fillRect(120 + 80 * e, 2 * histogramHeight - times[e] * step - 60, 40, times[e] * step);
    ctx.fillStyle = '#000';
    ctx.fillText(names[e], 120 + 80 * e, 60 + histogramHeight + 40);
    var timeLevel = Math.round(times[e]);
    ctx.fillText(timeLevel, 120 + 80 * e, 2 * histogramHeight - times[e] * step - 80);
  }
};
