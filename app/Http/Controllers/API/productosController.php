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


class productosController extends Controller
{
    public $successStatus = 200;

    public static function deleteProducto(Request $request){
        $rules = [ 
            'id' => 'required|integer|min:1'
        ];
        
        $validator = Validator::make($request->all(), $rules);

        if ($validator->passes()) {
            Producto::find($request->all()['id'])->delete();
            Piezas::where('producto_id', $request->all()['id'])->delete();

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

    public static function updateProducto(Request $request){
        $rules = [ 
            'id' => 'required|integer|min:1',
            'costo' => 'required|numeric|min:1',
            'precio_publico' => 'required|numeric|min:1',
            'descripcion' => 'required|min:10|max:150|string',
            'categoria_id' => 'required|integer|min:1',
            'proveedor_id' => 'required|integer|min:1'
        ]; 
 
        $validator = Validator::make($request->all(), $rules); 
         
        if ($validator->passes()) {
            $prod = Producto::find($request->all()['id']);
            $prod->nombre = $request->all()['nombre'];
            $prod->costo = $request->all()['costo'];
            $prod->precio_publico = $request->all()['precio_publico'];
            $prod->descripcion = $request->all()['descripcion'];
            $prod->categoria_id = $request->all()['categoria_id'];
            $prod->proveedor_id = $request->all()['proveedor_id'];
            
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

    public static function getProductos(){

        $productos = Producto::with([
            'categoria',
            'proveedor',
            'piezas.color',
            'piezas.talla'
        ])->get();
        
        foreach ($productos as $key => $val) {
            $total = $val->piezas->sum('existencia');
            $productos[$key]->existencia = $total;
        }

        return response()->json([
            'error' => false,
            'results' => $productos,
            'categorias' => Categoria::all(),
            'colores' => Color::all(),
            'proveedores' => Proveedor::all(),
            'tallas' => Talla::all(),
        ]);
    }

    public static function setProducto(Request $request){
        $rules = [ 
            'nombre' => 'required|min:5|string',
            'costo' => 'required|numeric|min:1',
            'precio_publico' => 'required|numeric|min:1',
            'descripcion' => 'required|min:10|max:150|string',
            'categoria_id' => 'required|integer|min:1',
            'proveedor_id' => 'required|integer|min:1'
        ]; 
 
        $validator = Validator::make($request->all(), $rules); 
         
        if ($validator->passes()) { 
            $arrayRequest = $request->all();
            $arrayRequest['estado'] = 1;
            Producto::create($arrayRequest);
             
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
