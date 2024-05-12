// static/scripts/1-hbnb.js

$(document).ready(function() {
  // Variable to store selected Amenity IDs
  var selectedAmenities = {};

  // Listen for changes on each input checkbox tag
  $('input[type="checkbox"]').change(function() {
    var amenityId = $(this).data('id');
    var amenityName = $(this).data('name');

    // If the checkbox is checked, store the Amenity ID in the variable
    if ($(this).prop('checked')) {
      selectedAmenities[amenityId] = amenityName;
    } else {
      // If the checkbox is unchecked, remove the Amenity ID from the variable
      delete selectedAmenities[amenityId];
    }

    // Update the h4 tag inside the div Amenities with the list of Amenities checked
    var amenitiesList = Object.values(selectedAmenities).join(', ');
    $('.filters .amenities h4').text('Selected Amenities: ' + amenitiesList);
  });
});
