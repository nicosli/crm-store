<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller; 

use App\Http\Models\Piezas;
use Validator; 


class puntoVentaController extends Controller
{
    public $successStatus = 200;

    public static function getPieza($barcode){
        $rules = [ 
            'barcode' => 'required|numeric|min:1'
        ];
        
        $validator = Validator::make(['barcode' => $barcode], $rules);

        if ($validator->passes()) {
            $pieza = Piezas::with([
                'color',
                'talla',
                'producto'
            ])->where('barcode', $barcode)->firstOrFail();
            
            return response()->json([ 
                "error" => false, 
                "result" => $pieza
            ]); 
        } else { 
            return response()->json([ 
                "error" => true, 
                "message" => $validator->errors()->all() 
            ]); 
        } 
    }
    
}
