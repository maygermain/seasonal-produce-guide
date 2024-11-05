//winter arrays
var winterFruitArray = ["Apples", "Pears"];
var winterVegArray = ["Beets", "Brussel Sprouts", "Cabbage", "Carrots", "Kale", "Leeks", "Mushrooms", "Onions (Red)", "Onions (Yellow)", "Parsnips", "Potatoes", "Rutabaga", "Squash", "Sweet Potatoes", "Turnips"];

//spring arrays
var springFruitArray = ["Rhubarb"];
var springVegArray = ["Asparagus", "Cabbage", "Carrots", "Kale", "Leeks", "Mushrooms", "Onions (Red)", "Onions (Yellow)", "Parsnips", "Radishes", "Sweet Potatoes"];

//early summer arrays
var earlySummerFruitArray = ["Cherries", "Gooseberries", "Rhubarb", "Strawberries (BC)"];
var earlySummerVegArray = ["Asian Greens", "Asparagus", "Bok Choy", "Broccoli", "Kale", "Lettuce (Field)", "Mushrooms", "Onions (Green)", "Peas (Green)", "Peas (Snow)", "Radishes", "Spinach", "Squash", "Sweet Potatoes", "Swiss Chard", "Turnips"];

//summer arrays
var summerFruitArray = ["Apples", "Apricots", "Blueberries", "Cantaloupe (BC)", "Cherries", "Currants", "Gooseberries", "Nectarines", "Peaches", "Pears", "Plums", "Raspberries", "Strawberries (BC)", "Watermelon (BC)"];
var summerVegArray = ["Artichokes", "Asian Greens", "Beans", "Beets", "Bok Choy", "Broccoli", "Cabbage", "Carrots", "Cauliflower", "Celery (BC)", "Corn", "Cucumber (Field)", "Eggplant", "Fennel", "Garlic", "Kale", "Leeks", "Lettuce (Field)", "Mushrooms", "Onions (Green)", "Onions (Red)", "Onions (Yellow)", "Parsnips", "Peas (Green)", "Peas (Snow)", "Peppers (Field)", "Potatoes", "Pumpkins", "Radishes", "Rapini", "Rutabaga", "Shallots", "Spinach", "Squash", "Sweet Potatoes", "Swiss Chard", "Tomatoes (Field)", "Turnips", "Zucchini"];

//early fall arrays
var earlyFallFruitArray = ["Apples", "Blueberries", "Cantaloupe (BC)", "Cranberries", "Grapes", "Pears", "Plums", "Strawberries (BC)", "Watermelon (BC)"];
var earlyFallVegArray = ["Artichokes", "Asian Greens", "Beans", "Beets", "Bok Choy", "Broccoli", "Brussel Sprouts", "Cabbage", "Carrots", "Cauliflower", "Celery (BC)", "Corn", "Cucumber (Field)", "Eggplant", "Fennel", "Garlic", "Kale", "Leeks", "Lettuce (Field)", "Mushrooms", "Onions (Green)", "Onions (Red)", "Onions (Yellow)", "Parsnips", "Peas (Snow)", "Peppers (Field)", "Potatoes", "Pumpkins", "Radishes", "Rapini", "Rutabaga", "Shallots", "Spinach", "Squash", "Sweet Potatoes", "Swiss Chard", "Tomatoes (Field)", "Turnips", "Zucchini"];

//fall arrays
var fallFruitArray = ["Apples", "Blueberries", "Cranberries", "Pears"];
var fallVegArray = ["Artichokes", "Asian Greens", "Beets", "Bok Choy", "Broccoli", "Brussel Sprouts", "Cabbage", "Carrots", "Cauliflower", "Celery (BC)", "Corn", "Eggplant", "Fennel", "Garlic", "Kale", "Leeks", "Lettuce (Field)", "Mushrooms", "Onions (Green)", "Onions (Red)", "Onions (Yellow)", "Parsnips", "Peppers (Field)", "Potatoes", "Pumpkins", "Radishes", "Rutabaga", "Spinach", "Squash", "Sweet Potatoes", "Swiss Chard", "Tomatoes (Field)", "Turnips", "Zucchini"];

//set containers for arrays of selected season
var fruitArray;
var vegArray;

//On click...
//1. Empty the month name and table columns
//1. Grab the fruit and vegetable array for the appropriate season given the month that's selected.
//2. Print the month in div class month
//2. In the divs with classes seasonal-fruits and seasonal-vegetables, insert each item in the array on a new line.

