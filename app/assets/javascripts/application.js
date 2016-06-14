// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require react_ujs
//= require materialize/materialize
//= require numeral/numeral
//= require numeral/languages
//= require string/string
//= require jquery-serialize-object/jquery.serialize-object
//= require jquery.inputmask/jquery.inputmask.bundle
//= require realize-js/realize.min
//= require configure
//= require translations
//= require_dir ./components
//= require_tree .

numeral.language('pt-br');
Realize.i18n.setLocale('pt-BR');
