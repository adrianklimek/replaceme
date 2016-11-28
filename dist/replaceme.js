/*!
 *  replaceme.js - text rotating component in vanilla JavaScript
 *  @version 1.1.0
 *  @author Adrian Klimek
 *  @link https://adrianklimek.github.io/replaceme/
 *  @copyright Adrian Klimek 2016
 *  @license MIT
 */
(function(window, $){
    'use strict';

    // Extend defaults
    function extend(target, values) {
        for (var P in values) {
            if (values.hasOwnProperty(P)) {    
                target[P] = values[P];
            }
        }
        return target;
    }

    // Make jQuery component 
    function jqueryComponent() {
        if (typeof $ == 'function') {
            $.fn.extend({
                ReplaceMe: function(options){
                    return this.each(function(){
                        new ReplaceMe(this, options);
                    });
                }
            });
        }
    }

    // Constructor
    function ReplaceMe(element, options) {
        // Defaults  
        var defaults = {
            animation: 'animated fadeIn',                       // String (animation class)
            speed: 2000,                                        // Integer
            separator: ',',                                     // String
            hoverStop: false,                                   // Boolen
            clickChange: false,                                 // Boolen
            loopCount: 'infinite',                              // String or integer
            autoRun: true,                                      // Boolen
            onInit: false,                                      // Function
            onChange: false,                                    // Function
            onComplete: false                                   // Function
        };
        
        // Extend defaults
        if (typeof options == 'object') {
            this.options = extend(defaults, options);
        }
        else {
            this.options = defaults;
        }

        // Get element
        if (typeof element == 'undefined'){
            throw new Error('ReplaceMe [constructor]: "element" parameter is required');
        }
        else if (typeof element == 'object') {
            this.element = element;
        }
        else if (typeof element == 'string') {
            this.element = document.querySelector(element);
        }
        else {
            throw new Error('ReplaceMe [constructor]: wrong "element" parameter');
        }

        this.init();
    }

    ReplaceMe.prototype.init = function() {
        if (typeof this.options.onInit == 'function') {
            this.options.onInit();
        }

        this.words = this.escapeHTML(this.element.innerHTML).split(this.options.separator);
        this.count = this.words.length;
        this.position = this.loopCount = 0;
        this.running = false;

        this.bindAll();

        if (this.options.autoRun === true) {
            this.start();
        }
    };

    ReplaceMe.prototype.bindAll = function() {
        if (this.options.hoverStop === true) {
            this.element.addEventListener("mouseover", this.pause.bind(this));
            this.element.addEventListener("mouseout", this.start.bind(this));
        }
        if (this.options.clickChange === true) {
            this.element.addEventListener("click", this.change.bind(this));
        }
    };

    ReplaceMe.prototype.changeAnimation = function() {
        this.change();
        this.loop = setTimeout(this.changeAnimation.bind(this), this.options.speed);
    };

    ReplaceMe.prototype.start = function() {
        if (this.running !== true) {
            this.running = true;
            this.changeWord(this.words[this.position]);
            this.position++;
        }
        this.loop = setTimeout(this.changeAnimation.bind(this), this.options.speed);
    };

    ReplaceMe.prototype.change = function() {
        if (this.position > this.count-1) {
            this.position = 0;
            this.loopCount++;
            if (this.loopCount >= this.options.loopCount) {
                this.stop();
                return;
            }
        }
        this.changeWord(this.words[this.position]);
        this.position++;
        if (typeof this.options.onChange == 'function') {
            this.options.onChange();
        }
    };

    ReplaceMe.prototype.stop = function() {
        this.running = false;
        this.position = this.loopCount = 0;
        this.pause();
        if (typeof this.options.onComplete == 'function') {
            this.options.onComplete();
        }
    };

    ReplaceMe.prototype.pause = function() {
        clearTimeout(this.loop);
    };

    ReplaceMe.prototype.changeWord = function(word) {
        this.element.innerHTML = '<span class="' + this.options.animation + '" style="display:inline-block;">' + word + '</span>';
    };

    // If there is html tag inside string delete it
    ReplaceMe.prototype.escapeHTML = function(string) {
        var reg = /<\/?\w+\s*[^>]*>/g;
        if(reg.test(string) === true) { 
            return string.replace(reg, '');
        }
        return string;
    };

    window.ReplaceMe = ReplaceMe;
    jqueryComponent();
}(window, window.jQuery));

