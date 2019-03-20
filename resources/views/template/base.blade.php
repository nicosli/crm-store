<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>@yield('titulo', 'nicosli store')</title>

        <!-- Styles -->
        <link href="{!!asset('/css/app.css')!!}" rel="stylesheet" type="text/css" />

        <!-- Js -->
        <script src="{!!asset('/js/app.js')!!}"></script>
        
    </head>
    <body class="expandido">
        <div id="app">
            @include('template.menu')
            @yield('breadcrumb')
            <main class="py-4">
                @yield('content')
            </main>
        </div>
    </body>
</html>
