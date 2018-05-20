// INSTALLATIONS

// npm init -y
// this command basically says: we are using this folder for an npm based project, (npm init), the (-y) says fill the package.json with the base information.

// Node               - nodejs.org manual download.                               [JS Server technology]
// NPM                - comes with node.                                          [node package manager]
// Nodemon            - npm install -g nodemon                                    [keeps your node server up and running when you fix crashes]
// Bower              - npm install -g bower                                      [front-end package manager]
// Express            - npm install express (don't -g install. just doesn’t work) [light, flexible node framework. makes routing a breeze]
// EJS                - npm install ejs (stands for Embedded JavaScript)          [templating engine. puts <script> tags to shame.]
// express-session    - npm install express-session                               [facilitates session data, lasting longer than the clients' connection.]
// body-parser        - npm install body-parser                                   [helps us handle post data. express can't]
// socket.io          - npm install socket.io                                     [facilitates realtime connection without http slowing us down]
// mongodb            - brew install mongodb                                      [BSON database. Basically JS. Super quick and scalable. NoSQL. See its section for more setup]
// mongoose           - npm install mongoose                                      [node module, accesses our mongodbs and provides structure for the data.]
// express-flash      - npm install express-flash                                 [displays mongoose validation errors. somehow mongoose didn't build that in. must have session to work.]
// bcrypt-as-promised - npm install bcrypt-as-promised                            [promisified bcrypt. encrypts sensitive info, and checks validity of hashes]


// passing "--save" after the name of the package will save it to your package.json so you can move this dependency configuration around to different projects easy peezy with:
// "npm install"




// NODE DESCRIPTION

// How
// As previously mentioned, Node.js uses Chrome's V8 engine to efficiently interpret JavaScript. V8, however, is written in C++ and JS. Why is this important? Well, it allows a relatively high-level language like JavaScript to be compiled to code that is run directly by the CPU! By using this engine, we can skip a bunch of steps in the runtime processes. That means speed, but it also means that our JavaScript interpreting scales to the power of our computer!

// Sockets
// One cool thing about Node.js is its ability to use WebSockets, a technology that allows a continuous, non-blocking connection between the client and server.

// If the traditional client-server model is something like morse code, where only one party can send data at a time, non-blocking connections allow both parties to send information at the same time. A phone call is a prime example of non-blocking communication: You can talk to your friend while your friend is speaking to you concurrently. With Node.js, we can easily set up these socket connections and have a persistent connection from each client to a server, which means we can actually force information onto the browser without the need of an HTTP request!

// Use cases
// Sockets make Node.js a great tool for making real-time applications. These are applications that exchange information as the users input it, with no lag. Things like chat rooms and multiplayer games are great examples of Node’s strengths. Also, Node servers are able to support lots of connections. A single node server can hold 200,000 connections whereas a single Apache server tops out at around 20,000 connections. 

// Drawbacks
// Heavy computation is a killer in a Node server, primarily due to poor memory management. In addition, if logic is required before entering the event loop, Node’s performance will decline dramatically. Similarly, Node is often used with noSQL databases such as MongoDB, which we’ll be using in this course. Mongo also uses a V8 engine core, but it doesn’t have the same event-loop (it’s just a worker), so large numbers of inefficient queries can back up that worker. This could take up enough memory that it prevents the event-loop from resolving events, making Node much less awesome.

// Node also has a very 'batteries-not-included' unopinionated style, favoring configuration over convention. Out of the box, we won't be able to do all the amazing things a full featured framework like Ruby on Rails can do. We'll need to bring in middleware and do our own configuration to really get the most out of Node!

// The upshot? You should use Node for what it’s good for: making servers capable of handling lots of connections and moving data quickly!




// FULL CODINGDOJO DEPENDENCY/MODULE/TECHNOLOGY LIST

// Nodemon
// Using nodemon instead of the node command in your terminal will automatically re-run your JavaScript file or project whenever you save something. That means no more manual server restarts!

// Bower
// To manage our front-end dependencies, we'll be using another package manager called bower. This will save us from having to hunt down the perfect CDN for important libraries like jQuery and Bootstrap.

// EJS
// Embedded Javascript is the templating engine we will use to render our views. When using EJS, your node server will take the .ejs file you wrote, parse through it, resolve all of the Javascript in the file, and then send a 'rendered' HTML page to the client. This is extra computation that the server will be required to do, and later we'll replace EJS with a full front end framework like Angular.

