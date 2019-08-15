<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::match(array('GET', 'POST'), '/project/update', function(){
    $exitCode = Artisan::call('repo:update');
    return response()->json([
        'exitCode' => $exitCode
    ]);
});

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();
Route::get('/home', 'HomeController@index')->name('home');

Route::group(['middleware' => 'auth'], function(){
    Route::get('/licencia', function(){
        return view('modulos.licencia');
    });
    Route::get('/lista/proveedores', function(){
        return view('modulos.listas.proveedores');
    });
    Route::get('/lista/productos', function(){
        return view('modulos.listas.productos');
    });
    Route::get('/lista/piezas/{id}', function($id){
        return view('modulos.listas.piezas', ['id' => $id]);
    });
    Route::get('/modulos/punto-de-venta', function(){
        return view('modulos.puntoVenta');
    });
});
