<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Nicosli - Store</title>

        <!-- Styles -->
        <link href="{!!asset('/css/app.css')!!}" rel="stylesheet" type="text/css" />

        <!-- Js -->
        <script src="{!!asset('/js/app.js')!!}"></script>
        
    </head>
    <body>
        @yield('contenido')
        <div id="app"></div>
    </body>
</html>
