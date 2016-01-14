'use strict';

// MODULES //

var test = require( 'tape' );
var ninf = require( './../lib' );


// TESTS //

test( 'main export is a number', function test( t ) {
	t.ok( typeof ninf === 'number', 'main export is a number' );
	t.end();
});

test( 'export is equal to negative infinity', function test( t ) {
	t.equal( ninf, Number.NEGATIVE_INFINITY, 'equals -infinity' );
	t.end();
});
