var opts = {};

['lineRatio', 'strokeStyle', 'fillStyle', 'lineWidth', 'delay', 'static'].forEach(function(i) {
    document.getElementById(i).onchange = function() {
        opts[this.id] = (this.type === 'checkbox') ? this.checked : this.value;
        draw(opts);
    };
});

draw({});
