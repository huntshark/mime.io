$(document).ready(function () {
  /* 导航菜单 选中高亮 */
  var targets = ['categories', 'tags', 'laboratory', 'books', 'about', 'histories', 'collections'];
  var target;

  var paths = location.href.split('/');
  var lastPathElem = paths.pop();
  var joinOtherPath = paths.join('/');

  if (location.origin === joinOtherPath && lastPathElem === '') {
    target = 'home';
  } else {
    if (lastPathElem === '' && paths[paths.length - 1] === 'about') {
      lastPathElem = 'about';
    }

    var idx = targets.indexOf(lastPathElem);

    if (idx >= 0) {
      target = targets[idx];
    }
  }

  $('ul.nav > li').removeClass('active');
  if (target) {
    $('ul.nav > li[data-target="' + target + '"]').addClass('active');
  }

  /* 导航菜单 */
  $(".mobile-navbar-close-icon").on('click', function() {
    $(".dot-mobile-navbar").removeClass('in');
  });
});
