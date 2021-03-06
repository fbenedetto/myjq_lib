/**
 * Create the element extracting it from DOM by id
 * @constructor
 * @param {Number} id
 * @returns {Object} dom element
 */
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
	/**
	 * Hide the DOM element
	 * @returns {Object} dom element for chaining
	 */
	hide: function() {
		this.e.style.display = 'none';
		return this;
	},
	/**
	 * Show the DOM element
	 * @returns {Object} dom element
	 */
	show: function() {
		this.e.style.display = 'inherit';
		return this;
	},
	/**
	 * Change the background color of DOM element
	 * @param {String} color
	 * @returns {Object} dom element
	 */
	bgcolor: function(color) {
		this.e.style.background = color;
		return this;
	},
	/**
	 * Change the color of DOM element
	 * @param {String} color
	 * @returns {Object} dom element
	 */
	color: function(color) {
		this.e.style.color = color;
		return this;
	},
	/**
	 * Change the value of DOM element
	 * @param {Any} newVal
	 * @returns {Object} dom element
	 */
	val: function(newVal) {
		this.e.value = newVal;
		return this;
	},
	/**
	 * Change the innerHTML of DOM element or return it if no parameter is provided
	 * @param newText
	 * @returns {Any} new innerHTML value
	 */
	text: function(newText) {
		if(newText) {
			this.e.innerHTML = newText;
			return this;
		}
		return this.e.innerHTML;
	},
	/**
	 * toggle the display of DOM elememnt
	 * @returns {Object} dom element
	 */
	toggle: function() {
		if (this.e.style.display !== 'none') {
		 this.e.style.display = 'none';
		} else {
		 this.e.style.display = '';
		}
		return this;
	},
	/**
	 * Change height and weight of DOM element
	 * @param {Integer} height
	 * @param {Integer} weight
	 * @returns {Object} dom element
	 */
	size: function(height, weight) {
		this.e.style.height = height + 'px';
		this.e.style.width = width + 'px';
		return this;
	},
	/**
	 * Add event listener to DOM element
	 * @param {String} event
	 * @param {Function} callback - function to be performed when the event fires
	 */
	addListener: function(event, callback) {
		this.e.addEventListener(event, callback, false);
	},
	/**
	 * Add click event listener to DOM element
	 * @param callback - function to be performed when the event fires
	 */
	click: function(callback) {
		this.addListener('click', callback);
	},
	/**
	 * Add mouse-over event listener to DOM element
	 * @param callback - function to be performed when the event fires
	 */
	mouseOver: function(callback) {
		this.addListener('mouseover', callback);
	}
}