<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <link rel="stylesheet" href="/assets/css/main.css">
        <title>B2 Ssystems</title>
    </head>
    <body>
        @component('_partials.header')
        @endcomponent

        @yield('below_nav')

        @yield('body')

        @stack('scripts')
        <script src="/assets/js/main.js" charset="utf-8"></script>
    </body>
</html>
