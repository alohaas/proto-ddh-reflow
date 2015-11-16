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

  init: function init() {
    var $nav = $('#proto-ddh').find('#proto-nav');
    var navTop = this.getTop($nav);

    this.scrollSwitch($nav, 'proto-nav--fixed', navTop);
  }
};

module.exports = App;
