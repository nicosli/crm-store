<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller; 

use App\Http\Models\Producto;
use App\Http\Models\Categoria;
use App\Http\Models\Color;
use App\Http\Models\Proveedor;
use App\Http\Models\Talla;
use App\Http\Models\Piezas;
use Validator; 
use DB;


class piezasController extends Controller
{
    public $successStatus = 200;

    public static function deletePieza(Request $request){
        $rules = [ 
            'id' => 'required|integer|min:1'
        ];
        
        $validator = Validator::make($request->all(), $rules);

        if ($validator->passes()) {
            Piezas::find($request->all()['id'])->delete();

            return response()->json([ 
                "error" => false, 
                "result" => ''
            ]); 
        } else { 
            return response()->json([ 
                "error" => true, 
                "message" => $validator->errors()->all() 
            ]); 
        } 
    }

    public static function updatePieza(Request $request){
        $rules = [ 
            'id' => 'required|integer|min:1',
            'color_id' => 'required|integer|min:1',
            'talla_id' => 'required|integer|min:1',
            'existencia' => 'required|integer|min:1'
        ]; 
 
        $validator = Validator::make($request->all(), $rules); 
         
        if ($validator->passes()) {
            $prod = Piezas::find($request->all()['id']);
            $prod->color_id = $request->all()['color_id'];
            $prod->talla_id = $request->all()['talla_id'];
            $prod->existencia = $request->all()['existencia'];
            
            $prod->save();
            return response()->json([ 
                "error" => false, 
                "result" => ''
            ]); 
        } else { 
            return response()->json([ 
                "error" => true, 
                "message" => $validator->errors()->all() 
            ]); 
        } 
    }

    public static function getPiezas(Request $request){
        $rules = [ 
            'producto_id' => 'required|integer|min:1'
        ]; 
 
        $validator = Validator::make($request->all(), $rules);
        
        if ($validator->passes()) { 
            $piezas = Piezas::with([
                'color',
                'talla',
                'producto.proveedor'
            ])
            ->where("producto_id", $request->all()['producto_id'])
            ->get();
             
            return response()->json([ 
                "error" => false, 
                "result" => $piezas,
                'tallas' => Talla::all(),
                'colores' => Color::all(),
            ]); 
        } else { 
            return response()->json([ 
                "error" => true, 
                "message" => $validator->errors()->all() 
            ]); 
        }
    }

    public static function setPieza(Request $request){
        $rules = [ 
            'producto_id' => 'required|integer|min:1',
            'color_id' => 'required|integer|min:1',
            'talla_id' => 'required|integer|min:1',
            'existencia' => 'required|integer|min:1'
        ]; 
 
        $validator = Validator::make($request->all(), $rules); 
         
        if ($validator->passes()) { 
            $arrayRequest = $request->all();
            $arrayRequest['barcode'] = 1;
            Piezas::create($arrayRequest);

            $id = DB::getPdo()->lastInsertId();
            $numlength = strlen((string)$id);
            $objetivo = 12;
            $faltante = $objetivo - $numlength;
            $barcode = str_pad(rand(0, pow(10, $faltante)-1), $faltante, '0', STR_PAD_LEFT);
            $barcode = $id.$barcode;

            $pieza = Piezas::find($id);
            $pieza->barcode = $barcode;
            $pieza->save();
             
            return response()->json([ 
                "error" => false, 
                "result" => ''
            ]); 
        } else { 
            return response()->json([ 
                "error" => true, 
                "message" => $validator->errors()->all() 
            ]); 
        } 
    }
    
}
