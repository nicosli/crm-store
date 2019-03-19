<?php

namespace App\Http\Models;

use Illuminate\Database\Eloquent\Model;

class Producto extends Model
{
    protected $table = "productos";

    public function categoria(){
    	return $this->belongsTo('App\Http\Models\Categoria');
    }

    public function color(){
    	return $this->belongsTo('App\Http\Models\Color');
    }

    public function proveedor(){
    	return $this->belongsTo('App\Http\Models\Proveedor');
    }

    public function talla(){
    	return $this->belongsTo('App\Http\Models\Talla');
    }
}
