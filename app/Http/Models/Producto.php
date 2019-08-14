<?php

namespace App\Http\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Producto extends Model
{
    use SoftDeletes;
    
    protected $table = "productos";
    protected $dates = ['deleted_at'];
    protected $fillable = array(
        'nombre',
        'costo',
        'precio_publico',
        'descripcion',
        'categoria_id',
        'proveedor_id'
    );

    public function categoria(){
    	return $this->belongsTo('App\Http\Models\Categoria');
    }

    public function proveedor(){
    	return $this->belongsTo('App\Http\Models\Proveedor');
    }

    public function piezas(){
        return $this->hasMany('App\Http\Models\Piezas');
    }
}
