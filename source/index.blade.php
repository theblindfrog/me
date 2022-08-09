@extends('_layouts.master')

@section('body')

<article class="mt-8 font-serif prose-2xl font-400">
    <p>
        An accomplished, passionate & curious digital all-rounder with {{ \Carbon\Carbon::today()->setMonth(1)->setYear(2011)->diffInYears() }} years of professional experience, capable of working across the full end-to-end breadth of a product; from an idea or business case, design & analysis - through to development, testing, devops, and deployment.
    </p>
</article>
@endsection

@push('seo')

<title>Alexander Powell</title>
<meta name="description" content="Alex is an accomplished and passionate full stack developer, capable of working within the full breadth of product">

<meta property="og:title" content="Alexander Powell">
<meta property="og:type" content="website">
<meta property="og:image" content="http://www.alexanderpowell.me/assets/img/me.jpg">
<meta property="og:url" content="https://www.alexanderpowell.me">
<meta property="og:description" content="Alex is an accomplished and passionate full stack developer, capable of working within the full breadth of product.">


<meta name="twitter:card" content="Alex is an accomplished and passionate full stack developer, capable of working within the full breadth of product.">
<meta name="twitter:site" content="@theblindfrog">
<meta name="twitter:creator" content="@theblindfrog">
<meta property="twitter:image" content="https://www.alexanderpowell.me/assets/img/me.jpg" />

@endpush