// Express
// Technically a Node module, but let's talk about it here too since it gets it's own letter in the acronym! Express is a wonderful set of tools that help us write rules for incoming HTTP requests. Express is arguably the most useful Node module in your collection, and only rarely will we not use it.

// express-session
// Session middleware for express. Stores data in the user session ID, lasting longer than the connection to the webpage

// express-flash
// Flash is an extension of connect-flash (somehow doesn't require it) with the ability to define a flash message and render it without redirecting the request. We use it for displaying mongoose validation errors. Requires session

// body-parser
// Guess what body-parser is used for? Parsing the body! We'll use this piece of middleware to parse information out of HTTP requests made to our server. Body-parser is incredibly flexible, and will be used to not only pull POST data out of requests, but can also snag data encoded into URLs via GET requests, and later you'll use body-parser to pull raw JSON.

// socket.io
// This node module will enable you to use web sockets within your application, we'll get into it more later. You will use socket.io for just this chapter!

// MongoDB
// BSON database technology. Super quick because it's not relational; each data piece doesn't have to be aware of the others. In SQL, you can't have data with as many rows and columns as the entry warrants; they all share the same table, and thus have to be handled differently, facilitating different tables with different values and expensive JOIN statements. Also, since MongoDB is based on JSON, it meshes gracefully with Node.

// Mongoose
// This is the node module that lets us connect to our MongoDB server (daemon) through node/express. It makes use of JavaScript's OOP, classes and objects to facilitate schemas, models of them, associations, validations, etc. providing structure to our data.

// bcrypt-as-promised
// This lets us encrypt things like passwords and check if they match encryption, as well as generate salts. Promisified.




// NODE: FS MODULE / HTTP MODULE

// An essential part of any server is the ability to read and write files.  Reading a file is how we obtain the content to serve to clients, and writing it is how we output content to the client.  If we don't have a way of doing this, we're not going to be able to build a server!   That is why the creators of Node.js built the fs (file system) module.  The FS module allows us to do exactly what we need: read and write content from files, and it is by default included in Node.js. It is very rare that you will see the HTTP module used without the fs module.  The HTTP module is the module that allows us to build a web server that accepts HTTP requests and can serve responses. Combining the fs and http modules, we can create simple web servers quite easily.




// NODE MODULARIZING NOTES

// Using require();
// You'll notice that we require() the string "./my_module". Two things to note:

// There is no .js at the end of the file. The require method automatically looks for JavaScript files, so we don't need to include a file extension.

// The files app.js and my_module.js are in the same directory. Normally, the require() method looks for node modules that aren't in the same directory as the file that is running; by default, the require() method looks for the modules located in a folder called node_modules. To tell require() to look in the current directory (i.e. the folder that the file is located in) we have to include "./" in front of the file path. "./" (dot-slash) is the file path for the current directory.




// STATIC CONTENT / TEMPLATES

// Generally, there are two ways to serve HTML/CSS/JS -- through Static Content or Templates. 
// Static Content -- Serving a static HTML/CSS/JS file from the backend in response to a request.
// Templates -- Using a view/templating engine to generate HTML (PHP, embedded ruby, embedded JavaScript)


// Serving Static with Express
app.use(express.static(__dirname + "/static"));
// we would have a dir called static we place all the static HTML/CSS/JS files in.
// in their example, the route i used to access it from localhost was '/main.html'


// Serving Templates with Express 
// ~~~ CHECK OUT first-express PROJECT ~~~

// we use EJS - npm install ejs

// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views'); 
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

// from here we hardcoded data to render when a certain url was req'd. in our '.ejs' file in the views, then, we use <% %> and <%= %> to embed JS in the html code.




// HTTP METHODS

// GET - for passing insensitive info
// POST - for passing sensitive info




// SOCKETS

// Servers also have one kind of listener, however they have three kinds of emitters. They can 
// 1) emit to all connected socket users, 
// 2) respond back directly to a client that initiated a socket message to us, and 
// 3) broadcast to all clients except for the one client that initiated a socket message to us. 


// Testing socket activities is an art form. The key points for testing socket stuff:

// * Use multiple browsers (Firefox and Chrome are the best tandem. Safari just isn't as good for debugging).
// * If you need multiple connections in the same browser, use an incognito/private browsing window. Not just another tab!!
// * When your server restarts, refresh every window. 
// * You do not need to wait to deploy to start testing your projects with multiple clients! Just go to your terminal and run the command ifconfig to find your ip address. Give this to a cohort mate and they can type that into their nav bar followed by a colon : and the port you are using to run your project, and you will be able to test your sockets with them. It will be something like 192.163.0.2:1337.
















// MONGODB

