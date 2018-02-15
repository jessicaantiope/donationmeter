# donationmeter
A crowdfunding source for local bakeries

USER STORIES

**MVP**
-See the whole donor list on a page
-Be able to see the total amount of donations
-Submit a form with name and amount donated
-Be able to see a visual change when a donation is made
-An acknowledgement of thanks
-See top 5 on homepage

**STRETCH GOALS**
-The meter goes up by percentage
-Use more than one charity
-Sort by donor, amount
-Admin page with data details (payment details)
-Admin page = restricted view
-Mandatory form fields
-Anonymous button in form
-Thank you message is personalised
-Thank you message says “again” for repeat donors

**TESTING**

-> THERMOMETER.JSX
-red line goes up based on form input
-props.amount returns a number not a string (console.log(props.amount)) / e.target.value is converted to number at input
-thermometer increases appropriately after 2/multiple donations in a row


