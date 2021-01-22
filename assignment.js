

// Problem Solving No:01 kilometerToMeter
function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    return meter;
}
var totalMeter = kilometerToMeter(50);
console.log(totalMeter);



// Problem Solving No:02 budgetCalculator
function budgetCalculator(watch, phone, laptop) {
    var watchPrice = watch * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;
    var result = watchPrice + phonePrice + laptopPrice;
    return result;
}
var totalPrice = budgetCalculator(5, 5, 5);
console.log(totalPrice);



// Problem Solving No:03 hotelCost
function hotelCost(cost) {
    var day = 0;
    //Calculation for ten days
    if (cost <= 10) {
      day = cost * 100;
    }
    // Calculation for twenty days
    else if (cost <= 20) {
      var tenDays = 10 * 100;
      var remaining = cost - 10;
      var twentyDays = remaining * 80;
      day = tenDays + twentyDays;
    }
    // Calculation for after twenty days
    else {
      var tenDays = 10 * 100;
      var twentyDays = 10 * 80;
      var remaining = cost - 20;
      var moreDays = remaining * 50;
      day = tenDays + twentyDays + moreDays;
    }
    return day;
  }
  var count = hotelCost(20);
  console.log(count);



// Problem Solving No:04 megaFriend
function megaFriend(friends) {
    return friends.reduce(
        // Nesting function
        function (largName, totalFriend) {
        return largName.length > totalFriend.length ? largName : totalFriend;
    },
        "");
}
console.log(megaFriend(["Abir", "Omor", "Arafine", "Ashadullah"]));
