<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class UsersController extends Controller
{

    public function index()
    {
//         $this->authorize('viewAny', User::class);

        Gate::authorize('viewAny', User::class);

        return User::all();
    }

}
