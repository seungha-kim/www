$(document).ready(function() {
  $('[role="tab"]').on('click', function(e) {
    e.preventDefault();
    $(this).attr('aria-selected', true).siblings().attr('aria-selected', false);
    var selectedId = "#" + $(this).attr('aria-controls');
    $(selectedId).addClass('tabpanel-open').siblings().removeClass('tabpanel-open');
  });
});