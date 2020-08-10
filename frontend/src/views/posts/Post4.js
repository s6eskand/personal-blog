import React from 'react';
import './PostHeader.css';
import Gist from 'react-gist';
import { Link } from 'react-scroll';

// icons
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

// images
import reactHook from '../../media/images/react_hooks_ts.png';
import project from "../../media/images/react-hooks-ts-project.png";

function Post2() {
    return (
        <div className="posts-container">
            <div className="posts-header">
                <h1 className="posts-title">An Intro to React and TypeScript</h1>
                <div className="author-info">
                    <img className="author-img" src="https://avatars3.githubusercontent.com/u/53276111?s=460&u=20f828d7613af24665772cd71f864427b0ee21c1&v=4" alt=""/>
                    <div className="info-text">
                        <p><b>Written by: Sam Eskandar</b></p>
                        <div className="info-specific">
                            <p><i>June 27 2020 </i><span role="img" aria-label="books">&#128218; &#128218;</span> </p>
                            <p style={{margin: '3px'}}><i> 10 min read</i></p>
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
                        <img src={reactHook} alt=""/>
                    </div>
                </div>
                <div className="main-content">
                    <p>
                        JavaScript was authored in 1995. In only 10 days Brendan Eich developed the scripting language known today as JavaScript.
                        Twenty-five years later, almost every single application on the web relies on JavaScript to run
                        and render content. Although it has come a long way since it's original conception in 1995, JavaScript
                        does not come without it's pitfalls. One of those issues is the fact that JavaScript is a dynamically typed language.
                        TypeScript (as the name suggests), solves this problem. <br/>
                        <br/>
                        <br/>
                        Because being the lead architect for the C# programming language wasn't enough, Anders Hejlsberg built the first version
                        of TypeScript in 2010 while working at Microsoft. The language was released for public use in 2012 but didn't get the
                        recognition and use it deserved due to the lack of IDE support. Obviously things have changed, and TypeScript has evolved to
                        it's current version of 3.9.5, being used by developers around the world (myself included) as an intuitive alternative to 
                        JavaScript. <br/>
                        <br/>
                        <br/>
                        For this article I will be going through some major differences between JavaScript and TypeScript, as well as
                        implementing TypeScript with React by refactoring our previous <a href="https://github.com/s6eskand/learn-with-me/tree/master/intro-react-hooks-js">intro to hooks</a> project
                        from JavaScript to TypeScript. By the end of this post I hope to guide you through a successful breakup with
                        JavaScript, and introduce you to the beauty that is TypeScript. <br/>
                        <br/>
                        <br/>
                        <b>Note:</b> JavaScript I still love you. I will never forget our first project. But it is time to move on. &#128557;<br/>
                        <br/>
                        <br/>
                        <h2>Table of Contents</h2>
                        <p className="table">
                            <Link to="tsreactintro" smooth={true} duration={2000} offset={-70}>1. Getting Started with TypeScript</Link>
                            <div className="sub-table">
                                <Link to="tsreactintro" smooth={true} duration={2000} offset={-70}>&bull; Static vs. Dynamic Typing</Link>
                                <Link to="tsinterfaces" smooth={true} duration={2000} offset={-70}>&bull; TypeScript Interfaces</Link>
                            </div>
                        </p>
                        <p className="table">
                            <Link to="projectts" smooth={true} duration={2000} offset={-70}>2. Tutorial Project</Link>
                            <div className="sub-table">
                                <Link to="projectts" smooth={true} duration={2000} offset={-70}>&bull; Setup</Link>
                                <Link to="cardts" smooth={true} duration={2000} offset={-70}>&bull; Simple Card</Link>
                                <Link to="listts" smoot={true} duration={2000} offset={-70}>&bull; Listing the Movies</Link>
                            </div>
                        </p>
                        <p className="table">
                            <Link to="conclusiontsintro" smooth={true} duration={2000} offset={-70}>3. Conclusion</Link>
                        </p><br/>
                        <br/>
                        <br/>
                        <p id="tsreactintro">
                            <b>Static vs. Dynamic Typing</b> <br/>
                            <br/>
                            Before we get into the nitty gritty details of why you should use TypeScript instead of JavaScript, we have to
                            have an understanding of the differences between statically and dynamically typed languages. Statically typed
                            languages do type checking at compile time whereas dynamically typed languages do type checking at runtime. Now
                            where is this useful? <br/>
                            <br/>
                            <br/>
                            For scripting languages like Python, and Groovy, this is useful as it speeds up development time since you
                            don't have to declare variable types before assigning them values but it comes with its pitfalls.
                            Dynamically typed languages will run regardless of errors, but a statically typed language will not
                            compile unless all errors have been resolved. This can save you time debugging while coding, catching
                            all your silly mistakes as you make them. <br/>
                            <br/>
                            <br/>
                            If you aren't grasping the concept yet, imagine a cliff protected by a very mean looking bodyguard.
                            When you walk towards the cliff, you are met by the bodyguard who gives you a
                            healthy smack on the head, prompting you to walk away from the deadly drop. Sure, you're annoyed that
                            they hit you but you're glad you didn't fall off the cliff. That is what statically typed languages do.
                            They yell at you and make your life miserable because you forgot the word int in front of your
                            variable but you're glad you got past that silly mistake. Dynamically typed languages have no bodyguards,
                            and will happily watch you walk off the cliff, all the while calling you stupid for not seeing the drop. <br/>
                            <br/>
                            <br/>
                        </p>
                        <p id="tsinterfaces">
                            <b>TypeScript Interfaces</b> <br/>
                            <br/>
                            Before we can jump into writing React code in TypeScript, we have to learn how to create interfaces
                            in TypeScript. So, first things first, what's an interface? Interfaces define the contract for your application
                            to follow. This means it is telling your program exactly what needs to be done. If you have ever used
                            C/C++, these are similar to structs. <br/>
                            <br/>
                            <br/>
                            Let's look at an example where using a TypeScript interface would be helpful. <br/>
                            <br/>
                            <Gist id="d7d3bbe499e0f838fb6681b2b5172054" /> <br/>
                            <br/>
                            This sample code contains a simple greeting function that takes in an object containing a users name
                            and age. The current size of the object is manageable, but what happens when we add more data to the greeting message?
                            To keep our data organized, we can instead store this object in an interface. <br/>
                            <br/>
                            <Gist id="add6ec22fc4e23e9e19c00eba45a721b" /> <br/>
                            <br/>
                            The code has now been updated to take a <code>Message</code> object as a parameter, displaying the same
                            message as before. Now we can reuse the <code>Message</code> object in other functions, as well as update
                            it's contents as we need. <br/>
                            <br/>
                            <br/>
                            So how do we define an interface? The following code block will go through all the ways to declare an
                            interface that we'll need for this tutorial. <br/>
                            <br/>
                            <Gist id="e414bb1cf897a1f04b941fe4382dcaf9" /> <br/>
                            <br/>
                            In this (super simple) example we have three interfaces, <code>Cat</code>, <code>Dog</code> and <code>Human</code>.
                            The <code>Cat</code>, and <code>Dog</code> interfaces contain the same properties (safe from bark and meow). Each property is declared
                            by using an arbitrary name, and the data type, separated by a colon. In this example we used three different
                            data types, strings, numbers, and functions (declared in ES6 notation). Numbers and strings are
                            pretty self explanatory in the way you declare them, but functions are a bit different. To declare
                            property of type function in your interface, you must define the function signature. This includes
                            the parameter types as well as the return type. In both interfaces our function takes no parameters
                            and returns a string.<br/>
                            <br/>
                            <br/>
                            There is one difference between the two interfaces we declared, and that is that I prepended a question
                            mark before the colon in the <code>Cat</code> interface. This tells TypeScript that that property is part of the
                            interface, but is not required. This is fitting for the <code>Cat</code> interface as cat's tend to
                            act as if they own the house they live in and it is a gift from them that they share any information or any
                            attention with us. <br/>
                            <br/>
                            <br/>
                            The <code>Human</code> interface is quite simple, however I added a <code>readonly</code> attribute to
                            it's properties. This tells TypeScript that you cannot overwrite the properties originally assigned
                            to the <code>Human</code> object you create, whereas you can overwrite any property in the other two
                            interfaces. <br/>
                            <br/>
                            <br/>
                        </p>
                        <h2 id="projectts">TypeScript and React</h2> <br/>
                        <br/>
                        Now that we have a better understanding of TypeScript in general, we can put our knowledge to the 
                        test and refactor our <a href="https://github.com/s6eskand/learn-with-me/tree/master/intro-react-hooks-js">intro to React</a> project
                        to use TypeScript<br/>
                        <br/>
                        <br/>
                        <b id="projectts">Setup</b> <br/>
                        <br/>
                        First things first, we have to create our React app. To do this we will be using <code>create-react-app</code>.
                        If you have bootstrapped a React application with <code>create-react-app</code> before, the setup is
                        exactly the same with the addition of a flag you must include when executing the command. To get started run
                        the following command in your terminal or command prompt: <br/>
                        <br/>
                        <code>npx create-react-app intro-to-react-ts --template typescript</code> <br/>
                        <br/>
                        This will create a directory called <code>intro-to-react-ts</code> with all the necessary dependencies
                        to build a React app with TypeScript. <br/>
                        <br/>
                        To keep styling consistent with our last React project we will be using Semantic UI. If you would like
                        to customize your UI, feel free to, but for the sake of time we will be using Semantic UI. Change directories
                        into your new React project, and run the following command: <br/>
                        <br/>
                        <code>npm install semantic-ui-react semantic-ui-css</code> <br/>
                        <br/>
                        As well as add <code>import 'semantic-ui-css/semantic.min.css';</code> to your <code>App.tsx</code> file.
                        Now that we have our project setup, clear the base styles, as well as content within the <code>div</code> in
                        your <code>App.tsx</code> file, create a directory called <code>components</code> and let's get started! <br/>
                        <br/>
                        <br/>
                        <b id="cardts">Simple Card</b> <br/>
                        <br/>
                        Start by creating a file called <code>Movie.tsx</code> in your <code>components</code> directory. This
                        will be the code that contains our reusable Card components for displaying movie information. <br/>
                        <br/>
                        <br/>
                        To start, this will contain the same base code as the previous JavaScript card component. <br/>
                        <br/>
                        <Gist id="84cafdbc87a2a9f3f3b269b6c5ccc490" /> <br/>
                        <br/>
                        Now since we know the properties we would like to pass to the component, let's create an interface called
                        props, so we can make the content displayed on the card dynamic. Our component will now look something
                        like this: <br/>
                        <br/>
                        <Gist id="601fb02770bec2cbdabf2787015a3570" /> <br/>
                        <br/>
                        Notice how the code is essentially the same as the previous JavaScript code, however we now know exactly
                        what properties our passed into the component simply by reading the <code>Props</code> interface within the code.
                        This makes our work more readable and a lot easier to debug. <br/>
                        <br/>
                        <br/>
                        <b id="listts">Listing the Movies</b> <br/>
                        <br/>
                        Just like the last tutorial, we will be using the Studio Ghibli (now on Netflix!!!) API, to list
                        the movies appropriately. To make the call, we will be using the <code>useEffect</code> hook, storing
                        the data within a state variable using the <code>useState</code> hook. Create a file called <code>ListMovies.tsx</code> and
                        add the following code: <br/>
                        <br/>
                        <Gist id="a7f848bc9449cc56ed99b4c74ab6ec4a" /> <br/>
                        <br/>
                        Unlike the previous component, there is a bigger difference between the TypeScript and JavaScript versions.
                        The first difference is when iterating through the objects fetched from the API. TypeScript needs to know
                        the value of each object to compile, to achieve this we simply create a <code>Movie</code> interface
                        which includes all the required data. <br/>
                        <br/>
                        <br/>
                        Next, there is an exclamation point behind each prop passed to the <code>Movie</code> component. This
                        is because coding can be stressful and we want to express our frustrations within our code. I'm joking,
                        this is because TypeScript assumes the data may be undefined, adding the exclamation mark behind the
                        passed value assures TypeScript that we know what we're doing and the data is defined as expected. <br/>
                        <br/>
                        <br/>
                        Now, if you have followed along this far (and used the same styling as I have), you should be left
                        with something that looks like this, <br/>
                        <br/>
                        <br/>
                        <div className="image-container">
                            <div className="main-img">
                                <img src={project} alt=""/>
                            </div>
                        </div> <br/>
                        <br/>
                        <h2 id="conclusiontsintro">Final Thoughts</h2> <br/>
                        Congrats! You have successfully navigated a difficult breakup with JavaScript, but trust me. It's better this way.<br/>
                        <br/>
                        <br/>
                        TypeScript allows you to write declarative, easy-to-read code that mitigates the amount of runtime
                        errors you'll face, pointing them out to you before you run your app.
                        <br/>
                        <br/>
                        Thank you so much for reaching the end of the article, I hope I could be of some help to you!
                        I wanted to say sorry for taking such a long break from writing, I was entering some difficult times
                        and my work life got extremely busy. I promise I will do a better job writing consistently from now on <br/>
                        <br/>
                        <br/>
                        If you'd like to see the full project, checkout my repository <a href="https://github.com/s6eskand/learn-with-me">Learn With Me</a> where
                        I post all the completed projects from these tutorials. This specific project can be
                        found <a href="https://github.com/s6eskand/learn-with-me/tree/master/intro-to-hooks-ts">here</a>. If this was helpful, star
                        the repository, share the article, and be sure to come back soon for more posts and
                        tutorials <span role="img" aria-label="smiling emoji">&#128516;</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Post2;

