describe('Basic usage', function() {
	it('should modify color', function() {
		var n = document.createElement('p');
		n.setAttribute('id', 'paragraph');
		
		_('paragraph').color("red");
		expect(n.style.color).toBe('red');
	});
});