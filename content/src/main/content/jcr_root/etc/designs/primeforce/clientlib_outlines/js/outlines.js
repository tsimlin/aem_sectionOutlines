var pfOutlines = {
	sectionNames: {
			"accordion": "Accordion",
			"accordionitem":"Accordion Item",
			"carousel":"Carousel",
			"downloaditem":"Downloaditem"
	},
	
	initTitleSpans : function () {
		$.each($("div.section"), function () {
			pfOutlines.processDivForTitleSpan(this);
		});
		
		pfOutlines.checkNewSections();
	}, 
	
	processDivForTitleSpan: function (obj) {
		var classNames = $(obj).attr("class").split(" ");
		
		if(!$(obj).hasClass("new") && $(obj).find(".compTitle").length == 0) {
			pfOutlines.addTitleSpan(obj, pfOutlines.getTitleByClasses(classNames));
		}
	},
	
	getTitleByClasses: function (classNames) {
		for (item in classNames) {
			if(pfOutlines.sectionNames.hasOwnProperty(classNames[item])) {
				return pfOutlines.sectionNames[classNames[item]];
			} 
		}
		return classNames;
	},
	
	checkNewSections: function () {
		$( document ).on( "DOMNodeInserted", function( e ) {
			if($(e.target).hasClass("section")) { 
				pfOutlines.processDivForTitleSpan($(e.target));
			}
		});
	},
	
	addTitleSpan: function (obj,txt) {
		$(obj).prepend("<span class='compTitle'>" + txt + "</span>");
	}
};
pfOutlines.initTitleSpans();