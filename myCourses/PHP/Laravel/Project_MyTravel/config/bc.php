<?php
return [
    'active_theme'=>isset($_GET['_xtheme']) ? $_GET['_xtheme'] :env('BC_ACTIVE_THEME',defined('BC_INITIAL_THEME') ? BC_INITIAL_THEME : 'base')
];
