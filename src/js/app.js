

/********** Paste your code here! ************/
$(document).ready(function() {
  let isAnimating = false;

  $('.panel-title a').on('click', function(event) {
      if (isAnimating) {
          event.preventDefault();
          return;
      }

      isAnimating = true;
      setTimeout(() => {
          isAnimating = false;
      }, 10000);

      $('.panel-heading').removeClass('active');
      $(this).closest('.panel-heading').addClass('active');
  });

  $('#accordion').on('show.bs.collapse', function(e) {
      let panel = $(e.target).closest('.panel');
      panel.find('.panel-heading').addClass('active');
      panel.addClass('active');
      panel.find('img').attr('src', 'images/accordion_click.png'); // Zmiana obrazu po otwarciu
  });

  $('#accordion').on('hide.bs.collapse', function(e) {
      let panel = $(e.target).closest('.panel');
      panel.find('.panel-heading').removeClass('active');
      panel.removeClass('active');
      panel.find('img').attr('src', 'images/accordion.png'); // Przywrócenie obrazu po zamknięciu
  });

  // Zmiana obrazu pliku na hover
  $('.files p img').hover(
      function() {
          $(this).attr('src', 'images/file_hover.png'); // Zmiana obrazu na hover
      }, 
      function() {
          $(this).attr('src', 'images/file.png'); // Powrót do normalnego obrazu
      }
  );
});
