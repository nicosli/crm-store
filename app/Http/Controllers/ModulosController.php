<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use DB;
use Request;
use App\Http\Models\Colores;
use App\Http\Models\Reservaciones;
use App\Http\Models\Categoria;
use App\Http\Models\Color;
use App\Http\Models\Proveedor;
use App\Http\Models\User;
use App\Http\Models\Cliente;
use App\Http\Models\Producto;
use App\Http\Models\Talla;
use App\Http\Models\Metodopago;
use App\Http\Models\Venta;

class ModulosController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    public static function dashboard(){
        $totalPiezas = Producto::sum('existencia');
		
		$ventas 	= Venta::
		whereBetween('fecha_venta', array(date('Y-m-01'), date('Y-m-d')))
		->orderBy('fecha_venta', 'ASC')
		->orderBy('hora_venta', 'ASC')->get();

		$totalVenta = $ventas->sum('total_venta');
		$jsonventas = Venta::jsonventas($ventas);

		$ventas10 = Venta::orderBy('fecha_venta', 'DSC')->paginate(10);

		return view('modulos.dashboard', array(
			'totalPiezas' 				=> $totalPiezas,
			'ventas'					=> $ventas10,
			'jsonventas' 				=> $jsonventas,
			'total_ventas_mes' 			=> $totalVenta
		));
	}
	
	public static function proveedores(){
		return view('modulos.proveedores.lista');
	}
}
