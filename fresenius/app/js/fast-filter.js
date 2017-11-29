/**
 * fastLiveFilter jQuery plugin 1.0.3
 * 
 * Copyright (c) 2011, Anthony Bush
 * License: <http://www.opensource.org/licenses/bsd-license.php>
 * Project Website: http://anthonybush.com/projects/jquery_fast_live_filter/
 **/

jQuery.fn.fastLiveFilter = function(list, select, options) {
// Options: input, list, timeout, callback
options = options || {};
list = jQuery(list);
var input = this;
var select = select;
var timeout = options.timeout || 0;
var callback = options.callback || function() {};

var keyTimeout;

// NOTE: because we cache lis & len here, users would need to re-init the plugin
// if they modify the list in the DOM later.  This doesn't give us that much speed
// boost, so perhaps it's not worth putting it here.
var lis = list.children();
var len = lis.length;
var oldDisplay = len > 0 ? lis[0].style.display : "block";
callback(len); // do a one-time callback on initialization to make sure everything's in sync


input.change(function() {
// first, toggle the profile off, and show the directory list
$("#faculty_directory_list").show();
$("#faculty_profile").hide();

// now get the results
var filter = input.val().toLowerCase();
var li;
var numShown = 0;
for (var i = 0; i < len; i++) {
	li = lis[i];
	if ((li.textContent || li.innerText || "").toLowerCase().indexOf(filter) >= 0) {
		if (li.style.display == "none") {
			li.style.display = oldDisplay;
		}
		numShown++;
	} else {
		if (li.style.display != "none") {
			li.style.display = "none";
		}
	}
}
$('.count').show();
callback(numShown);
return false;
}).keydown(function() {
// TODO: one point of improvement could be in here: currently the change event is
// invoked even if a change does not occur (e.g. by pressing a modifier key or
// something)
clearTimeout(keyTimeout);
keyTimeout = setTimeout(function() { input.change(); }, timeout);
});

return this; // maintain jQuery chainability
}