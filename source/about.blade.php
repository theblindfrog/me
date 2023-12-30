@extends('_layouts.master')

@section('body')

<article class="mt-8 font-serif">
    <h2 class="mb-6 font-serif text-3xl tracking-tight font-500"><span class="text-4xl">&#128075;</span> Hi there</h2>
    <div class="prose-xl font-400">
        <p>
            I'm Alex, an accomplished, passionate & curious digital all-rounder with {{
            \Carbon\Carbon::today()->setMonth(1)->setYear(2011)->diffInYears() }} years of professional experience,
            capable of working across the full end-to-end breadth of a product; from an idea or business case, design &
            analysis - through to development, testing, devops, and deployment.
        </p>
        @php
        $startDate = \Carbon\Carbon::today()->setMonth(4)->setDay(1)->setYear(2021);
        $duration = ($startDate->diffInYears() >= 2) ? $startDate->diffInYears() . " years" : $startDate->diffInMonths()
        . " months";
        @endphp
        <p>
            For the last {{ $duration }}, I've been a technical lead at <a class="text-blue-700 hover:underline"
                href="https://tally.co" target="_blank" rel="noopener">Tally Group</a>, working in the customer
            acquisition solutions space, supporting 7+ energy retailers in the Australian <a
                class="text-blue-700 hover:underline"
                href="https://aemo.com.au/en/energy-systems/electricity/national-electricity-market-nem" target="_blank"
                rel="noopener">National Electricity Market</a>. My team builds and supports a best-in-market sales
            system that processes tens-of-thousands of energy sales per month, and a suite of tools that support
            retailers and their partners, sales agents, and end-consumers.
        </p>
        <p>
            Previously I was the digital manager at <a class="text-blue-700 hover:underline"
                href="https://web.archive.org/web/20201112024044/http://www.clickenergy.com.au/" target="_blank"
                rel="noopener">Click Energy</a> and <a class="text-blue-700 hover:underline"
                href="https://web.archive.org/web/20200628023001/https://www.onthemove.com.au/" target="_blank"
                rel="noopener">On The Move</a> - an energy retailer with 215,000+ customers, and a utilities connection
            business with 800+ real estate agencies, moving over 70,000 customers annually - both which were acquired by
            <a class="text-blue-700 hover:underline"
                href="https://www.agl.com.au/about-agl/media-centre/asx-and-media-releases/2020/august/agl-enters-binding-agreement-to-acquire-click-energy-group"
                target="_blank" rel="noopener">AGL</a>.
        </p>

        <p>
            During that time, I've been responsible for growing the business digitally, through own online sales funnel,
            generating leads via out best-in-class quoting tool, and digitally transforming the On The Move business
            with our real estate partner portal, a suite of integrations with real estate CRMs, and our embeddable
            utilities application form product.
        </p>

        <p>
            In my spare time I'm a dad to two boys, a DIY enthusiast, an aspiring woodworker, running addict, and
            reformed coffee addict.
        </p>

        <p>
            <img src="/assets/img/diy.jpg" alt="Photo of me 'DIY-ing'">
        </p>
    </div>
</article>
@endsection

@push('seo')

<title>Alexander Powell | About Me</title>
<meta name="description"
    content="Alex is an accomplished and passionate full stack developer, capable of working within the full breadth of product">

<meta property="og:title" content="Alexander Powell">
<meta property="og:type" content="website">
<meta property="og:image" content="http://www.alexanderpowell.me/assets/img/me.jpg">
<meta property="og:url" content="https://www.alexanderpowell.me">
<meta property="og:description"
    content="Alex is an accomplished and passionate full stack developer, capable of working within the full breadth of product.">


<meta name="twitter:card"
    content="Alex is an accomplished and passionate full stack developer, capable of working within the full breadth of product.">
<meta name="twitter:site" content="@theblindfrog">
<meta name="twitter:creator" content="@theblindfrog">
<meta property="twitter:image" content="https://www.alexanderpowell.me/assets/img/me.jpg" />

@endpush