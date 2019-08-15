@extends('layouts.app')

@section('content')
<div class="container m-t-md">
    <div id="app" >
        <lista-piezas producto_id="{{$id}}"></lista-piezas>
    </div>
</div>
@endsection