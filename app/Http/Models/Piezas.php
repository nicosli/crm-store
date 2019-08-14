<?php

namespace App\Http\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Piezas extends Model
{
    use SoftDeletes;
    
    protected $table = "piezas";
    protected $dates = ['deleted_at'];
    
    public function color(){
    	return $this->belongsTo('App\Http\Models\Color');
    }
    public function talla(){
    	return $this->belongsTo('App\Http\Models\Talla');
    }
}
