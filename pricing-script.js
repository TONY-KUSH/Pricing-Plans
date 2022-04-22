var cart = "https://idsafe.io";
var imEPLink = cart + "/enroll/?item=idps/essential/individual-1mo";
var imTPLink = cart + "/enroll/?item=idps/total/individual-1mo";
var imPPLink = cart + "/enroll/?item=idps/premium/individual-1mo";
var isEPLink = cart + "/enroll/?item=idps/essential/individual-6mo";
var isTPLink = cart + "/enroll/?item=idps/total/individual-6mo";
var isPPLink = cart + "/enroll/?item=idps/premium/individual-6mo";
var iaEPLink = cart + "/enroll/?item=idps/essential/individual-1yr";
var iaTPLink = cart + "/enroll/?item=idps/total/individual-1yr";
var iaPPLink = cart + "/enroll/?item=idps/premium/individual-1yr";
var fmEPLink = cart + "/enroll/?item=idps/essential/family-1mo";
var fmTPLink = cart + "/enroll/?item=idps/total/family-1mo";
var fmPPLink = cart + "/enroll/?item=idps/premium/family-1mo";
var fsEPLink = cart + "/enroll/?item=idps/essential/family-6mo";
var fsTPLink = cart + "/enroll/?item=idps/total/family-6mo";
var fsPPLink = cart + "/enroll/?item=idps/premium/family-6mo";
var faEPLink = cart + "/enroll/?item=idps/essential/family-1yr";
var faTPLink = cart + "/enroll/?item=idps/total/family-1yr";
var faPPLink = cart + "/enroll/?item=idps/premium/family-1yr";
// Individual Monthly
imEP = "14";
imTP = "19";
imPP = "24";
// Individual Semi-Annual
isEP = "89";
isTP = "119";
isPP = "149";
// Individual Annual
iaEP = "179";
iaTP = "239";
iaPP = "299";
// Family Monthly
fmEP = "19";
fmTP = "24";
fmPP = "29";
// Family Semi-Annual
fsEP = "119";
fsTP = "149";
fsPP = "179";
// Family Annual
faEP = "239";
faTP = "299";
faPP = "359";
// Price Form
billM = "/mo";
billS = "/6mo";
billA = "/yr";

