$(document).ready(function() {
  $("#puzzles form").submit(function(event) {
    event.preventDefault();

    var input = $("input").val();
    var array = input.split("");
    var vowels = ["a", "e", "i", "o", "u"]

    for (var i = 0; i < array.length; i++) {
      if (array[i] === "a" || array[i] === "e" || array[i] === "i" || array[i] === "o" || array[i] === "u") {
        array[i] = "-";
      }
    }
    alert(array);

      // else
      // {
      //   array
      // }

      // $(".array").replace(/a,e,i,o,u/i, "-");
    // }

    // if (array[i] === "a" || array[i] === "e" || array[i] === "i" || array[i] === "o" ||array[i] === "u") {
    //   array[i].updateTo("-");
    //   };
    // };
      // newArray = input.replace(/a,e,i,o,u/i, "-");
      // console.log(newInput);

    // .map(function(n) {
    //   return Number(n);
    // })

//     var newArray = [];
//     // var newArray = [];
//     newArray.push($("input").val());
//
//     for (i = 0; i <newArray.length; i++) {
//     var sentence = newArray.map(function() {
//       return $(newArray[i]);
//     })
// }


    // for (var i = 0; i < input.length; i++) {
    // if (input[i] === "a" || input === "e" || input === "i" || input === "o" ||input === "u");
      // newInput = input.replace(/a,e,i,o,u/i, "-");
      // console.log(newInput);


    // };





    // var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun", "extra"];
    //
    // for (var i = 0; i < blanks.length; i++) {
    //   // console.log(blanks[i]);
    //   var input = $("input#" + blanks[i]).val();
    //    $("." + blanks[i]).append(input);
    // }
    //
    //
    //
    //
    //
    //
    //
    //
    //
    // $("#story").show();
    //
    // event.preventDefault();
  });
});
