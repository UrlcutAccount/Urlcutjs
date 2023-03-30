<h1 align="center">Urlcutjs</h1>
<h3 align="center">This is the official Urlcut NPM package.</h3>
<h2>How to use -</h2>
<pre>
const UrlcutClient = require('urlcutjs');
const Client = new UrlcutClient("API-Key");
</pre>
<br>
<h2>How to create a new short link -</h2>
<pre>
const UrlcutClient = require('urlcutjs');
const Client = new UrlcutClient("API-Key");
<br>Client.Create('https://www.example.com')
    .then(data => console.log(data))
    .catch(error => console.error(error));
</pre>
<br>
Output:
<pre>
{
  success: true,
  shortened: 'CxTYCb',
  domain: 'urlcut.app',
  credits: 0.4
}
</pre>
<br>
<h2>How to delete an existing short link -</h2>
<pre>
const UrlcutClient = require('urlcutjs');
const Client = new UrlcutClient("API-Key");
<br>Client.Delete('Example-Short')
    .then(data => console.log(data))
    .catch(error => console.error(error));
</pre>
<br>
Output:
<pre>
{
  success: true,
}
</pre>
<br>
<hr>
<p align="center">Made by <a href="https://urlcut.app">Urlcut</a></p>
<hr>
