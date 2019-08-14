<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Arca System') }}</title>

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
    <nav class="navbar is-light" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
            @if (!Auth::guest())
            <div class="navbar-start">
                <a class="navbar-item" href="{{asset('/home')}}">Home</a>

                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">Administración</a>
                    <div class="navbar-dropdown">
                        <a class="navbar-item" href="{{asset('/lista/proveedores')}}">
                        Lista de Proveedores
                        </a>
                    </div>
                </div>
            </div>
            @endif

            <div class="navbar-end">
                <div class="navbar-item">
                    @if (Auth::guest())
                    <div class="buttons">
                        <a class="button is-light">
                            Log in
                        </a>
                    </div>
                    @else
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">{{ Auth::user()->name }}</a>
                        <div class="navbar-dropdown">
                            <a class="navbar-item" href="{{ route('logout') }}"
                                onclick="event.preventDefault();
                                            document.getElementById('logout-form').submit();">
                                Logout
                            </a>

                            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                {{ csrf_field() }}
                            </form>
                        </div>
                    </div>
                    @endif
                </div>
            </div>
        </div>
    </nav>

    @yield('outContainer')

    @yield('content')

    <footer class="footer">
        <div class="content has-text-centered">
            <p>
            <strong>{{ config('app.name', 'Nekkeyn Store') }} System</strong> by devcomer. Ver <a href="{{asset('licencia')}}" class="lc">Licencia</a>
            </p>
        </div>
    </footer>
    
    <!-- Scripts -->
    <script src="{{ asset('js/manifest.js') }}"></script>
    <script src="{{ asset('js/vendor.js') }}"></script>
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
