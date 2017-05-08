//  BACK-END-LOGIC
// PLACE OBJECT CONSTRUCTOR
function Places(nameLocation, placeLocation, landmarkLocation, timeOfYear, notesTips, placeDescription, userName) {
  this.nameLocation = nameLocation;
  this.stateLocation = placeLocation;
  this.landmarkLocation = landmarkLocation;
  this.timeOfYear = timeOfYear;
  this.notesTips = notesTips;
  this.placeDescription = placeDescription;
  this.userName = userName;

}

// Places.prototype.listName = function() {
//   return this.nameLocation;
// }



// FRONT-END-LOGIC
$(document).ready(function() {
  $("form#user-input").submit(function(event) {
    event.preventDefault();
    // USER INPUT FIELDS
    var inputtedNameLocation = $("input#name-location").val();
    var inputtedPlaceLocation = $("input#state-location").val();
    var inputtedLandmarkLocation = $("input#landmark-location").val();
    var inputtedTimeOfYear = $("input#time-of-year").val();
    var inputtedNotesTips = $("input#notes-tips").val();
    var inputtedPlaceDescription = $("input#place-description").val();
    var inputtedUserName = $("input#user-name").val();
    // JAVA OBJECT
    var newPlaces = new Places(inputtedNameLocation, inputtedPlaceLocation, inputtedLandmarkLocation, inputtedTimeOfYear, inputtedNotesTips, inputtedPlaceDescription, inputtedUserName );

    // OUTPUT
    $("#user-places").append("<li><span class='name-location'>" + newPlaces.nameLocation + "</span></li>");
    // FULL "PLACE" DESCRIPTION
    $(".name-location").last().click(function() {
      $("#show-places").show();
      $("#show-places h2").text(newPlaces.nameLocation);
      $(".state-location").text(newPlaces.stateLocation);
      $(".place-location").text(newPlaces.placeLocation);
      $(".landmark-location").text(newPlaces.landmarkLocation);
      $(".time-of-year").text(newPlaces.timeOfYear);
      $(".notes-tips").text(newPlaces.notesTips);
      $(".place-description").text(newPlaces.placeDescription);
      $(".user-name").text(newPlaces.userName);

      // RESET-FIELDS
      $("input#name-location").val("");
      $("input#state-location").val("");
      $("input#landmark-location").val("");
      $("input#time-of-year").val("");
      $("input#notes-tips").val("");
      $("input#place-description").val("");
      $("input#user-name").val("");

    });
  });
});
