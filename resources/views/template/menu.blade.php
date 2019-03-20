<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Nekkyn Store</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {{ Auth::user()->name }}
            </a>
            <div class="dropdown-menu dropdown-menu-lg-right text-muted" style="max-width: 270px;">
            <p class="pt-4 pl-4 pr-4">
                Some example text that's free-flowing within the dropdown menu.
            </p>
            <a class="dropdown-item" href="#">Editar Perfil</a>
            <a class="dropdown-item" href="#">Configuración General</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="{{ route('logout') }}">Salir</a>
            </div>
        </li>
    </ul>
  </div>
</nav>
<nav class="main-menu">
    <ul>
        <li>
            <a href="http://justinfarrow.com">
                <i class="fa fa-home fa-2x"></i>
                <span class="nav-text">
                    Dashboard
                </span>
            </a>
            
        </li>
        <li class="has-subnav">
            <a href="#">
                <i class="fa fa-laptop fa-2x"></i>
                <span class="nav-text">
                    Stars Components
                </span>
            </a>
            
        </li>
        <li class="has-subnav">
            <a href="#">
                <i class="fa fa-list fa-2x"></i>
                <span class="nav-text">
                    Forms
                </span>
            </a>
            
        </li>
        <li class="has-subnav">
            <a href="#">
                <i class="fa fa-folder-open fa-2x"></i>
                <span class="nav-text">
                    Pages
                </span>
            </a>
            
        </li>
        <li>
            <a href="#">
                <i class="fa fa-bar-chart-o fa-2x"></i>
                <span class="nav-text">
                    Graphs and Statistics
                </span>
            </a>
        </li>
        <li>
            <a href="#">
                <i class="fa fa-font fa-2x"></i>
                <span class="nav-text">
                    Quotes
                </span>
            </a>
        </li>
        <li>
            <a href="#">
                <i class="fa fa-table fa-2x"></i>
                <span class="nav-text">
                    Tables
                </span>
            </a>
        </li>
        <li>
            <a href="#">
                <i class="fa fa-map-marker fa-2x"></i>
                <span class="nav-text">
                    Maps
                </span>
            </a>
        </li>
        <li>
            <a href="#">
                <i class="fa fa-info fa-2x"></i>
                <span class="nav-text">
                    Documentation
                </span>
            </a>
        </li>
    </ul>

    <ul class="logout">
        <li>
            <a href="{{ route('logout') }}">
                    <i class="fa fa-power-off fa-2x"></i>
                <span class="nav-text">
                    Logout
                </span>
            </a>
        </li>  
    </ul>
</nav>