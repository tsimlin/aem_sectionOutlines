// Replacement for nicer Titles
var sectionNames = {
		"accordion": "Accordion",
		"accordionitem":"Accordion Item",
		"carousel":"Carousel",
		"downloaditem":"Downloaditem"
}

//create title spans
$.each($("div.section"), function () {
	var classNames = $(this).attr("class").split(" ");
	var foundItem = false;
	
	if(!$(this).hasClass("new")){
		for (item in classNames) {
			if(sectionNames.hasOwnProperty(classNames[item])) {
				$(this).prepend("<span class='compTitle'>" + sectionNames[classNames[item]] + "</span>");
				foundItem = true;
				break;
			} 
		}
		
		if(foundItem==false) {
			$(this).prepend("<span class='compTitle'>" + classNames.toString() + "</span>");
		}
	}
});