// ~~~~~~~~~~ Why ~~~~~~~~~~
// TL;DR: speed.

// MongoDB is a NoSQL database.  Well great, but what is a NoSQL database??  The acronym NoSQL stands for "Not Only SQL". What this means is that while NoSQL does support a structured query language (SQL) there is more flexibility in the storage of the data other than just basic tabular storage (a.k.a housing data in tables). Most importantly, the concept of NoSQL databases emphasizes that there are no relations between the data. Think of it this way:

// In a NoSQL environment, every piece of data is unaware of the other pieces.

// To be even more concise:

// NO JOINS

// This is different from the traditional relational database model that has been used throughout the software age. Only recently has the adaptation of NoSQL been a prominent phenomenon in the industry. Does this mean every piece of software needs to use a NoSQL database from now on? No. The ideal environment to use a NoSQL database in is one that focuses on speed while having little to no need of relationships between tables (or objects in this case). Reason being: joins are an expensive operation. Think about the concept of a join:

// " SELECT * FROM users LEFT JOIN address ON users.id = address.user_id "

// For every user, we have to find the address that matches specifically one piece of information in the address table. Doing this for every entry in your table would take a lot of time. We have dealt with databases in our curriculum that may have a few hundred entries at most. Now imagine a database with a few hundred thousand entries. Now join from another table that has a few hundred thousand entries. This process would be expensive in time and resources.

// With the ability of Node servers to use socket connections, we now have the ability to communicate in real-time between clients and servers. But if we need to do an expensive operation on the server side with the database, we'll negate all the speed advantages we've gained using a Node server. This is a good reason to consider MongoDB. There are plenty of NoSQL databases out there, why use MongoDB in particular? Why make it a quintessential part of the MEAN stack?

// Because everything stored in a MongoDB database is a JSON object.




// ~~~~~~~~~~ Installation ~~~~~~~~~~

// brew install Mongodb

// cd /         go to the root directory
// copy
// mkdir data   ** make a folder called data
// cd data      go into data folder
// mkdir db     ** make another folder called db

// mongod       you should see a blinking underscore.

//     DON'T CLOSE THIS WINDOW OR TYPE ANYTHING ELSE!
//     It's much easier to stop your server if you leave this window up.  If you do close it, the MongoDB server will keep running in the background.  Forever.  

//     To shut down your server from the server window, press...

// control + c  // on your keyboard in a terminal window.

//     Connect to your database:
//     To connect to your MongoDB databases, open a new tab in your terminal or a new terminal window and type...

// mongo

//     Now you should see the terminal cursor become a single arrow and beeping underscore. We're in!

//     Shutting down if your mongod window got closed:
//     This is harder.  Open a terminal window and type:

// ps -ax | grep mongo

//     then copy the number on the left of the row that shows 'sudo mongo' (or if that's not there, just 'mongo')  This is the process ID of the mongod command you ran.  Take that number and type

// sudo kill *that_number*
//     And you'll be good.  The kill command tells a process ID to terminate.  Intense terminal stuff, huh?




// ~~~~~~~~~~ BASICS ~~~~~~~~~~

// Databases

// show dbs                        shows all dbs on your server.
// db                              shows the db you're using.
// use db                          switches to a db (creates one if not in use)
// db.dropDatabase()               deletes the current database in use.


// Collections

// show collections                shows all collections
// db.createCollection("name")     self explanatory
// db.collection.drop()            deletes the collection




// ~~~~~~~~~~ Documents CRUD ~~~~~~~~~~ // Note: great examples in the intro-to-mongodb assignment.

// CREATE - Inserting a document into a collection:

// db.collection.insert({key: 'val'})



// READ - Retrieving documents from a collection:

// db.collection.find({key: 'val'})
// db.collection.find() ~or .find({})~     displays all of a collection.
// db.collection.find().pretty()           displays it all nice and easy to read.

// If you noticed, there is a field called _id on both records we put in the database. That is the MongoDB ObjectId, which MongoDB will automatically make for you if you do not specify a value for _id. To query by id, you have to do the following:

// db.ninjas.find({_id: ObjectId("5462a78e514e258182f4c69a")})

// Notice: You can't just pass the string of characters, you must pass it as an ObjectId.

// HINT: if you want to sort by something like creation time in MongoDB, you can sort by ObjectId because it is made by using a time stamp as part of the string.



// DESTROY - Removing documents from a collection:

// db.collection.remove({key: 'val'}, boolean)

// the boolean is optional. defaults to false if not passed. if true, only the first match will be deleted (not everything that matches the query). NOTE: I don't know the order to the db's iteration..



