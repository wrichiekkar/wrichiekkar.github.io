# TheSource Business Case

## Challenges:
1. Low frequency of customer purchase
2. Low conversion rate (customers visit in-store to making a purchase online)
3. Customer reach (stores in low traffic areas, dealer stores)

<b>Guiding Focus: You will be investigating what makes companies like Apple or Amazon the market leaders. You will also be addressing some of the key challenges of the Source, identify their root cause and propose a business solution.</b>

## Solution
Created a loyalty program focused on incentivizing the 2nd purchase. Our solution includes an analysis, recommendations, implementations(Loyalty card, website, andriod app), financials, and risk management.

##Website
The website was designed used HTML, CSS, Javascript, and Bootstrap. The initial page, index.html was created to act as a sales page to pitch the idea to TheSouce customers.

In the navigation bar, the my account section was created to show an authenticated vs non-authentiacated view. On this page you can sign up, or login to TheSource rewards program. The login was created using a real-time database (google firestore). Once you enter an email and password, it sends a request to the database verifying the credentials, any errors are logged to the console. Upon successful authentication, the page becomes a Member page (authenticated view). On this page you can see a demo as to what a potential authenticated user can see.

##App
The app was created using Java. Similar to the website, the login sends a request to a database, verifying the credentials. 

