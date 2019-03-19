<?php

namespace App\Http\Models;

use Illuminate\Database\Eloquent\Model;

class Venta extends Model
{
    protected $table = 'ventas';

    public function items(){
    	return $this->hasMany('App\Http\Models\Listaventa');
    }
    public function usuario(){
    	return $this->belongsTo('App\Http\Models\User', 'user_id');
    }
    public function metodopago(){
    	return $this->belongsTo('App\Http\Models\Metodopago');
    }
    public function cliente(){
        return $this->belongsTo('App\Http\Models\Cliente');
    }
    public static function getTotal($ventas){
    	$total = 0;
    	foreach ($ventas as $key => $val) {
    		$total += $val->items->sum('monto');
    	}
    	return $total;
    }
    public static function jsonventas($todo){
        $json = [];
        //dd($todo);
        foreach ($todo as $key => $val) {
            //echo $val->total_venta."<br>";
            if(isset($json[$val->fecha_venta]))
                $json[$val->fecha_venta] += (float)$val->total_venta;
            else
                $json[$val->fecha_venta] = (float)$val->total_venta;
        }
        return $json;
    }
}
