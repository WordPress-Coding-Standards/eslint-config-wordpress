'use strict';

const isPlainObj = require( 'is-plain-obj' );

test( 'index.js', () => {
	const conf = require( '../index.js' );
	expect( isPlainObj( conf ) ).toBe( true );
	expect( isPlainObj( conf.env ) ).toBe( true );
	expect( isPlainObj( conf.globals ) ).toBe( true );
	expect( isPlainObj( conf.rules ) ).toBe( true );
});
