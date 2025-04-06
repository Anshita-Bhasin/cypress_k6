const bike = {
    brand: "Ducati",

    logBrandRegular: function () {
        setTimeout(function () {
            console.log("Regular Timeout:", this.brand);
        }, 1000);
    },

    logBrandArrow: function () {
        setTimeout(() => {
            console.log("Arrow Timeout:", this.brand);
        }, 1000);
    }
};

bike.logBrandRegular(); //  "Regular Timeout: undefined"
bike.logBrandArrow();   // "Arrow Timeout: Ducati"