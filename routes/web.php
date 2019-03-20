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
    
/**
 |--------------------------------------------------------------------------
 | Rutas del módulo
 |--------------------------------------------------------------------------
 */
Auth::routes();

Route::get('/', function () {
    return view('inicio');
})->name('Inicio');
Route::get('/logout', function(){
    Auth::logout();
    return redirect('/');
});
Route::get('/Dashboard', 'ModulosController@dashboard')->name('Dashboard');
Route::get('/Proveedores', 'ModulosController@proveedores')->name('Proveedores');
Route::get('/Usuarios', 'ModulosController@usuarios')->name('Usuarios');
Route::get('/Clientes', 'ModulosController@clientes')->name('Clientes');
Route::get('/Productos', 'ModulosController@productos')->name('Productos');
Route::get('/PuntoDeVenta', 'ModulosController@puntoDeVenta')->name('PuntoDeVenta');