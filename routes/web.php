<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

/*
 * RUTAS DE LA APLICACION
*/
Route::get('/home', function () {
    return Inertia::render('index');
})->name('index');

Route::get('/home2', function () {
    return Inertia::render('index-two');
})->name('index-two');

Route::get('/home3', function () {
    return Inertia::render('index-three');
})->name('index-three');

Route::get('/home4', function () {
    return Inertia::render('index-light');
})->name('index4');

Route::get('/aboutus', function () {
    return Inertia::render('aboutus');
})->name('aboutus');

Route::get('/blog', function () {
    return Inertia::render('blog');
})->name('blog');

Route::get('/blog-detail', function () {
    return Inertia::render('blog-detail');
})->name('blog-detail');

Route::get('/contact', function () {
    return Inertia::render('contact');
})->name('contact');

Route::get('/error', function () {
    return Inertia::render('error');
})->name('error');

Route::get('/helpcenter', function () {
    return Inertia::render('helpcenter');
})->name('helpcenter');

Route::get('/login', function () {
    return Inertia::render('login');
})->name('login');

Route::get('/pricing', function () {
    return Inertia::render('pricing');
})->name('pricing');

Route::get('/privacy', function () {
    return Inertia::render('privacy');
})->name('privacy');

Route::get('/reset-password', function () {
    return Inertia::render('reset-password');
})->name('reset-password');

Route::get('/services', function () {
    return Inertia::render('services');
})->name('services');

Route::get('/signup', function () {
    return Inertia::render('signup');
})->name('signup');

Route::get('/terms', function () {
    return Inertia::render('terms');
})->name('terms');
// EXTRA
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
