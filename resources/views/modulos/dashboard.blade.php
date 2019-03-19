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
<div class="container">Dashboard</div>
@endsection