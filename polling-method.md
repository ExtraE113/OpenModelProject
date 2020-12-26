---
title: 'Polling Methodology'  
date: 2020-12-23  
layout: page  
bodyClass: page
---

# Collecting Data

We sent the survey to 1600 Georgia respondents via Prolific online survey and Wick “IVR to landline”, using weighting
instead of quota sampling to ensure representativeness.

## Survey Design

This poll was designed on Surveymonkey. The survey was 39 questions long and should have taken an average of five
minutes to complete. Questions are below.

## Survey Deployment

The poll was conducted on [Prolific](https://www.prolific.co/)
and [Wick's IVR to landline polling](https://www.wick.io/).

The survey respondents will be advertised to participants on the platform as “A Survey about Attitudes” with the
description “In this survey you will be asked a number of questions regarding your attitudes to certain policy
proposals. You will also be asked some basic demographic information.” The nature of the survey was not disclosed any
further, so we would not expect any additional selection bias in who takes the poll, beyond the bias already present in
using an online platform like Prolific.Only Georgians will be allowed to take our survey, and Prolific had about 1,200
eligibleparticipants at the time. We sampled 800 of them. We will pay ~$0.88 for participants tocomplete the survey,
which worked out to an average hourly rate of ~$10/hr. This is normal forProlific. We will also supplement our
respondent count using Wick “IVR to landline” polling.

# Processing the data

It's important to process the data to insure accuracy and completeness.

## Quality Filtering

Online surveys do not always produce accurate information - sometimes participants could be deliberately dishonest or
otherwise low quality to the extent where it is best to remove them when conducting with analysis. Some participants may
be removed because when asked “How honestly have you answered these questions?” at the very end of the survey, they
replied “Not honestly at all” or “Somewhat honestly” instead of “Very honestly” or “Completely honestly” (see
[Robinson-Cimpian, 2014](https://journals.sagepub.com/doi/abs/10.3102/0013189X14534297)).Some participants may be
removed because they failed an attention check - when asked “Which social media network do you use?”, they indicate that
they used a social media program that did not exist (there was one such program, “Yapyap,” on the list).

## Demographic Weighting

Surveys only capture a sample of the population, so we know that the result probably won’t exactly match the “true”
result that we would get if we surveyed everyone in the population or that we would expect to see on election day. The
margin of sampling error describes how close we can reasonably expect a survey result to fall relative to the true
population value. A margin of error of plus or minus 3 percentage points at the 95% confidence level means that if we
fielded the same survey 100 times, we would expect the result to be within 3 percentage points of the true population
value 95 of those times. Without adjustment, surveys tend to overrepresent people who are easier to reach and
underrepresent those types of people who are harder to reach. In order to make the results more representative we weight
the data so that it matches the population – based on a number of demographic measures. Weighting is a crucial step for
avoiding biased results, but it also has the effect of making the margin of error larger. Using US Census data, we can
get a rough sense of the proportions of gender, race, and age we would expect to see in our sample. We used the
[surveyweights](https://github.com/rethinkpriorities/surveyweights) Python package developed by [Peter Hurford](/team)
at Rethink Priorities to create weights to adjust for race, age, gender, education, income, socioeconomic status,
region, 2016 Presidential vote, 2020 Presidential vote, social media usage, and religious attitudes. These weights were
used to upsample and downsample responses accordingly to produce results that would end up matching the US Census data.
All data to form weights, and sourcing for that information, is contained within the publicly available source code for
the package.

To allow users to make their own judgment calls we let them pick to include any (or none) of 12 variables in any
combination.

## Likely Voter Weighting

To create a view of what will happen on election day, it is important to only sample those who vote. However, many
people ineligible to vote and eligible voters who end up deciding not to vote still show up in our survey sample. To
resolve this, we create a probabilistic likely voter model and weigh our results accordingly. Our likely voter model is
based on the Perry-Gallup index outlined in (Pew
2016)[https://www.pewresearch.org/methods/2016/01/07/measuring-the-likelihood-to-vote/]. Users assign point values to
different stated behaviors and that is used to calculate a likelihood score.

Scores were mapped to probabilities of voting by transforming the decimal score to a whole number score from 0-7. These
scores were then mapped `0 -> 0.11, 1 -> 0.13, 2 -> 0.23, 3 -> 0.34, 4 -> 0.4, 5 -> 0.59, 6 -> 0.63, 7 ->
0.83` (taken from Pew Research). Probabilities were then converted to likely voter weights by normalizing all the
probabilities to sum to 1 across the dataset. These likely voter weights were then combined with demographic weights to
adjust the sample to a likely voter electorate.

## Electoral Modeling

Weighted results from the topline figures were used to construct *80% naive modeled confidence intervals* (NMCIs). NMCIs
are intended to use polling results to predict actual election results using data from the poll alone and historical
information about polling accuracy, but not other polls or other non-polling information like fundamentals. NMCI are not
just the CIs implied by the raw polling margin of error. An 80% NMCI from *x* to *y* is meant to imply that there is an
80% chance that the true value as observed on election day will fall between *x* and *y*.

# Open Source

All modeling, survey analysis code, and survey data are publicly available in a commitment to open source to help
others understand polling and the judgement calls that go into them, allowing them to see how their own judgement calls
affect the results.

# Question List

Note that the Wick “IVR to landline” survey is limited to 15 questions, so it will just use Q2, Q4,Q7, Q8, Q11, Q12,
Q13, Q17, Q18, Q20, Q22, Q28, Q29, Q31, and Q32 below.

## Page1 - LikelyVoterScreen1

Q1. What is your Prolific ID? [open response - respondent fill in]
Q2. There are two runoff elections on January 5th that determine control of the Senate. How much thought have you given
to these races?

- Quite a lot
- Some
- Only a little

Q3. Are you eligible to vote in the 2021 Georgia runoff election?

- Yes
- No
- Don’t know

Q4. Are you registered to vote in the 2021 Georgia runoff election?

- Yes
- No
- Don’t know

Q5. Do you plan to vote in the 2021 Georgia runoff election?

- Yes
- No
- Don’t know

Q6. Have you already voted in the 2021 Georgia runoff election?

- Yes
- No
- Don’t know

## Page2 - LikelyVoterScreen2A

(Skip page if plan to vote Q5 is No, registered to vote Q4 is No, or eligible to vote Q3 is No) (Skip page if already
voted Q6 is Yes).

Q7. How are you planning to vote? In person before election day

- In person on election day
- By mail, and I’ve already requested and received my mail-in ballot
- By mail, and I’ve already requested my mail-in ballot
- By mail, but I haven’t requested my mail-in ballot yet
- Other
- Don’t know

Q8. How likely are you to vote?

- Very likely
- Somewhat likely
- Neither likely nor unlikely
- Somewhat unlikely
- Very unlikely

### Page3 - LikelyVoterScreen2B

(Skip page if plan to vote Q5 is No, registered to vote Q4 is No, or eligible to vote Q3 is No) (Skip page if already
voted Q6 is not Yes)

Q9. How did you vote?

- In person early voting
- By mail
- Other
- Don’t know

## Page4 - VoteChoice1

Q10. In the 2016 Presidential election, who did you vote for?

- Hillary Clinton, the Democrat
- Donald Trump, the Republican
- Gary Johnson, the Libertarian
- Jill Stein, the Green Party
- Another candidate
- Did not vote

## Page5 - VoteChoice2

Q11. In the 2020 Presidential election, who did you vote for?

- Joe Biden, the Democrat
- Donald Trump, the Republican
- Another candidate
- Did not vote

## Page6 - VoteChoice3A

(Skip page if already voted Q6 is Yes)

Q12. In the 2021 January Georgia regular election, who do you intend to vote for?

- David Perdue, the Republican
- Jon Ossoff, the Democrat
- Another candidate
- Do not intend to vote
- Not decided

Q13. In the 2021 January Georgia special election, who do you intend to vote for?

- Kelly Loeffler, the Republican
- Raphael Warnock, the Democrat
- Another candidate
- Do not intend to vote
- Not decided

## Page7 - VoteChoice3B

(Skip page if already voted Q6 is not Yes)  
Q14. In the 2021 January Georgia regular election, who did you vote for?

- David Perdue, the Republican
- Jon Ossoff, the Democrat
- Another candidate
- Did not vote
- Don’t remember

Q15. In the 2021 January Georgia special election, who did you vote for?

- Kelly Loeffler, the Republican
- Raphael Warnock, the Democrat
- Another candidate
- Did not vote
- Don’t remember

## Page8 - VoteChoice3C

(Skip page if already voted Q6 is No and plan to vote Q5 is not No)
Q16. Which of these reasons explains why you are not voting in the 2021 January Georgia runoff elections? Please check
all that apply.

- I’m not eligible to vote
- I’m not interested in voting
- I don’t have enough time to vote
- I don’t feel like I know enough to vote
- I don’t like any of the candidates
- The voting process is rigged
- I am intentionally boycotting the runoff election
- Another reason

## Page9 - Fraud

Q17. If all legal votes were fairly counted, who do you think actually won the 2020 Presidential election in the state
of Georgia?

- Joe Biden
- Donald Trump
- Don’t know / Not sure

Q18. Do you trust the 2021 Georgia runoff election to accurately count your vote?

- Definitely Yes
- Probably Yes
- Probably No
- Definitely No
- Don’t know / not sure

Q19. Should Donald Trump concede and admit that he lost the 2020 Presidential election? -Yes

- No
- Don’t know / not sure

## Page10 - Demographics1

Q20. Generally speaking, would you say that most people can be trusted or that you can't be too careful in dealing with
people?

- Most people can be trusted
- You can’t be too careful
- Don’t know

Q21. Which of these statements comes closest to describing your feelings about the Bible?

- The Bible is the actual word of God and it is to be taken literally, word for word
- The Bible is the inspired word of God but not everything should be taken literally, word for word
- The Bible is an ancient book of fables, legends, history, and moral precepts recorded by man
- I don’t know

Q22. How much do you agree or disagree with the following? “It is sometimes necessary to discipline a child with a good,
hard spanking.”

- Don’t know
- Strongly agree
- Agree
- Neither agree nor disagree
- Disagree
- Strongly disagree  
  Q23. How much do you agree or disagree with the following? “Birth control is morally wrong.”
- Don’t know
- Strongly agree
- Agree
- Neither agree nor disagree
- Disagree
- Strongly disagree

## Page11 - Demographics2

Q24. Have you ever tested positive for COVID?

- Yes
- No
- Don’t know  
  Q25. Do you know anyone who has died because of COVID?
- Yes
- No
- Don’t know

Q26. Have you or your family had trouble paying bills or rent because of COVID?

- Yes
- No
- Don’t know  
  Q27. Have you or anyone in your family lost their job or reduced their work hours due to COVID?
- Yes
- No
- Don’t know

## Page12 - Demographics3

Q28. Which of these social media networks do you use? (check all that apply) (randomize answers, except for the last
one)

- Facebook
- Twitter
- Instagram
- TikTok
- Pinterest
- Yapyap (fake answer to check if people are distracted and/or lying)
- None of the above

## Page13 - Demographics4

Q29. What is your gender?

- Male
- Female
- Other

Q30. In which year were you born? Please write your answer as 4 digits only

- [open response - respondent fill in]

Q31. What is your race?

- White or Caucasian
- Black or African American
- Hispanic or Latino
- Asian or Asian American
- American Indian or Alaska Native
- Native Hawaiian or other  
  Pacific Islander
- Another race

Q32. What is the highest level of education you have completed?

- Did not attend school
- 1st grade
- 2nd grade
- 3rd grade
- 4th grade
- 5th grade
- 6th grade
- 7th grade
- 8th grade
- 9th grade
- 10th grade
- 11th grade
- Graduated from high school
- 1 year of college
- 2 years of college
- 3 years of college
- Graduated from college
- Some graduate school
- Completed graduate school

Q33. What is your annual income?

- Under $15,000
- Between $15,000 and $29,999
- Between $30,000 and $49,999
- Between $50,000 and $74,999
- Between $75,000 and $99,999
- Between $100,000 and $150,000
- Over $150,000

## Page14 - Demographics5

Q34. Which of these cities do you live closest to?

- Atlanta, GA
- Athens, GA
- Augusta, GA
- Columbus, GA
- Savannah, GA

Q35. Which of these counties do you live in?

- Fulton County, GA
- Gwinnett County, GA
- Cobb County, GA
- DeKalb County, GA
- Another county

Q36. Would you say you live closer to Florida or closer to Tennessee?

- Closer to Florida
- Closer to Tennessee

Q37. Would you say you live closer to Alabama or closer to South Carolina?

- Closer to Alabama
- Closer to South Carolina

Q38. Which of the following best describes the area in which you live?

- Urban
- Suburban -Rural

## Page15 - Demographics6

Q39. How honestly have you answered these questions? People depend on the honesty of your answers - if you admit to
being dishonest, you will still be paid. -Not honestly at all

- Somewhat honestly
- Very honestly
- Completely honestly  

