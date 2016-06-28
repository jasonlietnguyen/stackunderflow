![StackUnderflow](assets/img/stackunderflow-alt.png)
================================================

Step 1: The Requirements
------------------------

> Good Questions are hard to come by.... and their answers even more so. As your client I am requesting you to build me an application that will be the next best thing since sliced bread. 
-Jake Overall instructer at BCW

###Stackunderflow was built and given to us needing the following features to function like Stackoverflo
1. A place for users to post questions.
2. Each question should be able to have its own list of responses and comments. 
3. Each Response can have its own list of comments.
4. Responses can be marked as solutions.
5. Questions, Responses, and comments can be upvoted or downvoted and should be ordered according to the most votes.
6. Questions should also be sortable by date.
7. Questions should be able to have topic tags attached to help with searching.
8. A search bar should be availble and will filter the questions based upon the query.
---------------------------------------------------------------------------------------
This was the first TEAM project we worked on at BCW.

The app uses Firebase as its database.

This was a sizable project at the time and I got to work with 2 other awesome people on this project, Jason and Nora.
---------------------------------------------------------------------------------------------------------------------
We had to use the files at our disposal to add, edit, and build out the rest of the functionality for our StackUnderflow and good starting point was either the dashboard-component.js or the questions-component.js and their respective views.

>The js files we were given to work with had been written in Angular.js before components were released, but the use of directives and $scope absolutely and without question makes me cringe when im working on code intended for web applications. I am very set in the way that code is evolving across most Languages that aren't as heavily typed that we should aim towards the use of components and isolated scope.

###Have you ever seen an object or a building that's so symetrical that it was almost comforting or relaxing on a psychological level? 
I have conditioned myself to enjoy the orginization and use of SOLID princples in component based frameworks. The Single-responsibilty principle really helps me organize my thought processes and I have found that my work ethic is phenominally more productive when I have a strict routine of orginization when I am coding along with reading documentation in my free time about good practice. 

Our team's version had fore-gone proper naming conventions in a majority of the files by one(wont say who) person that we had as our git-master, So I had to spend a couple days rewritting almost all of the controllers into components and building out the rest of the functionality required for our project to at least be a decent, functioning application and keeping our code anonymous.

When we finished the project, I felt that this was definitley the most complex task list or to-do apllication we had ever worked on. The silly naming conventions for the bulk of the application drove me LITERALLY INSANE. 

So, reluctantly, about a week later, I changed everything that we would wrote for our stackunderflow project to work with an isolated scope and named them accordingly. And I see myself continuing to make this repo better over time just because I felt like I had a good time working on it and I might need to clone some code in the future for member profiles and data caching.

If I had any advice for junior developers, it would be to stay organized, be flexible with learning new languages, and when you are working on your own projects you need to build things that YOU ARE ABSOLUTLEY ecstatic about and otherwise just write simple applications until you are completely comfortable with the skills you needed to finish them.

##Member Object and Data Service 
>Anytime we wanted to access the memberObject from a controller we had to use `$rootScope`.
This was a good introduction to `$firebaseObject` and Angulafire but in every controller we would have to left-hand assign a variable similar to `vm.member` with `$rootScope.member` it was repetative to say at the very least when navigating and saving information attached to the user object.

Now, In my time spent watching tutorials and reading documentation on back-end services I learned that saving all of the user information on a parent object(USERS) in a database is and forever will be A BAD way to design tables for the reason that in production code with thousands of users, its one level of potentially hundreds of thousands of people and their personal information stored on a single level in a Database, and if you needed to write a function to grab a group of people on the list you would be handling an insane amount of information to dive in and retrieve that list people. There are many to avoid this when you are writing an application and(not to point any fingers) I think its a valuable thing to teach at a developement bootcamp. But for the purpose of this project the way we did it was fine.

At this point in time I have heard talk of Shadow DOMs and I'm interested in (without sounding too naieve) knowing the difference between $rootScope and a Shadow DOM and how they work on a device CPU 

I have an open source js file that has my answer to storing member information, here


###What we accomplished
Storing Questions, author information, date posted and user auth.

A functioning Question Array and Question component for get, post, edit, and delete thanks to Nora.

A great UX designed by Jason except the awesome background visible now, my new favorite AQUAMARINE!!!

And a well thought out DataService written by Nora and I.

A good working relationship between all three of us.
###What I did later on 
User profile customization, Answers and Comments attached to each question, and an Isolated scope in each component file


###What I want to finish

up-voting, searching and filtering for questions and users, user profile page and direct messaging, marking a correct answer, and reputation values.





--------------------------------------------------------------

## Copyright

© BoiseCodeWorks LLC, 2016.

![bcw](https://boisecodeworks.com/assets/img/nav-logo.png)