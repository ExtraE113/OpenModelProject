---
title: 'Polling Report'  
date: 2020-12-28  
layout: page  
bodyClass: page
---

<h1 id="topline-results">Topline Results </h1>

[Open Model Project](https://openmodelproject.org/) produced a poll of the 2020 Georgia Senate runoff elections. **This polling has Perdue and Loeffler both up by 4.**

This poll was sponsored by American Civics Exchange. (ACE) on behalf of the Open Model Project. ACE is a US-based developer of political prediction markets and related forecasting products, services and content. ACE is not funded by any candidate or political party committee and does not poll on behalf of any political candidate or party.

The poll sampled 1405 Georgians and was adjusted to match a Georgia representative likely voter electorate by weighing on race, age, gender, education, income, region, 2016 Presidential vote, and 2020 Presidential vote. The raw margin of error is +/-4.7 points with 95% confidence.

<h3 id="topline-ossoff-perdue"> Ossoff vs. Perdue (Perdue +3.9) </h3>

A national poll of likely voters and found that **David Perdue (R) has a +3.9 point lead over Jon Ossoff (D) - a strong lead, but within the margin of error** (+/- 4.7)**.**

The poll found Perdue has 49.5% support and Ossoff has 45.6% support among likely voters, with 4.9% remaining undecided.

Using this polling data alone and historical information about polling accuracy, but no other information, we naively expect an 80% chance that Perdue&#39;s actual margin on election day will be between -2.0 and +9.8.

<h3 id="topline-warnock-loeffler"> Warnock vs. Loeffler (Loeffler +4.1) </h3>

A national poll of likely voters and found that **Kelly Loeffler (R) has a +4.1 point lead over Raphael Warnock (D) - a strong lead, but within the margin of error** (+/- 4.7)**.** The poll found Loeffler has 50.3% support and Warnock has 46.2% support among likely voters, with 3.5% remaining undecided.

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

**[Appendix 3: Question List](#question-list)**

<h1 id="methods">Methods</h1>

<h3 id="survey-design">Survey Design</h3>

This poll was designed on Surveymonkey. The survey was 35 questions long and took an average of 5 minutes to complete. Questions consisted of matters of policy and relevant demographics.

<h3 id="survey-deployment">Survey Deployment</h3>

This poll was a combination of online surveying of 1405 participants using [Prolific](https://www.prolific.co/) - an online platform where people are recruited and paid to complete surveys - and 1000 participants using [Wick](https://www.wick.io/) - an online platform that allows for interactive voice response (IVR) to landline polling. Both platforms are non-political and non-partisan. The combination was chosen to cheaply recruit participants while maintaining high accuracy, as online surveys oversample younger voters and IVR oversamples older voters, allowing for a good combination when joined together.

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

- Respondents were given 1 point for saying they were &quot;Very likely&quot; to vote, 0.7 points for saying they were &quot;Likely&quot; to vote, 0.4 points for saying they were &quot;Neither likely nor unlikely&quot; to vote, and 0.1 points for saying they were &quot;Somewhat unlikely&quot; to vote. Respondents were also given 0.7 points if they said they already voted, so as to not overly weight people who already voted (given that these people tend to skew Democratic).
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

We further attempted to experiment with novel weights not used by other pollsters, such as weighing on social trust, socioeconomic attitudes, and religious attitudes as measured by the [General Social Survey](https://gss.norc.org/), correcting for polling&#39;s tendency to oversample atheists and people with high social trust. We also weighed by Facebook usage, correcting for polls tending to oversample online voters.

The use of these experimental weights did not materially change the results -- Loeffler leads by 4.5 instead of 4.1 and Perdue leads by 3.8 instead of 4.0. These experimental results still remain within the margin of error and the differences between the experimental weights and traditional weights are not statistically significant.

The code for the expiermental weights is [available publicly on GitHub](https://github.com/peterhurford/ga_sen_runoff_polling) under an MIT license. For more information, see [https://openmodelproject.org/](https://openmodelproject.org/).

<h1 id="question-list">Apendix 3: Question List</h1>

**Page 1 [Likely Voter Screen 1]**

Q1. What is your Prolific ID? _(skipped on IVR)_
*   _[open response - respondent fill in]_

Q2. There are two runoff elections on January 5th that determine control of the Senate. How much thought have you given to these races? _(skipped on IVR)_

*   Quite a lot
*   Some
*   Only a little

Q3. Are you eligible to vote in the 2021 Georgia runoff election?

*   Yes
*   No _(respondents who answered this are dropped from the dataset)_
*   Don’t know _(respondents who answered this are dropped from the dataset)_

Q4. Are you registered to vote in the 2021 Georgia runoff election?

*   Yes
*   No _(respondents who answered this are dropped from the dataset)_
*   Don’t know _(respondents who answered this are dropped from the dataset)_

Q5. Do you plan to vote in the 2021 Georgia runoff election?

*   Yes
*   No _(respondents who answered this are dropped from the dataset)_
*   Don’t know _(respondents who answered this are dropped from the dataset)_

Q6. Have you already voted in the 2021 Georgia runoff election?

*   Yes
*   No
*   Don’t know

**Page 2 [Likely Voter Screen 2A]**

_(Skip page if plan to vote Q5 is No, registered to vote Q4 is No, or eligible to vote Q3 is No)_

_(Skip page if already voted Q6 is Yes)_

Q7. How are you planning to vote?

*   In person before election day
*   In person on election day
*   By mail, and I’ve already requested and received my mail-in ballot
*   By mail, and I’ve already requested my mail-in ballot
*   By mail, but I haven’t requested my mail-in ballot yet
*   Other
*   Don’t know

Q8. How likely are you to vote?

*   Very likely
*   Somewhat likely
*   Neither likely nor unlikely
*   Somewhat unlikely
*   Very unlikely

Q9. Compared to previous elections, are you more enthusiastic than usual about voting, or less enthusiastic?

*   More enthusiastic
*   Less enthusiastic

**Page 3 [Likely Voter Screen 2B]**

_(Skip page if plan to vote Q5 is No, registered to vote Q4 is No, or eligible to vote Q3 is No)_

_(Skip page if already voted Q6 is not Yes)_

Q10. How did you vote?

*   In person early voting
*   By mail
*   Other
*   Don’t know

**Page 4 [Vote Choice 1]**

Q11. In the 2016 Presidential election, who did you vote for?

*   Hillary Clinton, the Democrat
*   Donald Trump, the Republican
*   Gary Johnson, the Libertarian
*   Jill Stein, the Green Party
*   Another candidate
*   Did not vote

**Page 5 [Vote Choice 2]**

Q12. In the 2020 Presidential election, who did you vote for?

*   Joe Biden, the Democrat
*   Donald Trump, the Republican
*   Another candidate
*   Did not vote

**Page 6 [Vote Choice 3A]**

_(Skip page if already voted Q6 is Yes)_

Q13. In the 2021 January Georgia regular election, who do you intend to vote for?

*   David Perdue, the Republican
*   Jon Ossoff, the Democrat
*   Another candidate
*   Do not intend to vote
*   Not decided

Q14. In the 2021 January Georgia special election, who do you intend to vote for?

*   Kelly Loeffler, the Republican
*   Raphael Warnock, the Democrat
*   Another candidate
*   Do not intend to vote
*   Not decided

**Page 7 [Vote Choice 3B]**

_(Skip page if already voted Q6 is not Yes)_

Q15. In the 2021 January Georgia regular election, who did you vote for?

*   David Perdue, the Republican
*   Jon Ossoff, the Democrat
*   Another candidate
*   Did not vote
*   Don’t remember

Q16. In the 2021 January Georgia special election, who did you vote for?

*   Kelly Loeffler, the Republican
*   Raphael Warnock, the Democrat
*   Another candidate
*   Did not vote
*   Don’t remember

**Page 8 [Vote Choice 3C]**

_(Skip page if already voted Q6 is No and plan to vote Q5 is not No. Skipped also on IVR)_

Q17. Which of these reasons explains why you are not voting in the 2021 January Georgia runoff elections? Please check all that apply. 

*   I’m not eligible to vote
*   I’m not interested in voting
*   I don’t have enough time to vote
*   I don’t feel like I know enough to vote
*   I don’t like any of the candidates
*   The voting process is rigged
*   I am intentionally boycotting the runoff election
*   Another reason

**Page 9 [Fraud]**

Q18. If all legal votes were fairly counted, who do you think actually won the 2020 Presidential election in the state of Georgia?

*   Joe Biden
*   Donald Trump
*   Don’t know / Not sure

Q19. Do you trust the 2021 Georgia runoff election to accurately count your vote?

*   Definitely Yes
*   Probably Yes
*   Probably No
*   Definitely No
*   Don’t know / not sure 

Q20. Should Donald Trump concede and admit that he lost the 2020 Presidential election?

*   Yes
*   No
*   Don’t know / not sure

**Page 10 [Demographics 1]**

Q21. Generally speaking, would you say that most people can be trusted or that you can't be too careful in dealing with people?

*   Most people can be trusted
*   You can’t be too careful
*   Don’t know

Q22. Which of these statements comes closest to describing your feelings about the Bible?

*   The Bible is the actual word of God and it is to be taken literally, word for word
*   The Bible is the inspired word of God but not everything should be taken literally, word for word
*   The Bible is an ancient book of fables, legends, history, and moral precepts recorded by man
*   I don’t know

Q23. How much do you agree or disagree with the following? “It is sometimes necessary to discipline a child with a good, hard spanking.”

*   Don’t know
*   Strongly agree
*   Agree
*   Neither agree nor disagree
*   Disagree
*   Strongly disagree

Q24. How much do you agree or disagree with the following? “Birth control is morally wrong.”  _(Skipped on IVR)_

*   Don’t know
*   Strongly agree
*   Agree
*   Neither agree nor disagree
*   Disagree
*   Strongly disagree

**Page 11 [Demographics 2]**

Q25. Have you ever tested positive for COVID?  _(Skipped on IVR)_

*   Yes
*   No
*   Don’t know

Q26. Do you know anyone who has died because of COVID? _(Skipped on IVR)_

*   Yes
*   No
*   Don’t know

Q27. Have you or your family had trouble paying bills or rent because of COVID?

*   Yes
*   No
*   Don’t know

Q28. Have you or anyone in your family lost their job or reduced their work hours due to COVID?  _(Skipped on IVR)_

*   Yes
*   No
*   Don’t know

**Page 12 [Demographics 3]**

Q29. Which of these social media networks do you use? (check all that apply)

_[randomize answers, except for the last one]_

*   Facebook
*   Twitter
*   Instagram
*   TikTok
*   Pinterest
*   Yapyap _[fake answer to check if people are distracted and/or lying]_
*   None of the above

**Page 13 [Demographics 4]**

Q30. What is your gender?
*   Male
*   Female
*   Other

Q31. In which year were you born? Please write your answer as 4 digits only
*   _[open response - respondent fill in]_

Q32. What is your race?

*   White or Caucasian
*   Black or African American
*   Hispanic or Latino
*   Asian or Asian American
*   American Indian or Alaska Native
*   Native Hawaiian or other Pacific Islander
*   Another race

Q33. What is the highest level of education you have completed?

*   Did not attend school
*   1st grade
*   2nd grade
*   3rd grade
*   4th grade
*   5th grade
*   6th grade
*   7th grade
*   8th grade
*   9th grade
*   10th grade
*   11th grade
*   Graduated from high school
*   1 year of college
*   2 years of college
*   3 years of college
*   Graduated from college
*   Some graduate school
*   Completed graduate school

Q34. What is your annual income?

*   Under $15,000
*   Between $15,000 and $29,999
*   Between $30,000 and $49,999
*   Between $50,000 and $74,999
*   Between $75,000 and $99,999
*   Between $100,000 and $150,000
*   Over $150,000


**Page 14 [Demographics 5]**

Q35. Which of these counties do you live in?

*   Fulton County, GA
*   Gwinnett County, GA
*   Cobb County, GA
*   DeKalb County, GA
*   Another county

Q36. Would you say you live closer to Florida or closer to Tennessee?

*   Closer to Florida
*   Closer to Tennessee

Q37. Would you say you live closer to Alabama or closer to South Carolina?

*   Closer to Alabama
*   Closer to South Carolina

Q38. Which of the following best describes the area in which you live?

*   Urban
*   Suburban
*   Rural


**Page 15 [Demographics 6]**

Q39. How honestly have you answered these questions? People depend on the honesty of your answers - if you admit to being dishonest, you will still be paid.

*   Not honestly at all _(respondents who picked this were dropped from the dataset)_
*   Somewhat honestly _(respondents who picked this were dropped from the dataset)_
*   Very honestly
*   Completely honestly
