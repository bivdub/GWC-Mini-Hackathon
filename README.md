#Welcome Hackathoners!
This repository stores a base template which will give you a head start on your mini-hackathon. To use it it, just fork the repo to your own github (or download it) and type `npm install`. 

##What's in this thing anyways?
A basic NodeJS and Express app using EJS as its templating language. Twitter Bootstrap and JQuery have also been loaded for the front end if needed. The navbar utilizes Bootstrap. If you aren't already familiar with Bootstrap take some time to learn the basics (it'll save your bacon at a hackathon when putting together your site layout) or ask one of the helpers at the hackathon. 

The site as is set up with a search bar the when called will use the suggest api to get results for the location you put in and then it will take the latitude and longitude for the first result and search for all hotels within a 5km radius. It will then print out the results in a list with a link to the hotel on Expedia's site, and the street address. All the calls use the Request module and rendered on a single page that also serves as the home page.

##So what am I supposed to do with this?
Well, that is up to you, but here are some ideas to get things flowing:

- The UI given is pretty basic, so the presentation of the data might be one place to focus. 
- Using the suggest as it was intended, as a type-ahead api, might be another option. Currently, if you were to type in Springfield it just returns reults for Springfield, MO, which is not helpful if you are traveling to Illinois. 
- You might try implementing a scratch pad that uses local window storage to allow the user to keep a list of their searches. 

In short, the intersection of what can be done better, and what you can do in about 60 minutes (leave a little time to test and wrap things up).

##What else should I do to prepare?
**Don't put any new code in!** Save that for the hackathon. Instead, try the APIs used in the app at <http://hackathon.expedia.com/> (suggestions and resolutions, and hotel search) and familiarize yourself with the results returned so that you know how to get to the data you want. You'll have to sign up to get an apikey. Check out the Request module and EJS if you don't know them, and get used to Bootstrap. 

#Good Luck and Happy Hacking!