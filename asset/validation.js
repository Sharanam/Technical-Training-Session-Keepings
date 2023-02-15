const $nameRegex = /^[a-zA-Z]{2,20}$/;
const $contactRegex = /^[0-9]{10}$/;
const $emailIdRegEx = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,8}\b$/i;

function getErrorString(inpText, regex, fieldName) {
  let caution;
  if (!regex.test(inpText)) caution = "invalid";
  if (!inpText) caution = "required";
  if (caution)
    return fieldName ? `${fieldName} is ${caution} !!!` : `Invalid Input!!!`;
  return "";
}

function keyChecker(asciiValue, errorDomSelector, acceptableRanges) {
  let isCorrect = false;
  for (let i = 0; i < acceptableRanges.length; i++) {
    if (
      acceptableRanges[i].length == 2 &&
      asciiValue >= acceptableRanges[i][0] &&
      asciiValue <= acceptableRanges[i][1]
    ) {
      isCorrect = true;
      break;
    }
  }
  $(errorDomSelector).html(isCorrect ? "" : "Invalid Key Pressed !!");
  return isCorrect;
}

$(document).ready(function () {
  // blur events
  $("#firstName").blur(function () {
    $("#firstNameErr").html(
      getErrorString($(this).val(), $nameRegex, "First name")
    );
  });
  $("#lastName").blur(function () {
    $("#lastNameErr").html(
      getErrorString($(this).val(), $nameRegex, "Last name")
    );
  });
  $("#email").blur(function () {
    $("#emailErr").html(
      getErrorString($(this).val(), $emailIdRegEx, "Email Id")
    );
  });
  $("#contact").blur(function () {
    $("#contactErr").html(
      getErrorString($(this).val(), $contactRegex, "Contact")
    );
  });

  // key up events
  $("#firstName").keypress(function (e) {
    return keyChecker(e.which, "#firstNameErr", [
      [65, 90],
      [97, 121],
    ]);
  });
  $("#lastName").keypress(function (e) {
    return keyChecker(e.which, "#lastNameErr", [
      [65, 90],
      [97, 121],
    ]);
  });
  $("#contact").keypress(function (e) {
    return keyChecker(e.which, "#contactErr", [[48, 57]]);
  });

  // submit button click
  $("#btnSubmit").click(function () {
    let errorMessage =
      getErrorString($("#firstName").val(), $nameRegex, "First name") ||
      getErrorString($("#lastName").val(), $nameRegex, "Last name") ||
      getErrorString($("#email").val(), $emailIdRegEx, "Email Id") ||
      getErrorString($("#contact").val(), $contactRegex, "Contact");
    if (errorMessage) alert(errorMessage);
    else if (
      confirm(
        "Data seems correct. Are you sure you want to proceed? You cannot edit this later on !!"
      )
    ) {
      console.log("Posted To Server");
    }
  });
});
