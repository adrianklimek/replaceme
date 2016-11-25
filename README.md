# ReplaceMe
<p><a href="https://github.com/adrianklimek/replaceme">ReplaceMe.js</a> is a lightweight JavaScript component for text rotating. No dependency needed, but it also works well with jQuery.</p>

<h2>Bower</h2>
<p>To install via Bower, simply do the following:</p>
<pre><code>$ bower install replaceme --save</code></pre>

<h2>Usage</h2>
<p>1. Add <a href="https://daneden.github.io/animate.css/">animate.css</a> or other animations library to head of the document</p>

<p>2. Set up html</p>
<pre><code class="html">&lt;p&gt;I am &lt;span class=&quot;replace-me&quot;&gt;Designer,Developer,Photographer&lt;/span&gt;&lt;/p&gt;</code></pre>

<p><i>Also, you can put other values in hidden span to show only first value in case something goes wrong or javascript is disabled.</i></p>
<pre><code class="html">&lt;p&gt;I am &lt;span class=&quot;replace-me&quot;&gt;Designer&lt;span style=&quot;display:none&quot;&gt;,Developer,Photographer&lt;/span&gt;&lt;/span&gt;&lt;/p&gt;</code></pre>

<p>3. Add <a href="https://github.com/adrianklimek/ReplaceMe/">replaceme.js</a> at the bottom of the document body and set up javascript</p>
<pre><code class="html">&lt;script src=&quot;replaceme.min.js&quot;&gt;&lt;/script&gt;&lt;script&gt;
    var replace = new ReplaceMe();
&lt;/script&gt;</code></pre>

<p>If you want to declare custom options: </p>
<pre><code class="html">&lt;script src=&quot;replaceme.min.js&quot;&gt;&lt;/script&gt;
&lt;script&gt;
var replace = new ReplaceMe({
    element: document.querySelector('.replace-me'),     // DOM element or query selector 
    animation: 'animated fadeIn',                       // Animation class or classes
    speed: 2000,                                        // Delay between each phrase in miliseconds
    separator: ',',                                     // Phrases separator
    hoverStop: false,                                   // Stop rotator on phrase hover
    clickChange: false,                                 // Chnage phrase on click
    loopCount: 'infinite',                              // Loop Count - 'infinite' or number
    autoRun: true,                                      // Run rotator automatically
    onInit: false,                                      // Function
    onChange: false,                                    // Function
    onComplete: false                                   // Function
});
&lt;/script&gt;</code></pre>
<p>Also you can use jQuery: </p>
<pre><code class="html">&lt;script src=&quot;replaceme.min.js&quot;&gt;&lt;/script&gt;
&lt;script&gt;
    var replace = $('.replace-me').ReplaceMe();
&lt;/script&gt;</code></pre>

<h2>Methods</h2>
<p>There are four methods to use:</p>
<pre><code class="js">var replace = new ReplaceMe();
replace.start(); // use this to start or unpause
replace.stop(); // use this to stop
replace.pause(); // use this to pause
replace.change(); // use this to change phrase</code></pre>

<h2>Browser Support</h2>
<p>All modern browsers and IE10+ due to css animations. In IE8 & IE9 rotator works but without animations.</p>

<h2>License</h2>
<p><a href="https://github.com/adrianklimek/ReplaceMe">ReplaceMe.js</a> is licensed under the <a href="http://opensource.org/licenses/MIT">MIT license</a></p>

