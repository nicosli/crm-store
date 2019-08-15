<?php

namespace App\Http\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Piezas extends Model
{
    use SoftDeletes;
    
    protected $table = "piezas";
    protected $dates = ['deleted_at'];
    protected $fillable = array('nombre',
        'producto_id',
        'color_id',
        'talla_id',
        'existencia',
        'barcode'
    );
    
    public function color(){
    	return $this->belongsTo('App\Http\Models\Color');
    }
    public function talla(){
    	return $this->belongsTo('App\Http\Models\Talla');
    }

    public function producto(){
        return $this->belongsTo('App\Http\Models\Producto');
    }
}
