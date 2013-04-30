var opts = {};

['lineRatio', 'strokeStyle', 'fillStyle', 'lineWidth'].forEach(function(i) {
    document.getElementById(i).onchange = function() {
        opts[this.id] = this.value;
        draw(opts);
    };
});

draw({});