// UPDATE - Updating documents in a collection:

// db.collection.update( { oldkey: 'oldval' }, { $set: { newkey: 'newval' } } )
// db.collection.updateMany( { oldkey: 'oldval' }, { $set: { newkey: 'newval' } } )

//  here we go with the object-ception.
//  some kind of operator is required i think. this one will not replace anything, only add to the documents. unless the query and update use the same field.
//  NOTE: by default, update updates the FIRST MATCH.




// ~~~~~~~~~~ OPERATORS ~~~~~~~~~~

// $gt  (greater than)
// $gte (greater than or equal to)
// $lt  (less than)
// $lte (less than or equal to)
// $in  (in array)                  Use to find documents who have a particular value within an array.


// $push	                        Push to an array contained within a document.
// $pop	                            Removes either the first or last element from an array.

// db.collection.update({query}, {$pop: {array_key: (1 or -1)}})
// Use 1 for the last item in the array, -1 for the first item.

// $addToSet                        Basically $push but it prevents duplicate entries.
// $pull	                        Removes a specified value from an array, unlike $pop, which removes by location.

// Ex:
// db.collection.update({query}, {$pull: {array_key: value}})
  
// This will remove all instances of 'value' from the documents with the array specified by the array_key that match QUERY.








// MONGOOSE

// Description:

// The most popular way of using MongoDB with Node and Express is not establishing a direct connection. What we are going to do instead is use a Node module called Mongoose. Mongoose is able to connect to a MongoDB database and it will allow us to give a little bit more structure to our data by providing functionality in the form of models and schemas. Remember when we said that MongoDB is really free-form? Well, that's very helpful in some ways, but a little more structure allows us to do things with a lot more confidence in the integrity of our data. By converting our free-form MongoDB data into models, we are able to do things like validate, add associations, and run more intricate queries more effectively.




// Promises:

// Use native promises, because mongoose's promise functionality will be broken soon
mongoose.Promise = global.Promise;




// Setup:

var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/db-name-here');
// Note: If you connect to a database that doesn't exist, mongoose WILL create the DB for you!

var UserSchema = new mongoose.Schema({
    name: String,
    age: Number
})

// Note: If you create a model, mongoose WILL create the appropriate collection in your database for you! Even with the appropriate naming (plural for collection names)!

mongoose.model('User', UserSchema);
// We are setting this Schema in our Models as 'User'

var User = mongoose.model('User');
// We are retrieving this Schema from our Models, named 'User'




// Validations:

var UserSchema = new mongoose.Schema({
    first_name:  { type: String, required: true, minlength: 6},
    last_name: { type: String, required: true, maxlength: 20 },
    age: { type: Number, min: 1, max: 150 },
    email: { type: String, required: true }
}, {timestamps: true });

// Displaying validation errors:   
// Use express flash ("npm install --save express-flash") to display your errors. In order to use express flash messages, you must have session.




// Associations:

// Pretty much embedding documents. We can set up our schemas to expect arrays of objects from other schemas.

const PostSchema = new mongoose.Schema({
    title: {type: String, required: [true, "Posts must have a title"]},
    content: {type: String, required: [true, "Posts must have content"]},
}, {timestamps: true})

const BlogSchema = new mongoose.Schema({
    title: {type: String, required: [true, "Blogs must have a title"], minlength: [3, "Titles must have at least 3 characters"]},
    posts: [PostSchema]
}, {timestamps: true})

const UserSchema = new mongoose.Schema({
    first_name: {type: String, required: [true, "A first name is required"]},
    last_name: {type: String, required: [true, "A last name is required"]},
    blogs: [BlogSchema]
}, {timestamps: true})

// Couldn't be easier. Obviously, make sure to put the associated schema above the reference schema so it knows what to look to


const Blog = mongoose.Schema('Blog');
const User = mongoose.Schema('User');

Blog.create(req.body, function(err, data){
    if(err){
        // handle the error from creating a blog
    }
    else {
        User.findOneAndUpdate({_id: req.params.id}, {$push: {blogs: data}}, function(err, data){
            if(err){
                // handle the error from trying to update the user
            }
            else {
                // it worked! How shall we celebrate?
            }
        })
    }
})




// Model/Schema Methods
// ...
var myModelSchema= new mongoose.Schema({
    name: {type:String}
    // info here!
    }, { timestamps: true }
);
// for older version, use the following timestamp
// { timestamps:
//     { createdAt: 'created_at' },
//     { updatedAt: 'updated_at'}
// });

