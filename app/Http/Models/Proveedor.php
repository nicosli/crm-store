<?php

namespace App\Http\Models;

use Illuminate\Database\Eloquent\Model;

class Proveedor extends Model
{
    protected $table = 'proveedores';
    protected $fillable = array('nombre', 'representante', 'telefono', 'email', 'direccion', 'estado');
}
