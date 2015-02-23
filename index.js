var program = require('commander');
var normalizeUrl = require('normalize-url');
var url = require('url');
var wappalyzer = require('wappalyzer');

program
    .version('1.0.0')
    .parse(process.argv);

if (!program.args.length) {
    program.help();
} else {

    var url_scrape = normalizeUrl(program.args[0])

    var host = url.parse(url_scrape).host;

	var options={
	  url : url_scrape,
	  hostname:host,
	  debug:false
	}

	wappalyzer.detectFromUrl(options,function  (err,apps,appInfo) {
	  if (err) {
	  	console.log("Error fetching the page");
	  }else{
	  	console.log("No of apps detected "+apps.length);
	  	for (var i = 0; i < apps.length; i++) {
	  		console.log(apps[i]);
	  	};
	  }
	})
}