$("#january").click(function () {
    //Empty divs 
    $("#seasonal-fruits").empty();
    $("#seasonal-vegetables").empty();
    $("#month").empty();

    //Select arrays
    let fruitArray = winterFruitArray;
    let vegArray = winterVegArray;

    //Print month
    $("#month").html(" January");

    //Print array contents
    //For each index # in the array, print the string and jump to a new line
    //Fruits
    for (let i = 0; i < fruitArray.length; i++) {
        $("#seasonal-fruits").append(fruitArray[i] + "<br/>")
    }
    //Veg
    for (let i = 0; i < vegArray.length; i++) {
        $("#seasonal-vegetables").append(vegArray[i] + "<br/>")
    }
}
);

$("#february").click(function () {
    //Empty divs
    $("#seasonal-fruits").empty();
    $("#seasonal-vegetables").empty();
    $("#month").empty();

    //Select arrays
    let fruitArray = winterFruitArray;
    let vegArray = winterVegArray;

    //Print month
    $("#month").html(" February");

    //Print array contents
    //For each index # in the array, print the string and jump to a new line
    //Fruits
    for (let i = 0; i < fruitArray.length; i++) {
        $("#seasonal-fruits").append(fruitArray[i] + "<br/>")
    }
    //Veg
    for (let i = 0; i < vegArray.length; i++) {
        $("#seasonal-vegetables").append(vegArray[i] + "<br/>")
    }
}
);

$("#march").click(function () {
    //Empty divs
    $("#seasonal-fruits").empty();
    $("#seasonal-vegetables").empty();
    $("#month").empty();

    //Select arrays
    let fruitArray = springFruitArray;
    let vegArray = springVegArray;

    //Print month
    $("#month").html(" March");

    //Print array contents
    //For each index # in the array, print the string and jump to a new line
    //Fruits
    for (let i = 0; i < fruitArray.length; i++) {
        $("#seasonal-fruits").append(fruitArray[i] + "<br/>")
    }
    //Veg
    for (let i = 0; i < vegArray.length; i++) {
        $("#seasonal-vegetables").append(vegArray[i] + "<br/>")
    }
}
);

$("#April").click(function () {
    //Empty divs
    $("#seasonal-fruits").empty();
    $("#seasonal-vegetables").empty();
    $("#month").empty();

    //Select arrays
    let fruitArray = springFruitArray;
    let vegArray = springVegArray;

    //Print month
    $("#month").html(" April");

    //Print array contents
    //For each index # in the array, print the string and jump to a new line
    //Fruits
    for (let i = 0; i < fruitArray.length; i++) {
        $("#seasonal-fruits").append(fruitArray[i] + "<br/>")
    }
    //Veg
    for (let i = 0; i < vegArray.length; i++) {
        $("#seasonal-vegetables").append(vegArray[i] + "<br/>")
    }
}
);

$("#may").click(function () {
    //Empty divs
    $("#seasonal-fruits").empty();
    $("#seasonal-vegetables").empty();
    $("#month").empty();

    //Select arrays
    let fruitArray = earlySummerFruitArray;
    let vegArray = earlySummerVegArray;

    //Print month
    $("#month").html(" May");

    //Print array contents
    //For each index # in the array, print the string and jump to a new line
    //Fruits
    for (let i = 0; i < fruitArray.length; i++) {
        $("#seasonal-fruits").append(fruitArray[i] + "<br/>")
    }
    //Veg
    for (let i = 0; i < vegArray.length; i++) {
        $("#seasonal-vegetables").append(vegArray[i] + "<br/>")
    }
}
);

$("#june").click(function () {
    //Empty divs
    $("#seasonal-fruits").empty();
    $("#seasonal-vegetables").empty();
    $("#month").empty();

    //Select arrays
    let fruitArray = earlySummerFruitArray;
    let vegArray = earlySummerVegArray;

    //Print month
    $("#month").html(" June");

    //Print array contents
    //For each index # in the array, print the string and jump to a new line
    //Fruits
    for (let i = 0; i < fruitArray.length; i++) {
        $("#seasonal-fruits").append(fruitArray[i] + "<br/>")
    }
    //Veg
    for (let i = 0; i < vegArray.length; i++) {
        $("#seasonal-vegetables").append(vegArray[i] + "<br/>")
    }
}
);

