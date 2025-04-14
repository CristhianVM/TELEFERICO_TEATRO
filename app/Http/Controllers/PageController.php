<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class PageController extends Controller
{
    public function show($page)
    {
        $allowedPages = [
            'index', 'index-two', 'index-three', 'index-four',
            'about', 'blog', 'blog-detail', 'contact',
            'error', 'helpcenter', 'login', 'pricing',
            'privacy', 'reset-password', 'services',
            'signup', 'terms',
        ];

        if (! in_array($page, $allowedPages)) {
            return Inertia::render('error');
        }

        return Inertia::render($page);
    }
}
