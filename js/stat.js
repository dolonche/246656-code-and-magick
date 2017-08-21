'use strict';
window.renderStatistics = function (ctx, names, times) {
    paintBlock(ctx, 110, 20, 420, 270, 'rgba(0, 0, 0, 0.7)');
    paintBlock(ctx, 100, 10, 420, 270, 'rgba(256, 256, 256, 1)')

    function paintBlock(ctx, positionX, positionY, widthBlock, heightblock, colorBlock) {
        ctx.fillStyle = colorBlock;
        ctx.fillRect(positionX, positionY, widthBlock, heightblock);
    }
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
    for (var i = 0; i < names.length; i++) {
        if (names[i] === 'Вы') {
            ctx.fillStyle = '#ff0000';
        } else {
            var randomOpacity = Math.random() * (maxOpacity - minOpacity) + minOpacity;
            ctx.fillStyle = 'rgba(0, 0, 255,' + randomOpacity + ')';
        }
        ctx.fillRect(120 + 80 * i, 2 * histogramHeight - times[i] * step - 60, 40, times[i] * step);
        ctx.fillStyle = '#000';
        ctx.fillText(names[i], 120 + 80 * i, 60 + histogramHeight + 40);
        var timeLevel = Math.round(times[i]);
        ctx.fillText(timeLevel, 120 + 80 * i, 2 * histogramHeight - times[i] * step - 80);
    }
};
