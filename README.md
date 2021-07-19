# Algorithms_JS

# /countingDaysAbroad.js
Live on Codepen (https://codepen.io/Kons_athlon/project/editor/XMnLdo#)
## 1. Background
### 1.1 Target Audience - Purpose
* For residents of the UK with pre-settled status who travel very often, 
* to keep track of the days they 've been outside the country on any 12 month period in order to maintain their status.

### 1.2 The law
People who want to apply for settled-status required to have 5 years of continuous residence in the UK.
Five years continuous residence means that for 5 years in a row they’ve been in the UK, for at least 6 months in any 12-month period. 
  
  visit [gov.uk/..](https://www.gov.uk/settled-status-eu-citizens-families/what-settled-and-presettled-status-means) for more details.
  
## 2. Functionality
### 2.1 Input
Takes an array of objects where every object has a pair of properties with values that define the dates of departure and return.

for example:

![example_countDays](https://user-images.githubusercontent.com/79989252/126182380-f6a7b3bb-0b12-4ecf-b64b-0bd7d770871c.png)

### 2.2 Output
Returns a string with the total days of absence in a 12 month period starting on the day of departure of each trip.

for example:

![output_doa](https://user-images.githubusercontent.com/79989252/126192318-2aaac4d6-69b9-4e7e-baa5-4914be8e5479.png)

[Try it on Codepen](https://codepen.io/Kons_athlon/project/editor/XMnLdo#)




