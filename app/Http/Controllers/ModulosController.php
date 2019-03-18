<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

class ModulosController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    public static function dashboard(){
        return view('modulos.dashboard');
    }
}
