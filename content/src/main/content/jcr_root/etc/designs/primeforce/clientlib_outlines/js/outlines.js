// Replacement for nicer Titles
var sectionNames = {
		"accordion": "Accordion",
		"accordionitem":"Accordion Item",
		"carousel":"Carousel",
		"downloaditem":"Downloaditem"
}

$(document).ready(initTitleSpans);

//create title spans
function initTitleSpans () {
	$.each($("div.section"), function () {
		processDivForTitleSpan(this);
	});
	
	$( document ).on( "DOMNodeInserted", function( e ) {
		if($(e.target).hasClass("section")) { 
			processDivForTitleSpan($(e.target));
		}
	});
}

function processDivForTitleSpan(obj) {
	var classNames = $(obj).attr("class").split(" ");
	
	if(!$(obj).hasClass("new") && $(obj).find(".compTitle").length == 0) {
		addTitleSpan(obj, getTitleByClasses(classNames));
	}
}

function getTitleByClasses(classNames) {
	for (item in classNames) {
		if(sectionNames.hasOwnProperty(classNames[item])) {
			return sectionNames[classNames[item]];
		} 
	}
	return classNames;
}

function addTitleSpan(obj,txt) {
	$(obj).prepend("<span class='compTitle'>" + txt + "</span>");
}