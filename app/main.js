// to depend on a bower installed component:
// define(['bower_components/componentName/file'])

define(["jquery", 'app/omitting'], function($, Omitting) {
  $('body').append('jQuery ' + $.fn.jquery + ' loaded!');

  new Omitting();

});
