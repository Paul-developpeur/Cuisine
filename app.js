document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      direction: 'left'
    });
    $('.meal').hide();
    $('.pastry').hide();
    $('.juice').hide(); 
    function showMeal(){
      $('.ShowMeal').click(function(){
        $('.PageContent').hide(1000, function(){
          $('.meal').show(1000);
          if($('.meal').show()){
            $('.ShowPastry').click(function(){
              $('.meal').hide(1000);
              $('.pastry').show(1000);
            });
            $('.ShowJuice').click(function(){
              $('.meal').hide(1000);
              $('.juice').show(1000);
            });
          }
        });
      });
    }
    showMeal();
    function showPastry(){
      $('.ShowPastry').click(function(){
        $('.PageContent').hide(1000, function(){
          $('.pastry').show(1000);
          $('#charlotte').click(function(){
            $('.pastry').hide(10000);
          });
          if($('.pastry').show()){
            $('.ShowMeal').click(function(){
              $('.pastry').hide(1000);
              $('.meal').show(1000);
            });
            $('.ShowJuice').click(function(){
              $('.pastry').hide(1000);
              $('.juice').show(1000);
            });
          }
        });
      });
    }
    showPastry();
    function showJuice(){
      $('.ShowJuice').click(function(){
        $('.PageContent').hide(1000, function(){
          $('.juice').show(1000);
          if($('.juice').show()){
            $('.ShowMeal').click(function(){
              $('.juice').hide(1000);
              $('.meal').show(1000);
            });
            $('.ShowPastry').click(function(){
              $('.juice').hide(1000);
              $('.pastry').show(1000);
            });
          }
        });
      });
    }
    showJuice();
});