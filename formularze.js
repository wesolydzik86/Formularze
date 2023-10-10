  document.addEventListener('DOMContentLoaded', function () {
        // Initialize the datepicker with Polish translations
        var datePickerInput = document.getElementById('termin');
        M.Datepicker.init(datePickerInput, {
            format: 'yyyy-mm-dd',
            i18n: {
                months: [
                    'Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec',
                    'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'
                ],
                monthsShort: [
                    'Sty', 'Lut', 'Mar', 'Kwi', 'Maj', 'Cze',
                    'Lip', 'Sie', 'Wrz', 'Paź', 'Lis', 'Gru'
                ],
                weekdays: [
                    'Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'
                ],
                weekdaysShort: ['Nd', 'Pn', 'Wt', 'Śr', 'Cz', 'Pt', 'Sb'],
                weekdaysAbbrev: ['N', 'P', 'W', 'Ś', 'C', 'P', 'S'],
                cancel: 'Anuluj',
                clear: 'Wyczyść',
                done: 'Gotowe'
            }
        });

        // Add a click event listener to open the datepicker modal on input field click
        datePickerInput.addEventListener('click', function () {
            var instance = M.Datepicker.getInstance(datePickerInput);
            instance.open();
        });
    });
		
		    document.addEventListener('DOMContentLoaded', function () {
            // Initialize the timepicker
            var timepickerInput = document.getElementById('godzina');
            M.Timepicker.init(timepickerInput);

            // Add a click event listener to open the timepicker on input field click
            timepickerInput.addEventListener('click', function () {
                var instance = M.Timepicker.getInstance(timepickerInput);
                instance.open();
            });
        });


//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

$(".next").click(function() {
  if (animating) return false;
  animating = true;

  current_fs = $(this).parent();
  next_fs = $(this).parent().next();

  //activate next step on progressbar using the index of next_fs
  $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

  //show the next fieldset
  next_fs.show();
  //hide the current fieldset with style
  current_fs.animate({
    opacity: 0
  }, {
    step: function(now, mx) {
      //as the opacity of current_fs reduces to 0 - stored in "now"
      //1. scale current_fs down to 80%
      scale = 1 - (1 - now) * 0.2;
      //2. bring next_fs from the right(50%)
      left = (now * 50) + "%";
      //3. increase opacity of next_fs to 1 as it moves in
      opacity = 1 - now;
      current_fs.css({
        'transform': 'scale(' + scale + ')'
      });
      next_fs.css({
        'left': left,
        'opacity': opacity
      });
    },
    duration: 800,
    complete: function() {
      current_fs.hide();
      animating = false;
    },
    //this comes from the custom easing plugin
    easing: 'easeInOutBack'
  });
});

$(".previous").click(function() {
  if (animating) return false;
  animating = true;

  current_fs = $(this).parent();
  previous_fs = $(this).parent().prev();

  //de-activate current step on progressbar
  $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

  //show the previous fieldset
  previous_fs.show();
  //hide the current fieldset with style
  current_fs.animate({
    opacity: 0
  }, {
    step: function(now, mx) {
      //as the opacity of current_fs reduces to 0 - stored in "now"
      //1. scale previous_fs from 80% to 100%
      scale = 0.8 + (1 - now) * 0.2;
      //2. take current_fs to the right(50%) - from 0%
      left = ((1 - now) * 50) + "%";
      //3. increase opacity of previous_fs to 1 as it moves in
      opacity = 1 - now;
      current_fs.css({
        'left': left
      });
      previous_fs.css({
        'transform': 'scale(' + scale + ')',
        'opacity': opacity
      });
    },
    duration: 800,
    complete: function() {
      current_fs.hide();
      animating = false;
    },
    //this comes from the custom easing plugin
    easing: 'easeInOutBack'
  });
});

$(".submit").click(function() {
  preventDefault();
})
