This project makes use of HTML, CSS, and JavaScript, as well as Node.js, Mongoose, Express, dotenv, bcrypt, and EJS to create a fullstack application that enables the user to interact with others and share analysis on the novels and respective chapters of their choice. My main goal and "user story" was to provide users with a virtual space where they can participate in book club-esque conversations.

I utilized MVC file structure for this project as a means to streamline my code so that files and folders was appropriately organized. I feel as though this is crucial because it enables me to easily jump back into my code later on and expand on it if I want to.

In conjunction with the aforementioned tools and structure, I also utilized the seven RESTful routes and full CRUD in order to allow the user to create new posts, view all posts, view individual pages for each posts, edit posts, and delete posts.

The approach I took to designing this project was to start with designing for desktop and then later adapting my code to work with mobile devices as a stretch goal. I started with creating my server.js, data model, and posts controller. From here I moved on to creating my different RESTful routes. When these were all functional I created my base HTML and started to work on some of the styling. I decided to use the Materialize CSS framework because I really like the way their navbars and forms are styled. These are also typically pretty difficult for me to style myself. Outside of the navbars and, however, the app is largely styled manually.

Upon putting the final touches on styling the app I then got to work on some stretch goals, namely adding signup/login functionality with encrypted passwords and an authorization flow. When I was done with this I ran into my first unsolved problem: trying to figure out how to prevent users from editing or deleting posts that they didn't author. I could not figure out how to automatically assign each post to the user that created them and ultimately had to abandon the idea. If I had more time to work on the project I would love to try to get this working.

My next stretch goal was to use media queries so that the app looked presentable on mobile. I feel as though this worked out well, however another unsolved problem is that the background appears to pop when the mobile browser's url bar disappears upon scrolling down on the website. I read into how to potentially fix this issue, but nothing I tried appeared to work.

I was happy with how my app turned out overall, just wish I had some more time to work on some of the stretch goal features I had originally planned on incorporating. While I'm not 100% in love with how my styling turned out it's a huge step forward for me in terms to creating something semi-decent with no source material to copy from.

Some other ideas I tossed around but didn't get to implement were: linking to Amazon/Goodreads fo each book automatically so that the user could buy a copy/read reviews, incorporating Google Maps to show the nearest public library, separating each novel/discussion by genre, and providing the ability to reply directly to each post to create a Reddit-esque forum.

Link to wireframes I created prior to creating my app:
    https://i.imgur.com/kn4MAXH.jpg
    https://i.imgur.com/QdlX4dB.jpg
    https://i.imgur.com/eTrzxe4.jpg

Link to live site: https://cbellaro-express-mongo-example.herokuapp.com/posts
