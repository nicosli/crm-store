<?php

namespace App\Http\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Proveedor extends Model
{
    use SoftDeletes;
    protected $table = 'proveedores';
    protected $dates = ['deleted_at'];
    protected $fillable = array('nombre',
        'representante',
        'telefono',
        'email',
        'direccion'
    );
}
