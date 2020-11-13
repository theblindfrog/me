@extends('_layouts.master')

@section('body')

<article class="mt-8 font-serif">
    <h2 class="mb-6 font-serif text-3xl tracking-tight font-500"><span class="text-4xl">&#128075;</span> Hi there</h2>
    <div class="prose-xl font-400">
        <p>
            I'm Alex, an accomplished, passionate & curious digital all-rounder with {{ \Carbon\Carbon::today()->setMonth(1)->setYear(2011)->diffInYears() }} years of professional experience, capable of working across the full end-to-end breadth of a product; from an idea or business case, design & analysis - through to development, testing, devops, and deployment.
        </p>
        <p>
            For the last {{ \Carbon\Carbon::today()->setMonth(10)->setDay(1)->setYear(2013)->diffInYears() }} years I've been the digital manager at <a href="https://www.clickenergy.com.au" target="_blank" rel="noopener">Click Energy</a> and <a href="https://www.onthemove.com.au" target="_blank" rel="noopener">On The Move</a> - an energy retailer with 200,000+ customers, and a utilities connection business with 800+ real estate agencies, moving over 70,000 customers.
        </p>

        <p>
            During this time, I've been responsible for growing the business digitally, through own online sales funnel, generating leads via out best-in-class quoting tool, and digitally transforming the On The Move business with our real estate partner portal, a suite of integrations with real estate CRMs, and our embeddable utilities application form product.
        </p>

        <p>
            In my spare time, dad to two boys, DIY enthusiast, I'm an aspiring woodworker, professional freelance photographer, and reformed coffee addict.
        </p>

        <p>
            <img src="/assets/img/diy.jpg" alt="Photo of me 'DIY-ing'">
        </p>
    </div>
</article>
@endsection

@push('seo')

<title>Alexander Powell | About Me</title>
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