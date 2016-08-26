/*!
 * ReplaceMe.js 1.0.0 - Text Rotating Component in Pure JavaScript
 * Copyright 2016 Adrian Klimek
 * Released under the MIT license
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

    function jqueryComponent() {
        if (typeof $ != 'undefined') {
            $.fn.extend({
                ReplaceMe: function(options){
                    return this.each(function(){
                        if (!options) {
                            options = {};
                        }
                        options.element = this;
                        new ReplaceMe(options);
                    });
                }
            });
        }
    }

    // Constructor
    function ReplaceMe() {
        // Defaults  
        var defaults = {
            element: document.querySelector('.replace-me'),     // DOM element or query selector 
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
        if (typeof arguments[0] == 'object') {
            this.options = extend(defaults, arguments[0]);
        }
        else {
            this.options = defaults;
        }

        this.init();
    }

    ReplaceMe.prototype.init = function() {
        if (typeof this.options.onInit == 'function') {
            this.options.onInit();
        }

        this.getElements();
        this.setVariables();
        this.bindAll();

        if (this.options.autoRun === true) {
            this.start();
        }
    };

    ReplaceMe.prototype.getElements = function() {
        if (typeof this.options.element == 'string') {
            this.element = document.querySelector(this.options.element);
        }
        else {
            this.element = this.options.element;
        }
    };

    ReplaceMe.prototype.setVariables = function() {
        this.words = this.testWords(this.element.innerHTML).split(this.options.separator);
        this.count = this.words.length;
        this.position = this.loopCount = 0;
        this.running = false;
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

    // If there is html tag inside words delete it
    ReplaceMe.prototype.testWords = function(words) {
        var reg = /<\/?\w+\s*[^>]*>/g;
        if(reg.test(words) === true) { 
            return words.replace(reg, '');
        }
        return words;
    };
    window.ReplaceMe = ReplaceMe;
    jqueryComponent();
}(window, window.jQuery));

