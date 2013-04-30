function draw(options) {
    var lineWidth = options.lineWidth || 2;
    var lineRatio = options.lineRatio || 5;
    var size = lineWidth * lineRatio;
    var encoder = new GIFEncoder();
    encoder.setRepeat(0); //auto-loop
    encoder.setSize(size, size);
    encoder.start();

    var c = document.createElement('canvas');
    c.width = size;
    c.height = size;
    var ctx = c.getContext('2d');
    var lw;

    ctx.strokeStyle = options.strokeStyle || '#000';
    ctx.fillStyle = options.fillStyle || '#fff';
    ctx.lineWidth = lineWidth;
    lw = ctx.lineWidth * 1;

    for (var x = 0; x < size; x++) {
        ctx.fillRect(0, 0, size, size);

        ctx.beginPath();
        ctx.lineTo(x + size - lw, -lw);
        ctx.lineTo(x + size + size + lw, size + lw);
        ctx.stroke();

        ctx.beginPath();
        ctx.lineTo(x - size - lw, -lw);
        ctx.lineTo(x + lw, size + lw);
        ctx.stroke();

        ctx.beginPath();
        ctx.lineTo(x - lw, -lw);
        ctx.lineTo(x + size + lw, size + lw);
        ctx.stroke();

        encoder.addFrame(ctx);
    }

    encoder.finish();
    document.getElementById('big')
        .style.backgroundImage = 'url(data:image/gif;base64,' + encode64(encoder.stream().getData()) + ')';
    document.getElementById('style')
        .value = 'url(data:image/gif;base64,' + encode64(encoder.stream().getData()) + ')';
}
