@extends('template.base')
@section('titulo')
	nicosli - Dashboard
@endsection
@section('breadcrumb')
<nav aria-label="breadcrumb" class="mt-3">
  <ol class="breadcrumb mb-0">
    <li class="breadcrumb-item"><a href="{{ route('Dashboard') }}">Dashboard</a></li>
    <li class="breadcrumb-item active" aria-current="page">Proveedores</li>
  </ol>
</nav>
@endsection
@section('content')
<div class="card">
  <div class="card-header">
    Panel lista de Proveedores
  </div>
  <div class="card-body">
    <h5 class="card-title">Tabla de proveedores</h5>
    <p class="card-text">
      
    </p>
  </div>
</div>
@endsection