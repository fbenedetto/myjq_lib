
function _(id) {
	// About object is returned if there is no 'id' parameter
	var about = {
		Version: 1.0,
		Author: "Francesco Benedetto",
		Created: "Fall 2016",
		Updated: "25 September 2016"
	};
	
	if(id) {
		// Avoid clobbering the window scope:
		// return a new _ object if we're in the wrong scope
		if(window === this) {
			return new _(id);
		}
		// We're in the correct object scope:
		// Init our element object and return the object
		this.e = document.getElementById(id);
		return this;
	}
	// No 'id' parameter was given, return the 'about' object
	return about;
}

_.prototype = {
	hide: function() {
		this.e.style.display = 'none';
		return this;
	},
	
	show: function() {
		this.e.style.display = 'inherit';
		return this;
	},
	
	bgcolor: function(color) {
		this.e.style.background = color;
		return this;
	},
	
	color: function(color) {
		this.e.style.color = color;
		return this;
	},
	
	val: function(newVal) {
		this.e.value = newVal;
		return this;
	},
	
	text: function(newText) {
		if(newText) {
			this.e.innerHTML = newText;
			return this;
		}
		return this.e.innerHTML;
	},
	
	toggle: function() {
		if (this.e.style.display !== 'none') {
		 this.e.style.display = 'none';
		} else {
		 this.e.style.display = '';
		}
		return this;
	},
	
	size: function(height, weight) {
		this.e.style.height = height + 'px';
		this.e.style.width = width + 'px';
		return this;
	},
	
	addListener: function(event, callback) {
		this.e.addEventListener(event, callback, false);
	},
	
	click: function(callback) {
		this.addListener('click', callback);
	},
	
	mouseOver: function(callback) {
		this.addListener('mouseover', callback);
	}
}