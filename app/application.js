"use strict";

var $ = require('./jquery');

var App = {
  getTop: function(element) {
    var topValue = element.offset().top;
    return topValue;
  },

  scrollSwitch: function(target, className, topValue) {
    var windowOffset = $(window).scrollTop();

    $(window).on('scroll', function(e) {
      var scrollPos = $(this).scrollTop();
      scrollPos > topValue ? target.addClass(className) : target.removeClass(className);
    });
  },

  toggleCounter: function($el) {
    $el.on('click', '.type-toggle-item', function() {
      var $target = $(this).parent('.type-toggle-items'),
          i = $(this).index();
      return $target.attr('data-loc', i);
    });
  },

  init: function init() {
    var $nav = $('#proto-ddh').find('#proto-nav');
    var navTop = this.getTop($nav);
    var $toggle = $('#ia-type-toggle');

    this.scrollSwitch($nav, 'proto-nav--fixed', navTop);
    this.toggleCounter($toggle);
  }
};

module.exports = App;
