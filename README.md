# Financial Times - cloud engineer exercise

Build a website hosted in the cloud (e.g. AWS, Google, Heroku) that asks for and stores a simple rating score for using ft.com.
Provide a diagram of your site architecture showing key components that illustrate your approach.

__Optional Features__
For bonus credit consider using one or more of these techniques:
- Templated infrastructure as code.
- Automated testing
- Origami Components/FT look and feel
- The ability to view the ratings/results


### Let's get started!

#### User stories

From the specs provided, I have decided to comply with the following user stories

```
As a user,
so that I can share my experience of ft.com,
I want to be able to see a rating system
```
```
As a user,
so that I can give the website a rating,
I want to be able to click on a button
```


#### Architecture / Technologies / Testing

- The goal was to use REACT and the MERN stack to work on this assignment
- REACT ARCHITECTURE - In terms of structure, my application is made of the following:

Component      | Purpose                | Technology/Framework | Testing library
------------ | -------------------------- | ------------ |---------
App.js| Imports various components within the application | JavaScript | Jest
UsersRatings.js| Component that enables the ratings logic.| Node.js/Express | Mocha
server.js| enables access to databse through client requests | Express |
ratingsdatabase.js | Database for the users ratings | MongoDB |

Please note: dependencies can be found in the package.json file of this project


#### Deployment

- I was planning on using Heroku to deploy the completed application.



#### How to use
To run this application, please follow the steps below!

- Clone and setup repository:

You will need to setup the repo on your local machine; please enter the following commands from your command line:

```
  $ git clone https://github.com/evadinckel/FT-cloud-engineer-exercise
```
Move into this directory.

You will then need to install dependencies by running the following:
```
  $ npm install
```
- Next:

Please run the following command to see the application in your browser:
```
$ npm start
```

- Running the command above should open a browser window, where you can give your vote!


#### Notes

 - Room for improvement on the below:
    - testing
    - styling of the UI
    - needed a database in place



#### Additional notes

This test has been a really interesting exercise for me, I have chose to build a MERN stack based application, which has shown to be quite ambitious. All tech tests are incredibly helpful to keep on developing skills, so I take this assignment as valuable practice.




The end :)
