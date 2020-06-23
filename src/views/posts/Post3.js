import React from 'react';
import './PostHeader.css';
import Gist from "react-gist";
import {Link} from "react-scroll";

// icons
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

// images
import django from '../../media/images/django_django_unchained.png';
import startFiles from '../../media/images/django-inital-files.png';
import appFiles from '../../media/images/django-app-files.png';
import djangoStartView from '../../media/images/django-init-view.png';
import homeComplete from '../../media/images/django-home-finished.png';
import adminNoDB from '../../media/images/admin-books-nodb.png';
import adminDB from '../../media/images/admin-books-db.png';
import listView from '../../media/images/django-books-cards.png';

function Post3() {
    return (
        <div className="posts-container">
            <div className="posts-header">
                <h1 className="posts-title">Building a Web Application with Django</h1>
                <div className="author-info">
                    <img className="author-img" src="https://avatars3.githubusercontent.com/u/53276111?s=460&u=20f828d7613af24665772cd71f864427b0ee21c1&v=4" alt=""/>
                    <div className="info-text">
                        <p><b>Written by: Sam Eskandar</b></p>
                        <div className="info-specific">
                            <p><i>June 19 2020 </i><span role="img" aria-label="books">&#128218; &#128218; &#128218;</span> </p>
                            <p style={{margin: '3px'}}><i> 20 min read</i></p>
                        </div>
                    </div>
                    <div className="social-icons">
                        <a href="https://github.com/s6eskand"><FaGithub id="github" size={30} /></a>
                        <a href="https://linkedin.com/in/sameskandar"><FaLinkedin id="linkedin" size={30} /></a>
                        <a href="https://twitter.com/sameskandar22"><FaTwitter id="twitter" size={30} /></a>
                    </div>
                </div>
                <div className="image-container">
                    <div className="main-img" >
                        <img src={django} alt=""/>
                    </div>
                </div>
                <div className="main-content">
                    <h2>Django. The Web Framework for Perfectionists with Deadlines. </h2>
                    <br/>
                    <p>
                        The Django slogan might be my favourite description of any Web Framework out there (plus, Flask
                        doesn't even have a slogan). If you don't know what Django is, or have only heard whispers
                        of the word, it is a Web Framework built on Python. Legend has it that Jamie Foxx only took the role
                        for Django Unchained because of his love for Django development! Regardless of the fact that Jamie Foxx
                        has most likely never heard of Django, it is one of my favourite Frameworks for building Backends, REST APIs,
                        and Full Stack Applications.
                        </p> <br/>
                        <br/>
                    <p>
                        <b>So other than personal preference, why use Django?</b> <br/>
                        <br/>
                        Django was built with the purpose of speeding up development time. You can build powerful, and complex web applications
                        in only a few hours (of course depending on the complexity of the application). <br/>
                        <br/>
                        <br/>
                        Django also comes with a lot of pre built tasks, such as User Authentication, Content Administration, RSS feeds,
                        Security, and much more. This allows you to spend more time working on bringing your idea to life rather than working
                        on things such as Security, Authentication, and other features. <br/>
                        <br/>
                        <br/>
                        Some of the biggest tech companies today rely on Django for their Applications and products. This includes,
                        Instagram, Spotify, YouTube, Bitbucket, and Dropbox. <br/>
                        <br/>
                        <br/>
                        Hopefully by now you are sold on this amazing framework, and by the end of this article you'll
                        be able to walk away with a Full Stack Book Listing project built with Django. <br/>
                        <br/>
                        <br/>
                    </p>
                    <h2>Table of Contents</h2>
                    <p className="table">
                        <Link to="introdjango" smooth={true} duration={2000} offset={-70}>1. Introduction to Django</Link>
                        <div className="sub-table">
                            <Link to="mvcdjango" smooth={true} duration={2000} offset={-70}>&bull; MVC vs MTV</Link>
                            <Link to="startdjango" smooth={true} duration={2000} offset={-70}>&bull; Django Project Structure</Link>
                            <Link to="startappdjango" smoot={true} duration={2000} offset={-70}>&bull; Application Setup and Structure</Link>
                        </div>
                    </p>
                    <p className="table">
                        <Link to="djangobookproject" smooth={true} duration={2000} offset={-70}>2. Tutorial Project</Link>
                        <div className="sub-table">
                            <Link to="djangobookproject" smooth={true} duration={2000} offset={-70}>&bull; Overview</Link>
                            <Link to="bookmodels" smooth={true} duration={2000} offset={-70}>&bull; Creating our Models</Link>
                            <Link to="booktemplates" smoot={true} duration={2000} offset={-70}>&bull; Creating the Home page</Link>
                            <Link to="bookadmin" smoot={true} duration={2000} offset={-70}>&bull; Administration Dashboard</Link>
                            <Link to="bookviews" smoot={true} duration={2000} offset={-70}>&bull; Adding Logic to Views</Link>
                        </div>
                    </p>
                    <p className="table">
                        <Link to="djangoconclusion" smooth={true} duration={2000} offset={-70}>3. Conclusion</Link>
                    </p><br/>
                    <br/>
                    <br/>
                    <h2 id="introdjango">Understanding Django</h2> <br/>
                    <p>
                        <b>MVC vs MTV</b> <br/>
                        <br/>
                        If you're coming from a different Web Framework such as Spring Boot, you may be familiar with the
                        term MVC. If you're not, MVC stands for Model, View, Controller. MVC is a powerful concept that all the best
                        modern Web Frameworks are built on. Let's explore the MVC concept further.<br/>
                        <br/>
                        <br/>
                        <b>Model:</b> This is what handles all the data within the application. It is simply an interface that allows you
                        to interact with your database, updating and creating tables without the confusion that comes along with
                        setting up your own database. <br/>
                        <br/>
                        <b>View:</b> This is exactly what it sounds like. Views handle the UI of the application and are not limited to
                        the framework itself. You can use different UI frameworks such as React, Angular, or Vue to handle the View part of
                        MVC without too much configuration on your end. We'll go over this in another article sometime soon. <br/>
                        <br/>
                        <b>Controller:</b> Controllers are a bit more abstract. They handle the logic of the application. Controllers essentially
                        act as a bridge between your Models and Views. They take user information from the views, manipulate the data according to the
                        applications needs, then save the data in the Table defined by your Models. <br/>
                        <br/>
                        <br/>
                        Django follows this same concept but applies it differently. Instead of MVC, Django uses MTV (no not the broadcasting
                        channel). MTV stands for Model, Template, View and works just the same as MVC with some minor differences. Let's explore this further <br/>
                        <br/>
                        <br/>
                        <b>Model:</b> Models in MTV are just the same as MVC, they handle the data of the application, storing them in your Database
                        and their respective Tables. <br/>
                        <br/>
                        <b>Template:</b> This is the MTV equivalent to Views in MVC. Templates are HTML files that define the UI for the application. Just like
                        Views in the MVC concept, you can use frameworks such as React to create a frontend you are more comfortable with. <br/>
                        <br/>
                        <b>View:</b> Related to the Controller aspect of MVC. Views in Django handle all the programming logic for each template, updating
                        the Database accordingly and rendering given templates. <br/>
                        <br/>
                        <br/>
                        Now that we have a better grasp of the MTV and MVC design concepts, lets look into how a Django project is built. <br/>
                        <br/>
                        <br/>
                        <b id="startdjango">Django Project Structure</b> <br/>
                        <br/>
                        If you do not already have Django installed, inside your virtual environment (not needed but good practice.
                        Conda download <a href="https://docs.conda.io/projects/conda/en/latest/user-guide/install/download.html">here</a>)
                        run <br/>
                        <br/>
                        <code>python -m pip install Django</code> <br/>
                        <br/>
                        Once Django is installed, inside the directory you want your project to live,
                        run the command  <br/>
                        <br/>
                        <code>django-admin startproject django_intro</code><br/>
                        <br/>
                        This will create the base project called django_intro inside the directory you ran the command. <br/>
                        <br/>
                        <br/>
                        You should now have a project structure that looks something like this, <br/>
                        <br/>
                        <br/>
                        <div className="image-container">
                            <div className="main-img">
                                <img src={startFiles} alt=""/>
                            </div>
                        </div> <br/>
                        <br/>
                        You can ignore most of the files here except for three. <code>settings.py</code> is what Django uses to configure
                        our project settings, including all our applications, middleware, and external plugins. <code>urls.py</code> handles
                        our base url mappings. Lastly, <code>manage.py</code> is what runs the app. This includes running the server,
                        making Database migrations, and creating apps within the project. <br/>
                        <br/>
                        <br/>
                        Now that we understand the base structure, we'll be adding an application to the project.<br/>
                        <br/>
                        <br/>
                        <b>Note:</b> the commands I tell you to run are for Mac/Linux users. If you are on Windows,
                        just replace the <code>python</code> with <code>py</code> and the command will run fine. <br/>
                        <br/>
                        <br/>
                        <b id="startappdjango">Application Setup and Structure</b> <br/>
                        <br/>
                        To get started with adding applications, we have to first create our app. To do this run the command <br/>
                        <br/>
                        <code>python manage.py startapp books</code> <br/>
                        <br/>
                        This will create a 'books' directory inside of our  'django_intro' project. Your file structure should now look something like this, <br/>
                        <br/>
                        <br/>
                        <div className="image-container">
                            <div className="main-img">
                                <img src={appFiles} alt=""/>
                            </div>
                        </div> <br/>
                        <br/>
                        <br/>
                        Let's take a look at what Django just did. The <code>startapp</code> command created a migrations
                        directory for us. This will handle all the migrations we need to apply to configure our Database. The command
                        also created an<code>admin.py</code> file which handles our administration site
                        page, an <code>apps.py</code> file which configures our 'books' application to be added to our config,
                        a <code>models.py</code> file which is where we'll create our Database tables, a <code>tests.py</code> file
                        to write unit tests for the application, and finally a <code>views.py</code> file which will
                        contain all our logic for the application, as well as rendering our templates. <br/>
                        <br/>
                        <br/>
                        Now we just need to modify our <code>settings.py</code> file to include our application. <br/>
                        <br/>
                        <Gist id="d15ea70d185956a3a0cdc36392dafb4f" /> <br/>
                        <br/>
                        Now run <code>python manage.py runserver</code> and navigate to the given URL. If everything has
                        been configured properly, you should be seeing this page, <br/>
                        <br/>
                        <div className="image-container">
                            <div className="main-img">
                                <img src={djangoStartView} alt=""/>
                            </div>
                        </div> <br/>
                        <br/>
                        Now that we understand the base Django project structure and some fundamentals, lets build our
                        Full Stack Book Listing Application! <br/>
                        <br/>
                        <br/>
                        <b>Note:</b> Django runs by default on port 8000, you can change this by running the
                        command <br/>
                        <br/>
                        <code>python manage.py runserver &lt;port_number&gt;</code> <br/>
                        <br/>So if you want to run on port 8080 <br/>
                        <br/><code>python manage.py runserver 8080</code> <br/>
                        <br/>
                        <br/>
                    </p>
                    <h2 id="djangobookproject">Starting the Project</h2> <br/>
                    <p>
                        <b>Overview</b> <br/>
                        <br/>
                        To build this project we'll be using our setup project from before. If you would like some practice setting
                        up the project from scratch, feel free to start over. <br/>
                        <br/>
                        <br/>
                        To build this app we'll be using Materialize CSS. If you want to customize your frontend, feel free to
                        use whatever you would like, but since this tutorial is to learn Django, we'll be leaving the frontend
                        styles to Materialize (more on materialize <a href="https://materializecss.com/about.html">here</a>).<br/>
                        <br/>
                        <b>What you'll need</b> <br/>
                        <br/>
                        All you'll need to know to complete this tutorial, is Python, and HTML. For simplicity sake, we
                        won't be using JavaScript, or writing any custom stylesheets to build the website. <br/>
                        <br/>
                        <br/>
                        <b id="bookmodels">Creating our Models</b> <br/>
                        <br/>
                        Django uses SQLite3 as its default Database Engine. You can see this for yourself in
                        the <code>settings.py</code> file. You should see <code>'ENGINE': 'django.db.backends.sqlite3',</code> in
                        the <code>DATABASES</code> dictionary. If you feel more comfortable using a different Database, for example Postgres,
                        just change the engine value to <code>django.db.backends.postgres</code> and add the name, user, password, and
                        host the Database is running on (this requires you to have already created the Database). For this tutorial,
                        we won't be changing the Database we are working with.<br/>
                        <br/>
                        <br/>
                        To create our Table for all Book information, we have to first know what users will be submitting. Since
                        this is a Book Listing application, users will submit the title of the book, the Author, a short description, and
                        the cover image (for simplicity sake we'll be submitting links to the images as strings).
                        This will leave our <code>models.py</code> file looking something like this, <br/>
                        <br/>
                        <Gist id="07db5bbdf3ff48e3749fb4b608cf88ec" /> <br/>
                        <br/>
                        Models in Django are built through Python classes that inherit from Django's <code>models.Model</code> class.
                        This tells Django that we are creating a Database table, and allows us to create our table columns, where each
                        of our defined variables are the names of our table columns. <br/>
                        <br/>
                        <br/>
                        Each column is initialized with a column name (variable name), its data type (full documentation on
                        model fields <a href="https://docs.djangoproject.com/en/3.0/ref/models/fields/">here</a>), and a max_length,
                        or default value. <br/>
                        <br/>
                        <br/>
                        This simple class will do the following for us:
                        <div className="table">
                            <p>1. Create a Database Schema for our 'books' app</p>
                            <p>2. Create a Python Database Access API for all our <code>Book</code> Objects</p>
                        </div> <br/>
                        Now we have successfully created our Model, we have to run migrations to create the table. This
                        is done by running the command, <br/>
                        <br/>
                        <code>python manage.py makemigrations</code> <br/>
                        <br/>
                        followed by, <br/>
                        <br/>
                        <code>python manage.py migrate</code> <br/>
                        <br/>
                        Let's look into what those commands just did for us. If we were to equate the result of the command into
                        SQL code, it would look something along the lines of this, <br/>
                        <br/>
                        <Gist id="9247e3a6afb33a226545db375ce4bce6" /> <br/>
                        <br/>
                        If you don't know SQL, all the command did was create a new Table called books in our books Database,
                        and added the columns defined in our <code>models.py</code> file with their corresponding data types. <br/>
                        <br/>
                        <br/>
                        Congrats! You have now created your Database Schema with the power of Django, and can move on to creating your Templates! <br/>
                        <br/>
                        <br/>
                        <b id="booktemplates">Creating the Home Page</b> <br/>
                        <br/>
                        Before we can start making our Home page, we have to understand how Django renders Templates. As explained earlier,
                        Django runs on the MTV concept, where each Template is its own view (HTML file) that gets rendered by a specific Django view.
                        We'll get back to rendering views later, but for now lets configure our Templates within our <code>settings.py</code> file. <br/>
                        <br/>
                        <br/>
                        To do this, first create a directory called <code>templates</code> in the base directory. Once you have
                        done that, modify your <code>settings.py</code> file to include the following, <br/>
                        <br/>
                        <Gist id="98189db1d2cf2edc85f41eaee3491d8b" /> <br/>
                        <br/>
                        Once this is done, create an <code>index.html</code> file in your <code>templates</code> directory,
                        and add the following code, <br/>
                        <br/>
                        <Gist id="cfe486b28f8ce7f3e95495eacba03f93" /> <br/>
                        <br/>
                        This is great! We have our Template made, but we haven't given Django any instructions on how to display it.
                        This will be solved using Django views. <br/>
                        <br/>
                        <br/>
                        Navigate to your <code>views.py</code> file, and add the following to the file, <br/>
                        <br/>
                        <Gist id="24e8de26b94ac450e6894de1a9fd6e63" /> <br/>
                        <br/>
                        This creates a view for our <code>index.html</code> file called <code>index</code>. In this example,
                        I rendered the Template using a function based View. I am using a 'shortcut' method that will return
                        an HttpResponse object, which if successful will render your template. You can render Django Views using classes, however,
                        creating a class based view adds to the complexity of the project, and it is much easier to use function based
                        views in your Django projects. If you would like more information on class based views checkout 
                        the <a href="https://docs.djangoproject.com/en/3.0/topics/class-based-views/">official docs</a>. <br/>
                        <br/>
                        <br/>
                        The next step is to set up the URL mappings for our views. To do this, start by making a file
                        called <code>urls.py</code> in our 'books' directory. This file will store all the URL mappings for
                        our books application. Once the file is made, add the following code, <br/>
                        <br/>
                        <Gist id="347cf8a49532fce6fca4ebb1111d2459" /> <br/>
                        <br/>
                        This creates the URL mappings for our 'books' application. Django uses the <code>urlpatterns</code> list
                        to process the mappings, where each element of the list is a different view. To set up the url, we use the
                        Django method <code>path()</code> where the first argument is the relative path, the second is the view to
                        be rendered, and the last is the name of the path. <br/>
                        <br/>
                        <b>Note:</b> The name of the path is NOT the same as the relative path. If
                        you set your relative path to '' and name to 'home', the path will be http://localhost:8000 NOT http://localhost:8000/home <br/>
                        <br/>
                        <br/>
                        We are not done yet. Now we know how to create a View that renders a Template, mapped to a specific URL in our app,
                        but we have not added our Application level URLs to our project URLs. This is done by modifying
                        our <code>urls.py</code> file in the 'django_intro' directory to look like this, <br/>
                        <br/>
                        <Gist id="03334fbac5f0cdad8262bdf729cc8994" /> <br/>
                        <br/>
                        Now if we run <code>python manage.py runserver</code>, our Hello Message will be displayed. That's Awesome! Now
                        let's customize it a bit. With some updates, your <code>index.html</code> file should look something
                        like this, <br/>
                        <br/>
                        <Gist id="3902d88bb344e4f516363f6147b2fc7c" /> <br/>
                        <br/>
                        This is a regular html file with some magic called the Django Template Language sprinkled in. First, on line 15, I linked to the
                        index view in a unique way. Using the <code>&#123;% url &lt;url_path_name&gt; %&#125;</code> annotation,
                        I can link to any path corresponding to the name I pass in. Finally, I enclosed lines 58 to 71 within
                        a <code>&#123;% block content %&#125;</code> tag. This essentially marks whatever is within the block tag
                        as specific to the given template, whereas the rest (everything outside the tag) can be reused
                        in other html files. This enforces the DRY programming principle (Don't repeat yourself). We'll be exploring the
                        Django Template Language further in the project. <br/>
                        <br/>
                        <br/>
                        Now running the server will give you a page that looks something like this, <br/>
                        <br/>
                        <br/>
                        <div className="image-container">
                            <div className="main-img">
                                <img src={homeComplete} alt=""/>
                            </div>
                        </div> <br/>
                        <br/>
                        <br/>
                        Congrats! You've successfully rendered your first view in Django! We have one more step to complete
                        and then we can wrap this project up! <br/>
                        <br/>
                        <br/>
                        <b id="bookadmin">The Administration Dashboard</b> <br/>
                        <br/>
                        <br/>
                        With any website, there are certain maintainers that you would want to have complete and unrestricted
                        access to the webpage content. Usually you would create an Admin Role for those users, and set up a
                        dashboard that can handle all the necessary operations to do this. Django takes care of this for us. <br/>
                        <br/>
                        <br/>
                        To get started, run the following command <br/>
                        <br/>
                        <code>python manage.py createsuperuser</code> <br/>
                        <br/>
                        You will be prompted to make an account. Once you have successfully done so, navigate to <code>/admin</code> and log in.
                        You should see something like this, <br/>
                        <br/>
                        <br/>
                        <div className="image-container">
                            <div className="main-img">
                                <img src={adminNoDB} alt=""/>
                            </div>
                        </div> <br/>
                        <br/>
                        <br/>
                        What Django just did for us was make an admin account that is granted all permissions. You can now
                        create, read, update, and delete any data in the Database, as well as manage user permissions.
                        This is awesome, we now have our own Admin Dashboard. However, we need to register our Models to see
                        them on the Admin page. This can be done by adding the following lines to your <code>admin.py</code> file, <br/>
                        <br/>
                        <code>from .models import Book</code> <br/>
                        <code>admin.site.register(Book)</code> <br/>
                        <br/>
                        What those two lines of code did for us was tell Django that we want to see all the data in
                        our <code>Books</code> table on the Admin Dashboard. Now if you refresh the page, you should see something like this, <br/>
                        <br/>
                        <br/>
                        <div className="image-container">
                            <div className="main-img">
                                <img src={adminDB} alt=""/>
                            </div>
                        </div> <br/>
                        <br/>
                        <br/>
                        Before we start adding logic to our views to display all the content in our Database, let's bootstrap
                        some data into our Database through the Admin Dashboard. To do this, navigate to the <code>/admin/books/book/add</code> page
                        and fill out the data with any 3 books you like. If you're not sure how to send an image as a string, just right click an
                        image, and hit copy image address. Pasting that will paste a string containing the image content. <br/>
                        <br/>
                        <br/>
                        Now that your <code>Book</code> Model has been registered, your Admin page will refresh to display the changes and we can now
                        add logic in our Django views to display the content of our Database! <br/>
                        <br/>
                        <br/>
                        <b id="bookviews">Adding Logic to Views</b> <br/>
                        <br/>
                        To complete the application, we will need two more views. The first view being the list view. This
                        will be the page where we can see all the different books along with their description, image, and rating.
                        Before we can render the content on the UI, we have to first retrieve all the data from
                        our <code>Book</code> Model, and export the content. This can be done by modifying the <code>views.py</code> file as such. <br/>
                        <br/>
                        <Gist id="e969824d6937204c11879f6c04a4f07b" /> <br/>
                        <br/>
                        We start by containing all the <code>Book</code> objects from our Database into a variable called <code>all_books</code>.
                        This allows us to create a Python dictionary called <code>frontend_exports</code> that we return
                        within the <code>render()</code> method. What this does is give us access to all the <code>Book</code> objects
                        from the UI through a list called <code>books</code>. Now we need to make the actual template for our <code>books</code> view. Create a file
                        called <code>books.html</code> within the templates directory and add the following, <br/>
                        <br/>
                        <Gist id="73efaf2f84de09a6b217d24070dcded7" /> <br/>
                        <br/>
                        This is where things can start to get funky because this looks nothing like a standard HTML file. <br/>
                        <br/>
                        <br/>
                        Using the Django Template language, we extend the <code>index.html</code> display, except now instead
                        of having a button, we will have all the Books displayed on cards. This part is done by looping through
                        our exported <code>books</code> list, and displaying all the content in the Materialize Cards.<br/>
                        <br/>
                        Two things to notice about the Django Template language. Everything works as a tag. This means that
                        our loops, conditionals, and block content needs to be closed with its respective closing tag. The second thing
                        is that all variables are wrapped in double curly braces, where as commands such as loops, and conditionals,
                        are wrapped in a curly brace and ampersand. For more information on the Django Template language, see
                        the <a href="https://docs.djangoproject.com/en/3.0/ref/templates/language/">official docs</a>. <br/>
                        <br/>
                        <br/>
                        Once you add your new view to your <code>urlpatterns</code> in <code>books/urls.py</code>, navigate to
                        <code>/books</code> and you will see a page that resembles something like this, <br/>
                        <br/>
                        <br/>
                        <div className="image-container">
                            <div className="main-img">
                                <img src={listView} alt=""/>
                            </div>
                        </div> <br/>
                        <br/>
                        <br/>
                        The only thing left to do is create a form so users can add books to the webpage. <br/>
                        <br/>
                        <br/>
                        This requires us to create a new view called <code>add_book</code> in our <code>views.py</code> file.
                        However, before we can do that, let's update our models.py file. Being the amazing framework it is,
                        Django provides built in Classes for Form submissions. This means that instead of targeting every
                        single value of the POST request and creating a new instance of the <code>Book</code> class,
                        we can just create an instance of the <code>BookForm</code> class containing all the POST data.
                        To get this setup we have to create the form template. Create a file called <code>form.html</code> in
                        the templates directory, and add the following,<br/>
                        <br/>
                        <Gist id="b84262457fab236ca5363c5f9ebc8e52" /> <br/>
                        <br/>
                        Once again, we are extending the <code>index.html</code> view. <br/>
                        <br/>
                        <b>Note:</b> On line 18 we added a <code>&#123;% csrf_token %&#125;</code>. CSRF stands for Cross
                        Site Registry Forgery and is a type of attack that users can make on your website. Adding the csrf token
                        is Django's base security to protect unsafe methods (such as POST) from these types of attacks.
                        More information can be found on the <a href="https://docs.djangoproject.com/en/3.0/ref/csrf/">official docs</a>. <br/>
                        <br/>
                        <br/>
                        After we have our template ready, we have to update our <code>models.py</code> file to include
                        the <code>BookForm</code> class. Your updated file should look like this, <br/>
                        <br/>
                        <Gist id="b3a207f3e1e0a70e4a88b1e99f0f9ecf" /> <br/>
                        <br/>
                        By adding the <code>BookForm</code> class we are relating the original <code>Book</code> Model to our
                        new <code>BookForm</code>, and telling <code>BookForm</code> which fields it should save. <br/>
                        <br/>
                        <br/>
                        All there is left to do now is update our <code>views.py</code> file to include the <code>add_book</code> view.
                        This should look something like this, <br/>
                        <br/>
                        <Gist id="d53c1e071e250738fed9b6d3bd1f2a4b" /> <br/>
                        <br/>
                        The only new things here are that we imported the <code>BookForm</code> model, and added some logic to
                        our new view. What our <code>add_book</code> view does is save the post request data as an instance of
                        the <code>BookForm</code> class, checks if it is valid, and if it is, saves it to the Database as
                        an instance of the <code>Book</code> class. <br/>
                        <br/>
                        <br/>
                        Congrats! Once you add the <code>add_book</code> view to your <code>urlpatterns</code> you will have
                        successfully built your first Full Stack Django application! Here's to many more to come! &#x1F37A; &#x1F37A; &#x1F37A; <br/>
                        <br/>
                        <br/>
                    </p>
                    <h2 id="djangoconclusion">Wrapping Up</h2> <br/>
                    <p>
                        If you have made it to this point, I thank you. This article was on the longer side of the posts
                        I would usually make, but there is a lot to go through to build a Django Application without glossing
                        over important fundamentals. Hopefully you can apply the concepts learned today to your own applications,
                        and now have a greater appreciation for the absolutely amazing framework that is Django. <br/>
                        <br/>
                        <br/>
                        If you'd like to see the full project, checkout my repository <a href="https://github.com/s6eskand/learn-with-me">Learn With Me</a> where
                        I post all the completed projects from these tutorials. This specific project can be
                        found <a href="https://github.com/s6eskand/learn-with-me/tree/master/intro-django-application">here</a>. If this was helpful, star
                        the repository, share the article, and be sure to come back soon for more posts and
                        tutorials <span role="img" aria-label="smiling emoji">&#128516;</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Post3;