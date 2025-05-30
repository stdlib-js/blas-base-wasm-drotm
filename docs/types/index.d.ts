/*
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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { ModuleWrapper, Memory } from '@stdlib/types/wasm';

/**
* Interface defining a module constructor which is both "newable" and "callable".
*/
interface ModuleConstructor {
	/**
	* Returns a new WebAssembly module wrapper instance which uses the provided WebAssembly memory instance as its underlying memory.
	*
	* @param mem - WebAssembly memory instance
	* @returns module wrapper instance
	*
	* @example
	* var Memory = require( '@stdlib/wasm-memory' );
	* var oneTo = require( '@stdlib/array-one-to' );
	* var ones = require( '@stdlib/array-ones' );
	* var zeros = require( '@stdlib/array-zeros' );
	* var bytesPerElement = require( '@stdlib/ndarray-base-bytes-per-element' );
	*
	* // Create a new memory instance with an initial size of 10 pages (640KiB) and a maximum size of 100 pages (6.4MiB):
	* var mem = new Memory({
	*     'initial': 10,
	*     'maximum': 100
	* });
	*
	* // Create a BLAS routine:
	* var mod = new drotm.Module( mem );
	* // returns <Module>
	*
	* // Initialize the routine:
	* mod.initializeSync();
	*
	* // Define a vector data type:
	* var dtype = 'float64';
	*
	* // Specify a vector length:
	* var N = 5;
	*
	* // Define pointers (i.e., byte offsets) for storing three vectors:
	* var xptr = 0;
	* var yptr = N * bytesPerElement( dtype );
	* var pptr = 2 * N * bytesPerElement( dtype );
	*
	* // Write vector values to module memory:
	* mod.write( xptr, oneTo( N, dtype ) );
	* mod.write( yptr, ones( N, dtype ) );
	* mod.write( pptr, oneTo( N, dtype ) );
	*
	* // Perform computation:
	* var ptr = mod.main( N, xptr, 1, yptr, 1, pptr );
	* // returns <number>
	*
	* var bool = ( ptr === yptr );
	* // returns true
	*
	* // Read out the results:
	* var viewX = zeros( N, dtype );
	* mod.read( xptr, viewX );
	* // viewX => <Float64Array>[ 3.0, 5.0, 7.0, 9.0, 11.0 ]
	*
	* var viewY = zeros( N, dtype );
	* mod.read( yptr, viewY );
	* // viewY => <Float64Array>[ 4.0, 3.0, 2.0, 1.0, 0.0 ]
	*/
	new( mem: Memory ): Module; // newable

	/**
	* Returns a new WebAssembly module wrapper instance which uses the provided WebAssembly memory instance as its underlying memory.
	*
	* @param mem - WebAssembly memory instance
	* @returns module wrapper instance
	*
	* @example
	* var Memory = require( '@stdlib/wasm-memory' );
	* var oneTo = require( '@stdlib/array-one-to' );
	* var ones = require( '@stdlib/array-ones' );
	* var zeros = require( '@stdlib/array-zeros' );
	* var bytesPerElement = require( '@stdlib/ndarray-base-bytes-per-element' );
	*
	* // Create a new memory instance with an initial size of 10 pages (640KiB) and a maximum size of 100 pages (6.4MiB):
	* var mem = new Memory({
	*     'initial': 10,
	*     'maximum': 100
	* });
	*
	* // Create a BLAS routine:
	* var mod = drotm.Module( mem );
	* // returns <Module>
	*
	* // Initialize the routine:
	* mod.initializeSync();
	*
	* // Define a vector data type:
	* var dtype = 'float64';
	*
	* // Specify a vector length:
	* var N = 5;
	*
	* // Define pointers (i.e., byte offsets) for storing three vectors:
	* var xptr = 0;
	* var yptr = N * bytesPerElement( dtype );
	* var pptr = 2 * N * bytesPerElement( dtype );
	*
	* // Write vector values to module memory:
	* mod.write( xptr, oneTo( N, dtype ) );
	* mod.write( yptr, ones( N, dtype ) );
	* mod.write( pptr, oneTo( 5, dtype ) );
	*
	* // Perform computation:
	* var ptr = mod.main( N, xptr, 1, yptr, 1, pptr );
	* // returns <number>
	*
	* var bool = ( ptr === yptr );
	* // returns true
	*
	* // Read out the results:
	* var viewX = zeros( N, dtype );
	* mod.read( xptr, viewX );
	* // viewX => <Float64Array>[ 3.0, 5.0, 7.0, 9.0, 11.0 ]
	*
	* var viewY = zeros( N, dtype );
	* mod.read( yptr, viewY );
	* // viewY => <Float64Array>[ 4.0, 3.0, 2.0, 1.0, 0.0 ]
	*/
	( mem: Memory ): Module; // callable
}

