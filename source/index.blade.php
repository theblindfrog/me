@extends('_layouts.master')

@section('body')

<article class="mt-8 font-serif text-xl italic leading-relaxed font-300">
    <p class="mb-4">
        An accomplished and passionate full stack developer, capable of working within the full breadth of product. 
    </p>
    <p>
        With {{ \Carbon\Carbon::today()->setMonth(1)->setYear(2011)->diffInYears() }} years of experience across the digital stack and business, I've got a proven record of developing and executing to deliver results and business goals. 
    </p>
</article>
@endsection

@push('seo')

<title>Alexander Powell</title>
<meta name="description" content="Alex is an accomplished and passionate full stack developer, capable of working within the full breadth of product">

<meta property="og:title" content="Alexander Powell">
<meta property="og:type" content="website">
<meta property="og:image" content="http://www.alexanderpowell.me/assets/img/me-lg.jpg">
<meta property="og:url" content="https://www.alexanderpowell.me">
<meta property="og:description" content="Alex is an accomplished and passionate full stack developer, capable of working within the full breadth of product.">


<meta name="twitter:card" content="Alex is an accomplished and passionate full stack developer, capable of working within the full breadth of product.">
<meta name="twitter:site" content="@theblindfrog">
<meta name="twitter:creator" content="@theblindfrog">
<meta property="twitter:image" content="https://www.alexanderpowell.me/assets/img/me-lg.jpg" />

@endpush