jQuery(document).ready(function ($) {
  $("#ps-inEP").change(function () {
    var selectedInBilling = $(this).val();
    if (selectedInBilling === "month") {
      $("#pr-inEP").text(imEP);
      $("#pr-inTP").text(imTP);
      $("#pr-inPP").text(imPP);
      $(".prfI").text(billM);
      $("#ps-inTP").html(
        "<option value='month'>Billed Monthly</option><option value='semi'>Billed Semi-Annually</option><option value='annual'>Billed Annually</option>"
      );
      $("#ps-inPP").html(
        "<option value='month'>Billed Monthly</option><option value='semi'>Billed Semi-Annually</option><option value='annual'>Billed Annually</option>"
      );
      $("#btn-inEP").attr("href", imEPLink);
      $("#btn-inTP").attr("href", imTPLink);
      $("#btn-inPP").attr("href", imPPLink);
    } else if (selectedInBilling === "semi") {
      $("#pr-inEP").text(isEP);
      $("#pr-inTP").text(isTP);
      $("#pr-inPP").text(isPP);
      $(".prfI").text(billS);
      $("#ps-inTP").html(
        "<option value='semi'>Billed Semi-Annually</option><option value='month'>Billed Monthly</option><option value='annual'>Billed Annually</option>"
      );
      $("#ps-inPP").html(
        "<option value='semi'>Billed Semi-Annually</option><option value='month'>Billed Monthly</option><option value='annual'>Billed Annually</option>"
      );
      $("#btn-inEP").attr("href", isEPLink);
      $("#btn-inTP").attr("href", isTPLink);
      $("#btn-inPP").attr("href", isPPLink);
    } else if (selectedInBilling === "annual") {
      $("#pr-inEP").text(iaEP);
      $("#pr-inTP").text(iaTP);
      $("#pr-inPP").text(iaPP);
      $(".prfI").text(billA);
      $("#ps-inTP").html(
        "<option value='annual'>Billed Annually</option><option value='month'>Billed Monthly</option><option value='semi'>Billed Semi-Annually</option>"
      );
      $("#ps-inPP").html(
        "<option value='annual'>Billed Annually</option><option value='month'>Billed Monthly</option><option value='semi'>Billed Semi-Annually</option>"
      );
      $("#btn-inEP").attr("href", iaEPLink);
      $("#btn-inTP").attr("href", iaTPLink);
      $("#btn-inPP").attr("href", iaPPLink);
    }
  });
  $("#ps-inTP").change(function () {
    var selectedInBilling = $(this).val();
    if (selectedInBilling === "month") {
      $("#pr-inEP").text(imEP);
      $("#pr-inTP").text(imTP);
      $("#pr-inPP").text(imPP);
      $(".prfI").text(billM);
      $("#ps-inEP").html(
        "<option value='month'>Billed Monthly</option><option value='semi'>Billed Semi-Annually</option><option value='annual'>Billed Annually</option>"
      );
      $("#ps-inPP").html(
        "<option value='month'>Billed Monthly</option><option value='semi'>Billed Semi-Annually</option><option value='annual'>Billed Annually</option>"
      );
      $("#btn-inEP").attr("href", imEPLink);
      $("#btn-inTP").attr("href", imTPLink);
      $("#btn-inPP").attr("href", imPPLink);
    } else if (selectedInBilling === "semi") {
      $("#pr-inEP").text(isEP);
      $("#pr-inTP").text(isTP);
      $("#pr-inPP").text(isPP);
      $(".prfI").text(billS);
      $("#ps-inEP").html(
        "<option value='semi'>Billed Semi-Annually</option><option value='month'>Billed Monthly</option><option value='annual'>Billed Annually</option>"
      );
      $("#ps-inPP").html(
        "<option value='semi'>Billed Semi-Annually</option><option value='month'>Billed Monthly</option><option value='annual'>Billed Annually</option>"
      );
      $("#btn-inEP").attr("href", isEPLink);
      $("#btn-inTP").attr("href", isTPLink);
      $("#btn-inPP").attr("href", isPPLink);
    } else if (selectedInBilling === "annual") {
      $("#pr-inEP").text(iaEP);
      $("#pr-inTP").text(iaTP);
      $("#pr-inPP").text(iaPP);
      $(".prfI").text(billA);
      $("#ps-inEP").html(
        "<option value='annual'>Billed Annually</option><option value='month'>Billed Monthly</option><option value='semi'>Billed Semi-Annually</option>"
      );
      $("#ps-inPP").html(
        "<option value='annual'>Billed Annually</option><option value='month'>Billed Monthly</option><option value='semi'>Billed Semi-Annually</option>"
      );
      $("#btn-inEP").attr("href", iaEPLink);
      $("#btn-inTP").attr("href", iaTPLink);
      $("#btn-inPP").attr("href", iaPPLink);
    }
  });
  $("#ps-inPP").change(function () {
    var selectedInBilling = $(this).val();
    if (selectedInBilling === "month") {
      $("#pr-inEP").text(imEP);
      $("#pr-inTP").text(imTP);
      $("#pr-inPP").text(imPP);
      $(".prfI").text(billM);
      $("#ps-inEP").html(
        "<option value='month'>Billed Monthly</option><option value='semi'>Billed Semi-Annually</option><option value='annual'>Billed Annually</option>"
      );
      $("#ps-inTP").html(
        "<option value='month'>Billed Monthly</option><option value='semi'>Billed Semi-Annually</option><option value='annual'>Billed Annually</option>"
      );
      $("#btn-inEP").attr("href", imEPLink);
      $("#btn-inTP").attr("href", imTPLink);
      $("#btn-inPP").attr("href", imPPLink);
    } else if (selectedInBilling === "semi") {
      $("#pr-inEP").text(isEP);
      $("#pr-inTP").text(isTP);
      $("#pr-inPP").text(isPP);
      $(".prfI").text(billS);
      $("#ps-inEP").html(
        "<option value='semi'>Billed Semi-Annually</option><option value='month'>Billed Monthly</option><option value='annual'>Billed Annually</option>"
      );
      $("#ps-inTP").html(
        "<option value='semi'>Billed Semi-Annually</option><option value='month'>Billed Monthly</option><option value='annual'>Billed Annually</option>"
      );
      $("#btn-inEP").attr("href", isEPLink);
      $("#btn-inTP").attr("href", isTPLink);
      $("#btn-inPP").attr("href", isPPLink);
    } else if (selectedInBilling === "annual") {
      $("#pr-inEP").text(iaEP);
      $("#pr-inTP").text(iaTP);
      $("#pr-inPP").text(iaPP);
      $(".prfI").text(billA);
      $("#ps-inEP").html(
        "<option value='annual'>Billed Annually</option><option value='month'>Billed Monthly</option><option value='semi'>Billed Semi-Annually</option>"
      );
      $("#ps-inTP").html(
        "<option value='annual'>Billed Annually</option><option value='month'>Billed Monthly</option><option value='semi'>Billed Semi-Annually</option>"
      );
      $("#btn-inEP").attr("href", iaEPLink);
      $("#btn-inTP").attr("href", iaTPLink);
      $("#btn-inPP").attr("href", iaPPLink);
    }
  });

  $("#ps-fmEP").change(function () {
    var selectedInBilling = $(this).val();
    if (selectedInBilling === "month") {
      $("#pr-fmEP").text(fmEP);
      $("#pr-fmTP").text(fmTP);
      $("#pr-fmPP").text(fmPP);
      $(".prfF").text(billM);
      $("#ps-fmTP").html(
        "<option value='month'>Billed Monthly</option><option value='semi'>Billed Semi-Annually</option><option value='annual'>Billed Annually</option>"
      );
      $("#ps-fmPP").html(
        "<option value='month'>Billed Monthly</option><option value='semi'>Billed Semi-Annually</option><option value='annual'>Billed Annually</option>"
      );
      $("#btn-fmEP").attr("href", fmEPLink);
      $("#btn-fmTP").attr("href", fmTPLink);
      $("#btn-fmPP").attr("href", fmPPLink);
    } else if (selectedInBilling === "semi") {
      $("#pr-fmEP").text(fsEP);
      $("#pr-fmTP").text(fsTP);
      $("#pr-fmPP").text(fsPP);
      $(".prfF").text(billS);
      $("#ps-fmTP").html(
        "<option value='semi'>Billed Semi-Annually</option><option value='month'>Billed Monthly</option><option value='annual'>Billed Annually</option>"
      );
      $("#ps-fmPP").html(
        "<option value='semi'>Billed Semi-Annually</option><option value='month'>Billed Monthly</option><option value='annual'>Billed Annually</option>"
      );
      $("#btn-fmEP").attr("href", fsEPLink);
      $("#btn-fmTP").attr("href", fsTPLink);
      $("#btn-fmPP").attr("href", fsPPLink);
    } else if (selectedInBilling === "annual") {
      $("#pr-fmEP").text(faEP);
      $("#pr-fmTP").text(faTP);
      $("#pr-fmPP").text(faPP);
      $(".prfF").text(billA);
      $("#ps-fmTP").html(
        "<option value='annual'>Billed Annually</option><option value='month'>Billed Monthly</option><option value='semi'>Billed Semi-Annually</option>"
      );
      $("#ps-fmPP").html(
        "<option value='annual'>Billed Annually</option><option value='month'>Billed Monthly</option><option value='semi'>Billed Semi-Annually</option>"
      );
      $("#btn-fmEP").attr("href", faEPLink);
      $("#btn-fmTP").attr("href", faTPLink);
      $("#btn-fmPP").attr("href", faPPLink);
    }
  });
  $("#ps-fmTP").change(function () {
    var selectedInBilling = $(this).val();
    if (selectedInBilling === "month") {
      $("#pr-fmEP").text(fmEP);
      $("#pr-fmTP").text(fmTP);
      $("#pr-fmPP").text(fmPP);
      $(".prfF").text(billM);
      $("#ps-fmEP").html(
        "<option value='month'>Billed Monthly</option><option value='semi'>Billed Semi-Annually</option><option value='annual'>Billed Annually</option>"
      );
      $("#ps-fmPP").html(
        "<option value='month'>Billed Monthly</option><option value='semi'>Billed Semi-Annually</option><option value='annual'>Billed Annually</option>"
      );
      $("#btn-fmEP").attr("href", fmEPLink);
      $("#btn-fmTP").attr("href", fmTPLink);
      $("#btn-fmPP").attr("href", fmPPLink);
    } else if (selectedInBilling === "semi") {
      $("#pr-fmEP").text(fsEP);
      $("#pr-fmTP").text(fsTP);
      $("#pr-fmPP").text(fsPP);
      $(".prfF").text(billS);
      $("#ps-fmEP").html(
        "<option value='semi'>Billed Semi-Annually</option><option value='month'>Billed Monthly</option><option value='annual'>Billed Annually</option>"
      );
      $("#ps-fmPP").html(
        "<option value='semi'>Billed Semi-Annually</option><option value='month'>Billed Monthly</option><option value='annual'>Billed Annually</option>"
      );
      $("#btn-fmEP").attr("href", fsEPLink);
      $("#btn-fmTP").attr("href", fsTPLink);
      $("#btn-fmPP").attr("href", fsPPLink);
    } else if (selectedInBilling === "annual") {
      $("#pr-fmEP").text(faEP);
      $("#pr-fmTP").text(faTP);
      $("#pr-fmPP").text(faPP);
      $(".prfF").text(billA);
      $("#ps-fmEP").html(
        "<option value='annual'>Billed Annually</option><option value='month'>Billed Monthly</option><option value='semi'>Billed Semi-Annually</option>"
      );
      $("#ps-fmPP").html(
        "<option value='annual'>Billed Annually</option><option value='month'>Billed Monthly</option><option value='semi'>Billed Semi-Annually</option>"
      );
      $("#btn-fmEP").attr("href", faEPLink);
      $("#btn-fmTP").attr("href", faTPLink);
      $("#btn-fmPP").attr("href", faPPLink);
    }
  });
  $("#ps-fmPP").change(function () {
    var selectedInBilling = $(this).val();
    if (selectedInBilling === "month") {
      $("#pr-fmEP").text(fmEP);
      $("#pr-fmTP").text(fmTP);
      $("#pr-fmPP").text(fmPP);
      $(".prfF").text(billM);
      $("#ps-fmEP").html(
        "<option value='month'>Billed Monthly</option><option value='semi'>Billed Semi-Annually</option><option value='annual'>Billed Annually</option>"
      );
      $("#ps-fmTP").html(
        "<option value='month'>Billed Monthly</option><option value='semi'>Billed Semi-Annually</option><option value='annual'>Billed Annually</option>"
      );
      $("#btn-fmEP").attr("href", fmEPLink);
      $("#btn-fmTP").attr("href", fmTPLink);
      $("#btn-fmPP").attr("href", fmPPLink);
    } else if (selectedInBilling === "semi") {
      $("#pr-fmEP").text(fsEP);
      $("#pr-fmTP").text(fsTP);
      $("#pr-fmPP").text(fsPP);
      $(".prfF").text(billS);
      $("#ps-fmEP").html(
        "<option value='semi'>Billed Semi-Annually</option><option value='month'>Billed Monthly</option><option value='annual'>Billed Annually</option>"
      );
      $("#ps-fmTP").html(
        "<option value='semi'>Billed Semi-Annually</option><option value='month'>Billed Monthly</option><option value='annual'>Billed Annually</option>"
      );
      $("#btn-fmEP").attr("href", fsEPLink);
      $("#btn-fmTP").attr("href", fsTPLink);
      $("#btn-fmPP").attr("href", fsPPLink);
    } else if (selectedInBilling === "annual") {
      $("#pr-fmEP").text(faEP);
      $("#pr-fmTP").text(faTP);
      $("#pr-fmPP").text(faPP);
      $(".prfF").text(billA);
      $("#ps-fmEP").html(
        "<option value='annual'>Billed Annually</option><option value='month'>Billed Monthly</option><option value='semi'>Billed Semi-Annually</option>"
      );
      $("#ps-fmTP").html(
        "<option value='annual'>Billed Annually</option><option value='month'>Billed Monthly</option><option value='semi'>Billed Semi-Annually</option>"
      );
      $("#btn-fmEP").attr("href", faEPLink);
      $("#btn-fmTP").attr("href", faTPLink);
      $("#btn-fmPP").attr("href", faPPLink);
    }
  });
});