/**
* Interface describing a `drotm` WebAssembly module.
*/
interface Module extends ModuleWrapper {
	/**
	* Applies a modified Givens plane rotation.
	*
	* @param N - number of indexed elements
	* @param xptr - first input array pointer (i.e., byte offset)
	* @param strideX - `x` stride length
	* @param yptr - second input array pointer (i.e., byte offset)
	* @param strideY - `y` stride length
	* @param pptr - parameter array pointer (i.e., byte offset)
	* @returns second input array pointer (i.e., byte offset)
	*
	* @example
	* var Memory = require( '@stdlib/wasm-memory' );
	* var oneTo = require( '@stdlib/array-one-to' );
	* var ones = require( '@stdlib/array-ones' );
	* var zeros = require( '@stdlib/array-zeros' );
	* var bytesPerElement = require( '@stdlib/ndarray-base-bytes-per-element' );
	*
	* // Create a new memory instance with an initial size of 10 pages (640KiB) and a maximum size of 100 pages (6.4MiB):
	* var mem = new Memory({
	*     'initial': 10,
	*     'maximum': 100
	* });
	*
	* // Create a BLAS routine:
	* var mod = new drotm.Module( mem );
	* // returns <Module>
	*
	* // Initialize the routine:
	* mod.initializeSync();
	*
	* // Define a vector data type:
	* var dtype = 'float64';
	*
	* // Specify a vector length:
	* var N = 5;
	*
	* // Define pointers (i.e., byte offsets) for storing three vectors:
	* var xptr = 0;
	* var yptr = N * bytesPerElement( dtype );
	* var pptr = 2 * N * bytesPerElement( dtype );
	*
	* // Write vector values to module memory:
	* mod.write( xptr, oneTo( N, dtype ) );
	* mod.write( yptr, ones( N, dtype ) );
	* mod.write( pptr, ones( 5, dtype ) );
	*
	* // Perform computation:
	* var ptr = mod.main( N, xptr, 1, yptr, 1, pptr );
	* // returns <number>
	*
	* var bool = ( ptr === yptr );
	* // returns true
	*
	* // Read out the results:
	* var viewX = zeros( N, dtype );
	* mod.read( xptr, viewX );
	* // viewX => <Float64Array>[ 2.0, 3.0, 4.0, 5.0, 6.0 ]
	*
	* var viewY = zeros( N, dtype );
	* mod.read( yptr, viewY );
	* // viewY => <Float64Array>[ 0.0, -1.0, -2.0, -3.0, -4.0 ]
	*/
	main( N: number, xptr: number, strideX: number, yptr: number, strideY: number, pptr: number ): number;

	/**
	* Applies a modified Givens plane rotation using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param xptr - first input array pointer (i.e., byte offset)
	* @param strideX - `x` stride length
	* @param offsetX - starting index for `x`
	* @param yptr - second input array pointer (i.e., byte offset)
	* @param strideY - `y` stride length
	* @param offsetY - starting index for `y`
	* @param pptr - parameter array pointer (i.e., byte offset)
	* @returns second input array pointer (i.e., byte offset)
	*
	* @example
	* var Memory = require( '@stdlib/wasm-memory' );
	* var oneTo = require( '@stdlib/array-one-to' );
	* var ones = require( '@stdlib/array-ones' );
	* var zeros = require( '@stdlib/array-zeros' );
	* var bytesPerElement = require( '@stdlib/ndarray-base-bytes-per-element' );
	*
	* // Create a new memory instance with an initial size of 10 pages (640KiB) and a maximum size of 100 pages (6.4MiB):
	* var mem = new Memory({
	*     'initial': 10,
	*     'maximum': 100
	* });
	*
	* // Create a BLAS routine:
	* var mod = new drotm.Module( mem );
	* // returns <Module>
	*
	* // Initialize the routine:
	* mod.initializeSync();
	*
	* // Define a vector data type:
	* var dtype = 'float64';
	*
	* // Specify a vector length:
	* var N = 5;
	*
	* // Define pointers (i.e., byte offsets) for storing three vectors:
	* var xptr = 0;
	* var yptr = N * bytesPerElement( dtype );
	* var pptr = 2 * N * bytesPerElement( dtype );
	*
	* // Write vector values to module memory:
	* mod.write( xptr, oneTo( N, dtype ) );
	* mod.write( yptr, ones( N, dtype ) );
	* mod.write( pptr, ones( 5, dtype ) );
	*
	* // Perform computation:
	* var ptr = mod.ndarray( N, xptr, 1, 0, yptr, 1, 0, pptr );
	* // returns <number>
	*
	* var bool = ( ptr === yptr );
	* // returns true
	*
	* // Read out the results:
	* var viewX = zeros( N, dtype );
	* mod.read( xptr, viewX );
	* // viewX => <Float64Array>[ 2.0, 3.0, 4.0, 5.0, 6.0 ]
	*
	* var viewY = zeros( N, dtype );
	* mod.read( yptr, viewY );
	* // viewY => <Float64Array>[ 0.0, -1.0, -2.0, -3.0, -4.0 ]
	*/
	ndarray( N: number, xptr: number, strideX: number, offsetX: number, yptr: number, strideY: number, offsetY: number, pptr: number ): number;
}

