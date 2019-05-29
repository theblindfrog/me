<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <script src="https://unpkg.com/ionicons@4.5.5/dist/ionicons.js" async></script>
        <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Serif:300,300i,400,500|Libre+Franklin:300,400,400i,500,700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="{{ mix('css/main.css', 'assets/build') }}">

        @stack('head')
    </head>
    <body class="bg-primary-100 border-primary-500 border-t-8 font-sans antialiased">
        <div class="container mx-auto mt-12 sm:mt-16 md:mt-32">
             
            @include('_partials.header')
            
            <div class="
                w-full px-4 
                md:w-golden-5/6 md:ml-golden-1/6 md:px-0 md:min-h-40 
                lg:w-golden-2/3 
            ">
                @yield('body')
            </div>

            <div class="
                w-full px-4 
                md:w-golden-5/6 md:ml-golden-1/6 md:px-0 lg:w-golden-2/3 
            ">
                @include('_partials.footer')
            </div>
        </div>

        @stack('foot')
    </body>
</html>
