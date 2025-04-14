<?php

use App\Http\Controllers\PageController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
 * RUTAS DE LA PAGINA WEB
*/
Route::controller(PageController::class)->group(function () {
    Route::get(uri: '/', action: 'show')->name(name: 'home')->defaults('page', 'index');
    Route::get(uri: '/home-two', action: 'show')->name(name: 'home-two')->defaults('page', 'index-two');
    Route::get(uri: '/home-three', action: 'show')->name(name: 'home-three')->defaults('page', 'index-three');
    Route::get(uri: '/home-four', action: 'show')->name(name: 'home-four')->defaults('page', 'index-four');
    Route::get(uri: '/about', action: 'show')->name(name: 'about')->defaults('page', 'about');
    Route::get(uri: '/blog', action: 'show')->name(name: 'blog')->defaults('page', 'blog');
    Route::get(uri: '/blog-detail', action: 'show')->name(name: 'blog-detail')->defaults('page', 'blog-detail');
    Route::get(uri: '/contact', action: 'show')->name(name: 'contact')->defaults('page', 'contact');
    Route::get(uri: '/error', action: 'show')->name(name: 'error')->defaults('page', 'error');
    Route::get(uri: '/helpcenter', action: 'show')->name(name: 'helpcenter')->defaults('page', 'helpcenter');
    Route::get(uri: '/login', action: 'show')->name(name: 'login')->defaults('page', 'login');
    Route::get(uri: '/pricing', action: 'show')->name(name: 'pricing')->defaults('page', 'pricing');
    Route::get(uri: '/privacy', action: 'show')->name(name: 'privacy')->defaults('page', 'privacy');
    Route::get(uri: '/reset-password', action: 'show')->name(name: 'reset-password')->defaults('page', 'reset-password');
    Route::get(uri: '/services', action: 'show')->name(name: 'services')->defaults('page', 'services');
    Route::get(uri: '/signup', action: 'show')->name(name: 'signup')->defaults('page', 'signup');
    Route::get(uri: '/terms', action: 'show')->name(name: 'terms')->defaults('page', 'terms');
});

/*
 * RUTAS DEL ADMINISTRADOR
*/

/*
 * RUTAS EXTRA
*/
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