/**
* Interface describing `drotm`.
*/
interface Routine extends ModuleWrapper {
	/**
	* Applies a modified Givens plane rotation.
	*
	* @param N - number of indexed elements
	* @param x - first input array
	* @param strideX - `x` stride length
	* @param y - second input array
	* @param strideY - `y` stride length
	* @param param - parameters for the modified Givens transformation
	* @returns second input array
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var y = new Float64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );
	* var param = new Float64Array( [ 0.0, 0.0, 2.0, -3.0, 0.0 ] );
	*
	* drotm.main( x.length, x, 1, y, 1, param );
	* // x => <Float64Array>[ -2.0, -1.0, 0.0, 1.0, 2.0 ]
	* // y => <Float64Array>[ 3.0, 5.0, 7.0, 9.0, 11.0 ]
	*/
	main( N: number, x: Float64Array, strideX: number, y: Float64Array, strideY: number, param: Float64Array ): Float64Array;

	/**
	* Applies a modified Givens plane rotation using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param x - first input array
	* @param strideX - `x` stride length
	* @param offsetX - starting index for `x`
	* @param y - second input array
	* @param strideY - `y` stride length
	* @param offsetY - starting index for `y`
	* @param param - parameters for the modified Givens transformation
	* @returns second input array
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var y = new Float64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );
	* var param = new Float64Array( [ 0.0, 0.0, 2.0, -3.0, 0.0 ] );
	*
	* drotm.ndarray( x.length, x, 1, 0, y, 1, 0, param );
	* // x => <Float64Array>[ -2.0, -1.0, 0.0, 1.0, 2.0 ]
	* // y => <Float64Array>[ 3.0, 5.0, 7.0, 9.0, 11.0 ]
	*/
	ndarray( N: number, x: Float64Array, strideX: number, offsetX: number, y: Float64Array, strideY: number, offsetY: number, param: Float64Array ): Float64Array;

	/**
	* Returns a new WebAssembly module wrapper instance which uses the provided WebAssembly memory instance as its underlying memory.
	*
	* @param mem - WebAssembly memory instance
	* @returns module wrapper instance
	*
	* @example
	* var Memory = require( '@stdlib/wasm-memory' );
	* var oneTo = require( '@stdlib/array-one-to' );
	* var ones = require( '@stdlib/array-ones' );
	* var zeros = require( '@stdlib/array-zeros' );
	* var bytesPerElement = require( '@stdlib/ndarray-base-bytes-per-element' );
	*
	* // Create a new memory instance with an initial size of 10 pages (640KiB) and a maximum size of 100 pages (6.4MiB):
	* var mem = new Memory({
	*     'initial': 10,
	*     'maximum': 100
	* });
	*
	* // Create a BLAS routine:
	* var mod = new drotm.Module( mem );
	* // returns <Module>
	*
	* // Initialize the routine:
	* mod.initializeSync();
	*
	* // Define a vector data type:
	* var dtype = 'float64';
	*
	* // Specify a vector length:
	* var N = 5;
	*
	* // Define pointers (i.e., byte offsets) for storing three vectors:
	* var xptr = 0;
	* var yptr = N * bytesPerElement( dtype );
	* var pptr = 2 * N * bytesPerElement( dtype );
	*
	* // Write vector values to module memory:
	* mod.write( xptr, oneTo( N, dtype ) );
	* mod.write( yptr, ones( N, dtype ) );
	* mod.write( pptr, oneTo( 5, dtype ) );
	*
	* // Perform computation:
	* var ptr = mod.main( N, xptr, 1, yptr, 1, param );
	* // returns <number>
	*
	* var bool = ( ptr === yptr );
	* // returns true
	*
	* // Read out the results:
	* var viewX = zeros( N, dtype );
	* mod.read( xptr, viewX );
	* // viewX => <Float64Array>[ 3.0, 5.0, 7.0, 9.0, 11.0 ]
	*
	* var viewY = zeros( N, dtype );
	* mod.read( yptr, viewY );
	* // viewY => <Float64Array>[ 4.0, 3.0, 2.0, 1.0, 0.0 ]
	*/
	Module: ModuleConstructor;
}

/**
* Applies a modified Givens plane rotation.
*
* @param N - number of indexed elements
* @param x - first input array
* @param strideX - `x` stride length
* @param y - second input array
* @param strideY - `y` stride length
* @param param - parameters for the modified Givens transformation
* @returns second input array
*
* @example
* var Float64Array = require( '@stdlib/array-float64' );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );
* var param = new Float64Array( [ 0.0, 0.0, 2.0, -3.0, 0.0 ] );
*
* drotm.main( x.length, x, 1, y, 1, param );
* // x => <Float64Array>[ -2.0, -1.0, 0.0, 1.0, 2.0 ]
* // y => <Float64Array>[ 3.0, 5.0, 7.0, 9.0, 11.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array-float64' );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );
* var param = new Float64Array( [ 0.0, 0.0, 2.0, -3.0, 0.0 ] );
*
* drotm.ndarray( x.length, x, 1, 0, y, 1, 0, param );
* // x => <Float64Array>[ -2.0, -1.0, 0.0, 1.0, 2.0 ]
* // y => <Float64Array>[ 3.0, 5.0, 7.0, 9.0, 11.0 ]
*/
declare var drotm: Routine;


// EXPORTS //

export = drotm;
