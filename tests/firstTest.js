describe('Basic usage', function() {
	it('should modify color', function() {
		var n = document.createElement('p');
		n.id = "colorPar";
		document.body.appendChild(n);
		
		expect(n.style.color).toBe('');
		_('colorPar').color('red');
		expect(n.style.color).toBe('red');
	});
	
	it('should change text', function(){
		var n = document.createElement('p');
		n.id = "colorPar";
		document.body.appendChild(n);
		
		expect(_('colorPar').text()).toBe('');
		_('colorPar').text('Changed');
		expect(_('colorPar').text()).toBe('Changed');
	});
});