<?php


namespace Themes;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;
use Modules\Theme\ThemeManager;
use Themes\Base\ThemeProvider;

class ThemeServiceProvider extends ServiceProvider
{
    public function boot(Request $request){

        if(!is_installed() || strpos($request->path(), 'install') !== false) return false;

        //	 load Theme overwrite
        $active = ThemeManager::current();

        if(strtolower($active) != "base"){

            $view_paths = config('view.paths');
            $view_paths[] = __DIR__.'/'.ucfirst($active).'/resources';
            config()->set('view.paths',$view_paths);

            View::addLocation(base_path("themes".DIRECTORY_SEPARATOR.ucfirst($active)));
            // Load modules views
            $this->loadModuleViews($active);

        }

        // Base Theme require
        View::addLocation(base_path(DIRECTORY_SEPARATOR."themes".DIRECTORY_SEPARATOR."Base"));

        // Load modules views
        $this->loadModuleViews('base');

    }

    protected function loadModuleViews($theme){

        $listModule = array_map('basename', File::directories(base_path('modules')));

        foreach ($listModule as $module) {

            if (is_dir(base_path('themes/'.ucfirst($theme) .'/'. $module))) {
                $this->loadViewsFrom(base_path('themes/'.ucfirst($theme) .'/'. $module).'/Views', $module);
            }
        }

        if (is_dir(base_path('themes/'.ucfirst($theme).'/Layout'))) {
            $this->loadViewsFrom(base_path('themes/'.ucfirst($theme).'/Layout'), 'Layout');
        }
    }

    public function register()
    {
        $this->app->register(\Modules\Theme\RouterServiceProvider::class);
        //        Base Theme require
        $this->app->register(ThemeProvider::class);

        //	    load Theme overwrite
        $class = \Modules\Theme\ThemeManager::currentProvider();
        if(class_exists($class)){
            $this->app->register($class);
        }

    }
}