// custom methods, pre, post etc. here
myModelSchema.methods.addJayToString = function(input){
    return input+"Jay";
}
// What pre does prior to saving:
// Starting with an instance of our model:
var MyModel = mongoose.model('myModelName');
var myModelInstance = new MyModel({name: "The Amazing "});
// When we try to save our model:
myModelInstance.save();
// Pre runs before saving. In the example below: It would add "Jay" to our current name ("The Amazing")" and "The Amazing Jay" would be stored in our DB.

myModelSchema.pre('save', function(done){
    this.name = this.addJayToString(this.name);
    done();
});

// We can also call the methods e.g. addJayToString directly on the instance, if we didn't want to use 'pre'.  e.g.
var MyModel = mongoose.model('myModelName');
var myModelInstance = new MyModel({name: "The Amazing "});
console.log(myModelInstance.addJayToString("hello "));
// This would just console.log "hello Jay";

mongoose.model('myModelName', myModelSchema);
//...




// Error Object:
err = {
    errors: {
        schemaInThing_that_had_error: {
            message:"some string of errors",
            kind:"what didn't work",
            path:"reference to the schema's name",
            value:"cause of the initial error"
        }
    },
    name: "Validation error"
}





// Custom Validations:
var mongoose       = require('mongoose');
var Schema         = mongoose.Schema;
var customerSchema = new Schema({
    name: {
        first: {
            type: String,
            required: [true, "this is for something else"],
            trim: true,
        },
        last: {
            type: String,
            required: true,
            trim: true
        },
    },
    phone: {
        type: String,
        validate: [{
            validator: function( number ) {
                return /\d{3}-\d{3}-\d{4}/.test( number );
            },
            message: "{ VALUE } is not a valid phone number"
            },  {
            validator: function( number ) {
                return false;
            },
            message: "{ VALUE } failed this validator"
            }
        ],
        required: [true, "Customer phone number required"]
    },
    gender: {
        type: String,
        enum: ['MALE', 'FEMALE'],
        uppercase: true,
        trim: true,
        default: "MALE"
    },
    age: {
        type: Number,
        min: [18, "Maybe you need to be a little older"],
        max: [85, "You might want to be enjoying your retirement rather than using this site"],
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 32,
        validate: {
            validator: function( value ) {
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test( value );
            },
            message: "Password failed validation, you must have at least 1 number, uppercase and special character"
        }
    },
    pets: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: "Pet"
        }],
        default: []
    }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

customerSchema.virtual( 'name.full' ).get( function () {
    return this.name.first + " " + this.name.last;
    // return `${ this.name.first } ${ this.name.last}`;
});






// RESTFUL ROUTING

// RESTful routing is an industry standard for routing regulation. Having this standard makes it much less of a headache to decipher everyones' patterns for GET and POST requests.

//     Action	                                Client HTTP Request	                        Server Routing Rule
// Retrieve all widgets	                'GET'    http://company.com/widgets	        app.get    ("/widgets",     (req, res) => {})
// Retrieve 1 widget with the id of 7	'GET'    http://company.com/widgets/7	    app.get    ("/widgets/:id", (req, res) => {})
// Create a widget	                    'POST'   http://company.com/widgets         app.post   ("/widgets",     (req, res) => {})
// Update 1 widget with the id of 7	    'PUT'    http://company.com/widgets/7       app.put    ("/widgets/:id", (req, res) => {})
// Delete 1 widget with the id of 7	    'DELETE' http://company.com/widgets/7	    app.delete ("/widgets/:id", (req, res) => {})

// 'PUT' is similar to a POST request, along with the ID passed through the URL, we will also send the new up-to-date object we want to use for the update.

// 'DELETE' is similar to a GET request, meaning we simply need the id of the widget we want to delete.

// For all other HTTP requests more unique than the list above, we would have to make our own custom routes. At least now we have a starting point, which is far better than starting from none.







// BCRYPT

const bcrypt = require('bcrypt-as-promised');

// ~~~ Hashing ~~~

bcrypt.hash('password_from_form', 10)
.then(hashed_password => {
    // do things with the pw
})
.catch(error => {
    // log error?
});

// Whats the '10'? - That's the saltrounds, the number of times the bcrypt library will generate a more complex hashed password. 10 is a good standard.

// ~~~ Validation ~~~

bcrypt.compare('password_from_form', 'stored_hashed_password')
.then( result => {
	// check if result is true?
})
.catch( error => {
	// log error?
})

// What is the 'result'? - It's the resulting boolean value of the operation. A result of true represents the password was correct.