$("#july").click(function () {
    //Empty divs
    $("#seasonal-fruits").empty();
    $("#seasonal-vegetables").empty();
    $("#month").empty();

    //Select arrays
    let fruitArray = summerFruitArray;
    let vegArray = summerVegArray;

    //Print month
    $("#month").html(" July");

    //Print array contents
    //For each index # in the array, print the string and jump to a new line
    //Fruits
    for (let i = 0; i < fruitArray.length; i++) {
        $("#seasonal-fruits").append(fruitArray[i] + "<br/>")
    }
    //Veg
    for (let i = 0; i < vegArray.length; i++) {
        $("#seasonal-vegetables").append(vegArray[i] + "<br/>")
    }
}
);

$("#august").click(function () {
    //Empty divs
    $("#seasonal-fruits").empty();
    $("#seasonal-vegetables").empty();
    $("#month").empty();

    //Select arrays
    let fruitArray = summerFruitArray;
    let vegArray = summerVegArray;

    //Print month
    $("#month").html(" August");

    //Print array contents
    //For each index # in the array, print the string and jump to a new line
    //Fruits
    for (let i = 0; i < fruitArray.length; i++) {
        $("#seasonal-fruits").append(fruitArray[i] + "<br/>")
    }
    //Veg
    for (let i = 0; i < vegArray.length; i++) {
        $("#seasonal-vegetables").append(vegArray[i] + "<br/>")
    }
}
);

$("#september").click(function () {
    //Empty divs
    $("#seasonal-fruits").empty();
    $("#seasonal-vegetables").empty();
    $("#month").empty();

    //Select arrays
    let fruitArray = earlyFallFruitArray;
    let vegArray = earlyFallVegArray;

    //Print month
    $("#month").html(" September");

    //Print array contents
    //For each index # in the array, print the string and jump to a new line
    //Fruits
    for (let i = 0; i < fruitArray.length; i++) {
        $("#seasonal-fruits").append(fruitArray[i] + "<br/>")
    }
    //Veg
    for (let i = 0; i < vegArray.length; i++) {
        $("#seasonal-vegetables").append(vegArray[i] + "<br/>")
    }
}
);

$("#october").click(function () {
    //Empty divs
    $("#seasonal-fruits").empty();
    $("#seasonal-vegetables").empty();
    $("#month").empty();

    //Select arrays
    let fruitArray = fallFruitArray;
    let vegArray = fallVegArray;

    //Print month
    $("#month").html(" October");

    //Print array contents
    //For each index # in the array, print the string and jump to a new line
    //Fruits
    for (let i = 0; i < fruitArray.length; i++) {
        $("#seasonal-fruits").append(fruitArray[i] + "<br/>")
    }
    //Veg
    for (let i = 0; i < vegArray.length; i++) {
        $("#seasonal-vegetables").append(vegArray[i] + "<br/>")
    }
}
);

$("#november").click(function () {
    //Empty divs
    $("#seasonal-fruits").empty();
    $("#seasonal-vegetables").empty();
    $("#month").empty();

    //Select arrays
    let fruitArray = fallFruitArray;
    let vegArray = fallVegArray;

    //Print month
    $("#month").html(" November");

    //Print array contents
    //For each index # in the array, print the string and jump to a new line
    //Fruits
    for (let i = 0; i < fruitArray.length; i++) {
        $("#seasonal-fruits").append(fruitArray[i] + "<br/>")
    }
    //Veg
    for (let i = 0; i < vegArray.length; i++) {
        $("#seasonal-vegetables").append(vegArray[i] + "<br/>")
    }
}
);

$("#december").click(function () {
    $("#seasonal-fruits").empty();
    $("#seasonal-vegetables").empty();
    $("#month").empty();

    //Select arrays
    let fruitArray = winterFruitArray;
    let vegArray = winterVegArray;

    //Print month
    $("#month").html(" December");

    //Print array contents
    //For each index # in the array, print the string and jump to a new line
    //Fruits
    for (let i = 0; i < fruitArray.length; i++) {
        $("#seasonal-fruits").append(fruitArray[i] + "<br/>")
    }
    //Veg
    for (let i = 0; i < vegArray.length; i++) {
        $("#seasonal-vegetables").append(vegArray[i] + "<br/>")
    }
}
);