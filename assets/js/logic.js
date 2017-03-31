
function askUserToRemoveAds() {
  swal({
    title: "Remove ads?",
    text: "View Choozy video ad, and all other ads weill be removed.",
    showCancelButton: true,
    cancelButtonText: "",
    confirmButtonColor: "#f2c802",
    confirmButtonText: "Yes, remove ads!",
    closeOnConfirm: false,
    closeOnCancel: false,
    imageUrl: "images/Choozy.png"
  },

    function (isConfirm) {
      if (isConfirm) {
        swal("Removed!", "All ads were removed for this session", "success");
      } else {
        showAds();
        showChoozyBtn();
        swal("Remember", "You can still remove the ads by clicking the Choozy button", "info");
      }
    });
}



function showChoozyBtn() {

}


function showAds() {
  $('.add_banner').html('<a href="#"><img src="images/addbanner_728x90_V1.jpg" alt=""></a>');
  $('.sideAdd').html('<img src="images/add_img.jpg" alt="">');
}


askUserToRemoveAds();

