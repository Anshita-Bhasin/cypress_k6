const bike = {
    brand: "Ducati",

    logBrandRegular: function () { 
            console.log("Object - Regular Timeout:", this.brand);
    },

    logBrandArrow:  ()=> {
            console.log("Object - Arrow Timeout:", this.brand);
    }
};

bike.logBrandRegular(); //  "Regular Timeout: undefined"
bike.logBrandArrow();   // "Arrow Timeout: Ducati"

// Inside Class - Example 

const car = {
    brand: "BMW",

    // Regular function
    showBrand: function () {
        console.log("Class - Regular Function:", this.brand);
    },

    // Arrow function
    showArrowBrand: () => {
        console.log("Class - Arrow Function:", this.brand);
    }
};

car.showBrand();       // "Regular Function: BMW"
car.showArrowBrand();  // "Arrow Function: undefined"
