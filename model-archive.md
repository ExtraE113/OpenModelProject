---
title: 'OMP Model Archive'
date: 2021-01-06
layout: page-nopad
bodyClass: page
---

The OMP georgia model has been archived, but you can still play with it here. Errors shown are from the NYT forecast.

<p id="last-updated-actual"></p>

<div id="prediction-statics">
    <div class="container p-0 pt-3 pb-3 pb-md-5">
        <div class="row justify-content-start align-items-center">
            <div class="col">
                <h1>Our model: accessible, flexible and open source</h1>
                <p>See how the Georgia Senate runoff forecast changes in real-time when you adjust the assumptions and
                    <a href="/Modeling the Georgia Senate Runoff Elections - Model Methodology.pdf"> read our
                        methodology</a>.</p>
                <p><i id="last-updated"></i></p>
            </div>
        </div>
        <div class="row align-items-center">
            <div class="col">
                <h1>
                    <noscript>Enable Javascript change inputs!</noscript>
                </h1>
                <form>
                    <h3><i>Tweak the model assumptions...</i></h3>
                    <div class="form-check">
                        <input class="form-check-input model-switcher" type="checkbox" value="" id="covid">
                        <label class="form-check-label" for="covid">
                            Include COVID-19 Adjustment
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input model-switcher" type="checkbox" value='' id="market" checked>
                        <label class="form-check-label" for="market">
                            Include prediction markets
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input model-switcher" type="checkbox" value='' id="prior" checked>
                        <label class="form-check-label" for="prior">
                            Include the election as a prior
                        </label>
                    </div>
                    <div class="form-group">
                        <label for="average">Use...</label>
                        <select class="form-control model-switcher" id="average">
                            <option>Weighted Average</option>
                            <option>Simple Average</option>
                        </select>
                    </div>
                </form>
            </div>

            <div class="col">
                {% assign pred = site.predictions | sort: 'weight' %}
                {% for prediction in pred %}
                {% if prediction.featured %}
                <div class="row justify-content-center">
                    <div class="col prediction prediction-summary">
                        <div class="prediction-content">
                            <h1 class="prediction-number" id="{{prediction.title}}">
                                {{ prediction.data }}
                            </h1>
                            <h2 class="prediction-title">
                                {{ prediction.content | markdownify | strip_html | truncate: 100 }}
                            </h2>
                        </div>
                    </div>
                </div>
                {% endif %}
                {% endfor %}


                <div class="row justify-content-start">
                    {% for prediction in pred %}
                    {% if prediction.featured == nil %}
                    <div class="col">
                        <div class="prediction prediction-summary">
                            <div class="prediction-content">
                                <h2 class="prediction-number" id="{{prediction.title}}">
                                    {{ prediction.data }}
                                </h2>
                                <p class="prediction-title">{{ prediction.content | markdownify | strip_html | truncate:
                                    100
                                    }}</p>
                                <p class="prediction-mov" id="{{prediction.title}}-mov"></p>
                                <p class="prediction-mov" id="{{prediction.title}}-mov-actual"></p>
                            </div>
                        </div>
                    </div>
                    {% endif %}
                    {% endfor %}
                </div>
            </div>

        </div>


        <!--button-->
        <div class="row justify-content-center">
            <div class="col-auto">
                <a class="button button-primary"
                   href="https://docs.google.com/spreadsheets/d/1BM-HSoegMc6gxu56LCNnpIlm_b6jlDEtztiQ4EF5jy4/copy">
                    Access All Variables</a>
            </div>
        </div>
    </div>
</div>

<script src="/assets/js/model-switcher-archive.js"></script>
