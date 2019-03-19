<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Models\Venta;
use Request;

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
        $fhInicio 	= (Request::get('fhInicio')=="")? date('Y-m-01') : Request::get('fhInicio');
		$fhFin 	= (Request::get('fhFin')=="")? date('Y-m-d') : Request::get('fhFin');
		
		$ventas 	= Venta::
		whereBetween('fecha_venta', array($fhInicio, $fhFin))
		->orderBy('fecha_venta', 'ASC')
		->orderBy('hora_venta', 'ASC');
		
		$todo = $ventas->get();
		$totalVenta = $todo->sum('total_venta');
		$jsonventas = Venta::jsonventas($todo);
		
		$ventas = $ventas->paginate(10);

		$ventas->setPath('/Reportes/Ventas?fhInicio='.$fhInicio."&fhFIn=".$fhFin);

		return view('modulos.dashboard', array(
			'ventas' 		=> $ventas,
			'jsonventas' 	=> $jsonventas,
			'totalVenta' 	=> $totalVenta,
			'fhInicio'		=> $fhInicio,
			'fhFin'			=> $fhFin
		));
    }
}
