/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var Routine = require( './routine.js' );


// MAIN //

/**
* WebAssembly module to apply a modified Givens plane rotation.
*
* @name drotm
* @type {Routine}
*
* @example
* var Float64Array = require( '@stdlib/array-float64' );
*
* // Define strided arrays:
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );
* var param = new Float64Array( [ 0.0, 0.0, 2.0, -3.0, 0.0 ] );
*
* // Perform operation:
* drotm.main( x.length, x, 1, y, 1, param );
* // x => <Float64Array>[ -2.0, -1.0, 0.0, 1.0, 2.0 ]
* // y => <Float64Array>[ 3.0, 5.0, 7.0, 9.0, 11.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array-float64' );
*
* // Define strided arrays:
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );
* var param = new Float64Array( [ 0.0, 0.0, 2.0, -3.0, 0.0 ] );
*
* // Perform operation:
* drotm.ndarray( x.length, x, 1, 0, y, 1, 0, param );
* // x => <Float64Array>[ -2.0, -1.0, 0.0, 1.0, 2.0 ]
* // y => <Float64Array>[ 3.0, 5.0, 7.0, 9.0, 11.0 ]
*/
var drotm = new Routine();
drotm.initializeSync(); // eslint-disable-line node/no-sync


// EXPORTS //

module.exports = drotm;
