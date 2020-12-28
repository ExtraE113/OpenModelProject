---
title: 'Polling Report'  
date: 2020-12-28  
layout: page  
bodyClass: page
---

<h1 id="topline-results">Topline Results </h1>

[Open Model Project](https://openmodelproject.org/) produced a poll of the 2020 Georgia Senate runoff elections. **This polling has Perdue and Loeffler both up by 4.**

This poll was sponsored by American Civics Exchange. (ACE) on behalf of the Open Model Project. ACE is a US-based developer of political prediction markets and related forecasting products, services and content. ACE is not funded by any candidate or political party committee and does not poll on behalf of any political candidate or party.

<h3 id="topline-ossoff-perdue"> Ossoff vs. Perdue (Perdue +3.9) </h3>

A national poll of likely voters and found that **David Perdue (R) has a +3.9 point lead over Jon Ossoff (D) - a strong lead, but within the margin of error.** The poll sampled 1405 Americans and was adjusted to match a US nationally representative likely voter electorate by weighing on race, age, gender, education, income, region, 2016 Presidential vote, and 2020 Presidential vote. The raw margin of error is +/-4.7 points with 95% confidence.

The poll found Perdue has 49.5% support and Ossoff has 45.6% support among likely voters, with 4.9% remaining undecided.

Using this polling data alone and historical information about polling accuracy, but no other information, we naively expect an 80% chance that Perdue&#39;s actual margin on election day will be between -2.0 and +9.8.

<h3 id="topline-results-warnock-loeffler"> Warnock vs. Loeffler (Loeffler +4.1) </h3>

A national poll of likely voters and found that **Kelly Loeffler (R) has a +4.1 point lead over Raphael Warnock (D) - a strong lead, but within the margin of error.** The poll found Loeffler has 50.3% support and Warnock has 46.2% support among likely voters, with 3.5% remaining undecided.

Using this polling data alone and historical information about polling accuracy, but no other information, we naively expect an 80% chance that Perdue&#39;s actual margin on election day will be between -1.4 and +9.8.

<h1 id="ga-senate-runoff-poll"> GA Senate Runoff Poll </h1>

Report by **Peter Hurford**

*Poll conducted: 21-27 December 2020*

*Analysis published:28 December 2020*

# Table of Contents

**[Topline Results](#topline-results)**

<a class="pl-3" href="#topline-ossoff-perdue">Ossoff vs. Perdue (Perdue +3.9)</a>

<a class="pl-3" href="#topline-warnock-loeffler">Warnock vs. Loeffler (Loeffler +4.1)</a>

**[Methods](#methods)**  

<a class="pl-3" href="#survey-design">Survey Design</a>

<a class="pl-3" href="#survey-deployment">Survey Deployment</a>

<a class="pl-3" href="#demographic-weighting">Demographic Weighting</a>

<a class="pl-3" href="#lv-weighting">Likely Voter Weighting</a>

<a class="pl-3" href="#electoral-modeling">Electoral Modeling</a>

**[Appendix 1: Code and Website](#code-website)**

**[Appendix 2: Experimental Weights](#exp-weights)**

<h1 id="methods">Methods</h1>

<h3 id="survey-design">Survey Design</h3>

This poll was designed on Surveymonkey. The survey was 35 questions long and took an average of 5 minutes to complete. Questions consisted of matters of policy and relevant demographics.

<h3 id="survey-deployment">Survey Deployment</h3>

This poll was a combination of online surveying of 405 participants using [Prolific](https://www.prolific.co/) - an online platform where people are recruited and paid to complete surveys - and 1000 participants using [Wick](https://www.wick.io/) - an online platform that allows for interactive voice response (IVR) to landline polling. Both platforms are non-political and non-partisan. The combination was chosen to cheaply attract

The online survey was live from 21 December to 27 December. The IVR survey was live on 23 December. The poll was open for so long due to difficulty recruiting participants during the holiday season. This may have also introduced bias and error into the polling.

On Prolific, our survey was advertised to participants on the platform as &quot;A Survey about Attitudes&quot; with the description &quot;In this survey you will be asked a number of questions regarding your attitudes to certain policy proposals. You will also be asked some basic demographic information.&quot; The nature of the survey was not disclosed any further, so we would not expect any additional selection bias in who takes the poll, beyond the bias already present in using an online platform like Prolific.

Only Georgia residents were allowed to take our survey. We dropped respondents who indicated they were not registered to vote, indicated they did not plan to vote, and/or indicated they were not answering questions honestly (see [Robinson-Cimpian, 2014](https://journals.sagepub.com/doi/abs/10.3102/0013189X14534297)).

<h3 id="demographic-weighting">Demographic Weighting</h3>

Surveys only capture a sample of the population, so we know that the result probably won&#39;t exactly match the &quot;true&quot; result that we would get if we surveyed everyone in the population or that we would expect to see on election day.

The margin of sampling error describes how close we can reasonably expect a survey result to fall relative to the true population value. A margin of error of plus or minus 3 percentage points at the 95% confidence level means that if we fielded the same survey 100 times, we would expect the result to be within 3 percentage points of the true population value 95 of those times.

Without adjustment, surveys tend to overrepresent people who are easier to reach and underrepresent those types of people who are harder to reach. In order to make the results more representative we weight the data so that it matches the population – based on a number of demographic measures. Weighting is a crucial step for avoiding biased results, but it also has the effect of making the margin of error larger. Using US Census data, we can get a rough sense of the proportions of gender, race, and age we would expect to see in our sample.

We used the [surveyweights Python package](https://github.com/rethinkpriorities/surveyweights) developed by Peter Hurford at Rethink Priorities to create weights to adjust for race, age, gender, education, income, region, 2016 Presidential vote, and 2020 Presidential vote. These weights were used to upsample and downsample responses accordingly to produce results that would end up matching the US Census data. All data to form weights, and sourcing for that information, is contained within the publicly available source code for the package and [within our source code for this poll](https://github.com/peterhurford/ga_sen_runoff_polling).

<h3 id="lv-weighting">Likely Voter Weighting</h3>

To create a view of what will happen on election day, it is important to only sample those who vote. We already drop respondents who indicate they are ineligible to vote, not registered to vote, or do not plan to vote. However, many people eligible to vote still end up deciding not to vote. To resolve this, we create a probabilistic likely voter model and weigh our results accordingly.

Our likely voter model is based on the Perry-Gallup index outlined in [Pew 2016](https://www.pewresearch.org/methods/2016/01/07/measuring-the-likelihood-to-vote/):

- Respondents were given 1 point for saying they were &quot;Very likely&quot; to vote, 0.7 points for saying they were &quot;Likely&quot; to vote, 0.4 points for saying they were &quot;Neither likely nor unlikely&quot; to vote, and 0.1 points for saying they were &quot;Somewhat unlikely&quot; to vote. Respondents were also given 0.7 points if they said they already voted, so as to not overweigh people who already voted (given that these people tend to skew Democratic).
- Respondents were given 0.5 points for saying they voted in 2020.
- This produces a scale from 0.1 to 2.
- Scores were mapped to probabilities of voting by transforming the decimal score to a whole number score from 0-7 by multiplying by 3.5 and rounding to the nearest whole number. These scores were then mapped `0 -> 0.11, 1 -> 0.13, 2 -> 0.23, 3 -> 0.34, 4 -> 0.4, 5 -> 0.59, 6 -> 0.63, 7 -> 0.83`.
- Probabilities were then converted to likely voter weights by normalizing all the probabilities to sum to 1 across the dataset.
- These likely voter weights were then combined with demographic weights to adjust the sample to a likely voter electorate.

<h3 id="electoral-modeling">Electoral Modeling</h3>

Weighted results from the topline figures were used to construct _80% naive modeled confidence intervals_ (NMCIs). NMCIs are intended to use polling results to predict actual election results using data from the poll alone and historical information about polling accuracy, but not other polls or other non-polling information like fundamentals. NMCI are not just the CIs implied by the raw polling margin of error. An 80% NMCI from _x_ to _y_ is meant to imply that there is an 80% chance that the true value as observed on election day will fall between _x_ and _y_.

80% NMCIs for the Ossoff vs. Perdue and Loeffler vs. Warnock races were constructed by looking at the poll&#39;s raw weighted margin of error as calculated on the weighted N after applying likely voter weights (weighted N = 725, raw weighted margin of error = +/- 4.7).

We allocate undecideds evenly between the two candidates, with some uncertainty and margin of error, allowing for a 20% chance that up to 75% of undecideds break for one particular candidate.

The final NMCIs were constructed with an additional 4pts of margin to account for historical accuracy of Senate polling within three weeks of the election (see [Silver 2020](https://fivethirtyeight.com/features/the-polls-werent-great-but-thats-pretty-normal/)).

<h1 id="code-website">Apendix 1: Code and Website</h1>

We value transparency and invite scrutiny of its methods. Our data is available interactively at [https://openmodelproject.org/inhouse](https://openmodelproject.org/inhouse). The code and data for all our data quality filtering, demographic weighting, likely voter weighting, and electoral modeling is [available publicly on GitHub](https://github.com/peterhurford/ga_sen_runoff_polling) under an MIT license.

<h1 id="exp-weights">Apendix 2: Experimental Weights</h1>

We further attempted to experiment with novel weights not used by other pollsters, such as weighing on social trust, socioeconomic attitudes, and religious attitudes as measured by the [General Social Survey](https://gss.norc.org/), correcting for polling&#39;s tendency to oversample atheists and people with high social trust. We also weighed by Facebook usage, correcting for polls tending to oversample online voters. The use of these experimental weights did not materially change the results. For more information, see [https://openmodelproject.org/](https://openmodelproject.org/)