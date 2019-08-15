<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('login', 'API\UserController@login');

Route::group(['middleware' => 'auth:api'], function(){
    Route::get('/proveedores', 'API\proveedoresController@getProveedores');
    Route::post('/proveedores', 'API\proveedoresController@setProveedor');
    Route::put('/proveedores', 'API\proveedoresController@updateProveedor');
    Route::delete('/proveedores', 'API\proveedoresController@deleteProveedor');

    Route::get('/productos', 'API\productosController@getproductos');
    Route::post('/productos', 'API\productosController@setProducto');
    Route::put('/productos', 'API\productosController@updateProducto');
    Route::delete('/productos', 'API\productosController@deleteProducto');

    Route::get('/piezas/buscar/{barcode}', 'API\puntoVentaController@getPieza');
    
    Route::get('/piezas', 'API\piezasController@getPiezas');
    Route::post('/piezas', 'API\piezasController@setPieza');
    Route::put('/piezas', 'API\piezasController@updatePieza');
    Route::delete('/piezas', 'API\piezasController@deletePieza');
});