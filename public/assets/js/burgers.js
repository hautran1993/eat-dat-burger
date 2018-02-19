$(document).on("click", ".del-btn", function(e) {
  $.ajax({
      url: `api/devour/${$(this).attr("data-id")}`,
      method: "PUT"
  }).then(data => {
      location.reload(true);
  });
});//ending of document click function no need for a document.ready this way

$(document).on("click", "#submit-btn", function(e) {
  const burger = {
      name: $("#burger-input").val().trim()
  }
  $.post(`api/new`, burger, (data) => {
      location.reload(true);
  });
});//end of document click function
