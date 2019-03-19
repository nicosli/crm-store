<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use App\Http\Models\Producto;
use App\Http\Models\Venta;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        DB::table('users')->insert([
            'name'     => 'Nicolas Navarrete',
            'email'    => 'nnavarrete@nicosli.com',
            'password' => bcrypt('ok00'),
        ]);
        DB::table('users')->insert([
            'name'     => 'Yasury Navarrete',
            'email'    => 'enavarrete@nicosli.com',
            'password' => bcrypt('ok00'),
        ]);

        /*---- Categorias ----*/
        DB::table('categorias')->insert([
            'estado'       => 1,
            'nombre'       => 'Damas',
            'descripcion'  => 'Categoría para la ropa de Damas'
        ]);
        DB::table('categorias')->insert([
            'estado'       => 1,
            'nombre'       => 'Caballeros',
            'descripcion'  => 'Categoría para la ropa de Caballeros'
        ]);
        DB::table('categorias')->insert([
            'estado'       => 1,
            'nombre'       => 'Niños',
            'descripcion'  => 'Categoría para la ropa de Niños'
        ]);
        DB::table('categorias')->insert([
            'estado'       => 1,
            'nombre'       => 'Niñas',
            'descripcion'  => 'Categoría para la ropa de Niñas'
        ]);

        /*---- Colores ----*/
        DB::table('colores')->insert([
            'estado'       => 1,
            'nombre'       => 'Azul',
            'descripcion'  => 'Color definido Azul'
        ]);
        DB::table('colores')->insert([
            'estado'       => 1,
            'nombre'       => 'Rojo',
            'descripcion'  => 'Color definido Rojo'
        ]);
        DB::table('colores')->insert([
            'estado'       => 1,
            'nombre'       => 'Blanco',
            'descripcion'  => 'Color definido Blanco'
        ]);
        DB::table('colores')->insert([
            'estado'       => 1,
            'nombre'       => 'Negro',
            'descripcion'  => 'Color definido Negro'
        ]);
        DB::table('colores')->insert([
            'estado'       => 1,
            'nombre'       => 'Beige',
            'descripcion'  => 'Color definido Beige'
        ]);
        DB::table('colores')->insert([
            'estado'       => 1,
            'nombre'       => 'Amarillo',
            'descripcion'  => 'Color definido Amarillo'
        ]);

        $faker = Faker::create();

        /*---- Métodos de Pago ----*/
        DB::table('metodospago')->insert([
            'estado'        => 1,
            'nombre'        => 'Terminal Bancomer',
            'descripcion'   => 'Pagos con Tarjeta Terminal Bancomer'
        ]);
        DB::table('metodospago')->insert([
            'estado'        => 1,
            'nombre'        => 'Efectivo',
            'descripcion'   => 'Esta opción son para pagos con efectivo'
        ]);

        /*---- Proveedores ----*/
        foreach(range(1,10) as $index){
            DB::table('proveedores')->insert([
                'estado'            => 1,
                'nombre'            => $faker->company,
                'representante'     => $faker->name,
                'telefono'          => $faker->phoneNumber,
                'email'             => $faker->email,
                'direccion'         => $faker->address
            ]);
        }

        /*---- Tallas ----*/
        foreach(range(18,46) as $index){
            if($index % 2 == 0){
                DB::table('tallas')->insert([
                    'estado' => 1,
                    'nombre' => $index,
                    'descripcion' => 'talla '.$index 
                ]);                       
            }
        }        

        /*---- Clientes ----*/
        foreach (range(1,80) as $index) {
            DB::table('clientes')->insert([
                'estado'        => 1,
                'nombre'        => $faker->name,
                'apellido'      => $faker->lastName,
                'email'         => $faker->email,
                'telefono'      => $faker->phoneNumber,
                'celular'       => $faker->phoneNumber,
                'comentario'    => $faker->paragraph(1, true),
                'direccion'     => $faker->address
            ]);
        }

        /*---- Productos ----*/
        $categorias = DB::table('categorias')->get();
        $colores = DB::table('colores')->get();
        $proveedores = DB::table('proveedores')->get();
        $tallas = DB::table('tallas')->get();
        $productos = array(
            "Huipil encaje",
            "Huayma Reilete",
            "Guayabera Deshilada Tekit",
            "Vestido Despunte",
            "Vestido Merida",
            "Camisa tekit combinada",
            "Vestido itzayana",
            "Camisa Chino",
            "Huayma Matizado",
            "Blusa Frida",
            "Vestido Georgina",
            "Blusa Araña",
            "Guayabera combinada de Dama",
            "Blusa Mestiza",
            "Blusa bolitas",
            "Blusa tekit",
            "Blusa espiga",
            "Blusa Citilcum",
            "Guayabera Niño",
            "Pantalón"
        );

        foreach(range(0,count($productos)-1) as $index){
            $costo = rand(150, 500);
            $precio_publico = $costo * 2;
            DB::table('productos')->insert([
                'estado'            => 1,
                'nombre'            => $productos[$index],
                'categoria_id'      => $categorias[rand(0, count($categorias)-1)]->id,
                'color_id'          => $colores[rand(0, count($colores)-1)]->id,
                'proveedor_id'      => $proveedores[rand(0, count($proveedores)-1)]->id,
                'talla_id'          => $tallas[rand(0, count($tallas)-1)]->id,
                'existencia'        => rand(20, 50),
                'costo'             => $costo,
                'precio_publico'    => $precio_publico,
                'descripcion'       => $faker->paragraph(1, true),
                'barcode'           => $faker->ean13
            ]);
        }

        /*---- Ventas ----*/
        foreach(range(1,5000) as $index){
            $clientes = DB::table('clientes')->get();
            $users = DB::table('users')->get();
            $metodospago = DB::table('metodospago')->get();
            DB::table('ventas')->insert([
                'total_venta'       => 0,
                'cliente_id'        => $clientes[rand(0, count($clientes)-1)]->id,
                'user_id'           => $users[rand(0, count($users)-1)]->id,
                'metodopago_id'     => $metodospago[rand(0, count($metodospago)-1)]->id,
                'fecha_venta'       => $faker->dateTimeThisYear('now'),
                'hora_venta'        => $faker->time()
            ]);
            $id_venta = DB::getPdo()->lastInsertId();
            $maxItems = rand(2,8);
            $productos = Producto::all();
            foreach(range(1, $maxItems) as $ind){
                $item = rand(0, count($productos)-1);
                DB::table('listaventas')->insert([
                    'barcode' => $productos[$item]->barcode,
                    'nombre' => $productos[$item]->nombre,
                    'talla' => $productos[$item]->talla['nombre'],
                    'venta_id' => $id_venta,
                    'proveedor_id' => $productos[$item]->proveedor['id'],
                    'categoria_id' => $productos[$item]->categoria['id'],
                    'color_id' => $productos[$item]->color['id'],
                    'monto' => $productos[$item]->precio_publico
                ]);
            }
        }
        $ventas = Venta::all();
        foreach ($ventas as $key => $val) {
            $total = $val->items->sum('monto');            
            $val->total_venta = $total;
            $val->save();
        }
        
    }
}
