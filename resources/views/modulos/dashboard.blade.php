@extends('template.base')
@section('titulo')
	nicosli - Dashboard
@endsection
@section('breadcrumb')
<div class="wrapper-breadcrumb pull-left">
    <ol class="breadcrumb">
      <li><a href="{!! asset('/') !!}">Home</a></li>
      <li><a href="{!! asset('/Reportes') !!}">Reportes</a></li>
      <li class="active">Ventas</li>
    </ol>
</div>
@endsection
@section('content')
<div class="card">
  <div class="card-header">
    Dashboard
  </div>
  <div class="card-body">
    <h5 class="card-title">Reporte Ejecutivo del Mes</h5>
    <p class="card-text">
      <span class="label label-primary">Ventas del Mes</span> 
			MXN $ <strong>{!! number_format($total_ventas_mes,2) !!}</strong>
      <span class="label label-success">Inventario</span> 
			<strong>{!! number_format($totalPiezas,0) !!} productos</strong>
    </p>
    
    <div>
    Últimas ventas generadas
    </div>
    <table class="table table-striped">
      <tr>
        <th>Fecha Venta</th>
        <th>Método Pago</th>
        <th>Total</th>
      </tr>
      @foreach($ventas as $ind => $val)
      <tr>
        <td>{!! Util::ff($val->fecha_venta) !!}</td>
        <td>{!! $val->metodopago['nombre'] !!}</td>
        <td>MXN $ <strong>{!! number_format($val->total_venta,2) !!}</strong></td>
      </tr>
      @if($ind == 5)
      @break
      @endif
      @endforeach
    </table>	
    <a href="#" class="btn btn-primary">Ver reporte Completo</a>
  </div>
</div>
@endsection