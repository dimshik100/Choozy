
function askUserToRemoveAds() {
  swal({
    title: "Remove ads?",
    text: "View Choozy video ad, and all other ads will be removed.",
    showCancelButton: true,
    cancelButtonText: "",
    confirmButtonColor: "#f2c802",
    confirmButtonText: "Yes, remove ads!",
    closeOnConfirm: false,
    closeOnCancel: false,
    imageUrl: "images/choozy.png"
  },
    function (isConfirm) {
      if (isConfirm) {
        removeAds();
        swal("Removed!", "All ads were removed for this session", "success");
        $('.choozy-btn').hide('slow');
      } else {
        showAds();
        $('.choozy-btn').show('slow');
        swal("Remember", "You can still remove the ads by clicking the Choozy button", "info");
      }
    });
}

function showAds() {
  $('.add_banner').html('<a href="#"><img src="images/addbanner_728x90_V1.jpg" alt=""></a>');
  $('.sideAdd').html('<img src="images/add_img.jpg" alt="">');
}

function removeAds() {
  $('.add_banner').html('');
  $('.sideAdd').html('');
}


askUserToRemoveAds();

$('.choozy-btn').on('click',askUserToRemoveAds);

