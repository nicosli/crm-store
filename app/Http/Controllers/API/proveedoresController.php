<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller; 

use App\Http\Models\Proveedor;
use Validator; 


class proveedoresController extends Controller
{
    public $successStatus = 200;

    public static function deleteProveedor(Request $request){
        $rules = [ 
            'id' => 'required|integer|min:1'
        ];
        
        $validator = Validator::make($request->all(), $rules);

        if ($validator->passes()) {
            Proveedor::find($request->all()['id'])->delete();
            
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

    public static function updateProveedor(Request $request){
        $rules = [ 
            'nombre' => 'required|min:5|string',
            'representante' => 'required|min:5|string',
            'telefono' => 'required|numeric|digits:10',
            'email' => 'required|email',
            'direccion' => 'required|min:10|max:150|string'
        ]; 
 
        $validator = Validator::make($request->all(), $rules); 
         
        if ($validator->passes()) {
            $prov = Proveedor::find($request->all()['id']);
            $prov->nombre = $request->all()['nombre'];
            $prov->representante = $request->all()['representante'];
            $prov->telefono = $request->all()['telefono'];
            $prov->email = $request->all()['email'];
            $prov->direccion = $request->all()['direccion'];
            $prov->save();
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

    public static function getProveedores(){
        $proveedores = Proveedor::all();
        return response()->json([
            'error' => false,
            'results' => $proveedores
        ]);
    }

    public static function setProveedor(Request $request){
        $rules = [ 
            'nombre' => 'required|min:5|string',
            'representante' => 'required|min:5|string',
            'telefono' => 'required|numeric|digits:10',
            'email' => 'required|email',
            'direccion' => 'required|min:10|max:150|string'
        ]; 
 
        $validator = Validator::make($request->all(), $rules); 
         
        if ($validator->passes()) { 
            $arrayRequest = $request->all();
            $arrayRequest['estado'] = 1;
            Proveedor::create($arrayRequest);
             
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
