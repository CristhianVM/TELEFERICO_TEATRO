<!DOCTYPE html>
{{--<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>--}}
<html lang="es" class="dark scroll-smoot" dir="ltr">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="AI Writer & Copywriting Tailwind CSS Template">
    <meta name="keywords" content="AI, Copywriting, Tailwind, Responsive, Artificial Intelligence, Robot, Robot AI">
    <meta name="author" content="Shreethemes">
    <meta name="website" content="https://shreethemes.in">
    <meta name="email" content="support@shreethemes.in">
    <meta name="version" content="1.0">
    <title inertia>{{ config('app.name', 'Teatro') }}</title>
    <link rel="icon" href="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Empresa_Estatal_de_Transporte_por_Cable_Mi_Telef%C3%A9rico_Logo.svg/640px-Empresa_Estatal_de_Transporte_por_Cable_Mi_Telef%C3%A9rico_Logo.svg.png" type="image/png">
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
    @inertiaHead
</head>
<body class="font-figtree text-base text-slate-900 dark:text-white dark:bg-slate-900">
@inertia
</body>
</html>
