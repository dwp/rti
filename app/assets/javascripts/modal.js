(function(){

  var lastfocus = "",
      modal     = document.getElementById('modal-id-here') ;

  function modalShow() {
    modal.setAttribute('tabindex', 0);
    modal.focus();
  }

  function modalClose() {
    lastFocus.focus();
  }

  function focusRestrict (event) {
    document.addEventListener('focus', function(event) {
      if (modalOpen && !modal.contains (event.target)){
        event.stopPropagation();
        modal.focus();
      }
    }, true)
  }


})()
