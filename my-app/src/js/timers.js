let timerKit = {

    timeouts :[],

    setTimeout: function() {
        this.timeouts.push(setTimeout.apply(null, arguments));
    },

    clearTimeouts: function() {
        this.timeouts.forEach(clearTimeout);
        console.log(this.timeouts)
    }
};

export default timerKit;