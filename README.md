# ReplaceMe
<p><a href="https://github.com/adrianklimek/replaceme">ReplaceMe.js</a> is a lightweight text rotator written in vanilla JS, but it can be used with jQuery.</p>

<h2>Bower</h2>
<pre><code>bower install replaceme --save</code></pre>

<h2>Usage</h2>
<p>1. Add <a href="https://daneden.github.io/animate.css/">animate.css</a> or any animations library to the head of a document</p>

<p>2. Set up html</p>
<pre><code class="html">&lt;p&gt;I am &lt;span class=&quot;replace-me&quot;&gt;Designer,Developer,Photographer&lt;/span&gt;&lt;/p&gt;</code></pre>

<p><i>Also, you can put other values in hidden span</i></p>
<pre><code class="html">&lt;p&gt;I am &lt;span class=&quot;replace-me&quot;&gt;Designer&lt;span style=&quot;display:none&quot;&gt;,Developer,Photographer&lt;/span&gt;&lt;/span&gt;&lt;/p&gt;</code></pre>

<p>3. Add <a href="https://github.com/adrianklimek/ReplaceMe/">replaceme.js</a> at the bottom of a document's body and set up javascript</p>
<pre><code class="html">&lt;script src=&quot;replaceme.min.js&quot;&gt;&lt;/script&gt;&lt;script&gt;
    var replace = new ReplaceMe(document.querySelector('.replace-me'));
&lt;/script&gt;</code></pre>

<p>If you want to declare custom options: </p>
<pre><code class="html">&lt;script src=&quot;replaceme.min.js&quot;&gt;&lt;/script&gt;
&lt;script&gt;
var replace = new ReplaceMe(document.querySelector('.replace-me'), {
    animation: 'animated fadeIn',                       // Animation class or classes
    speed: 2000,                                        // Delay between each phrase in miliseconds
    separator: ',',                                     // Phrases separator
    hoverStop: false,                                   // Stop rotator on phrase hover
    clickChange: false,                                 // Change phrase on click
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
<pre><code class="js">var replace = new ReplaceMe();
replace.start();
replace.stop();
replace.pause();
replace.change();</code></pre>

<h2>Browser Support</h2>
<p>All modern browsers and IE10+</p>

<h2>License</h2>
<p><a href="https://github.com/adrianklimek/ReplaceMe">ReplaceMe.js</a> is licensed under the <a href="http://opensource.org/licenses/MIT">MIT license</a></p>

