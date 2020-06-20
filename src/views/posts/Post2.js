import React from 'react';
import './PostHeader.css';
import Gist from 'react-gist';
import { Link } from 'react-scroll';

// icons
import { FaGithub, FaLinkedin } from "react-icons/fa";

// images
import samProfile from '../../media/images/blog_profile.png';
import reactHook from '../../media/images/react_hooks.png';
import project from '../../media/images/react-hooks-project.png';

function Post2() {
    return (
        <div className="posts-container">
            <div className="posts-header">
                <h1 className="posts-title">An Intro to React Hooks</h1>
                <div className="author-info">
                    <img className="author-img" src={samProfile} alt=""/>
                    <div className="info-text">
                        <p><b>Written by: Sam Eskandar</b></p>
                        <div className="info-specific">
                            <p><i>June 19 2020 </i><span role="img" aria-label="books">&#128218; &#128218; &#128218;</span> </p>
                            <p style={{margin: '3px'}}><i> 10 min read</i></p>
                        </div>
                    </div>
                    <div className="social-icons">
                        <a href="https://github.com/s6eskand"><FaGithub id="github" size={30} /></a>
                        <a href="https://linkedin.com/in/sameskandar"><FaLinkedin id="linkedin" size={30} /></a>
                    </div>
                </div>
                <div className="main-img" >
                    <img src={reactHook} alt=""/>
                </div>
                <div className="main-content">
                    <p>
                        Fishing is no easy task. You have to use the right bait, cast the line properly, be able to
                        pick up the slightest of movements, and fight to pull the fish out of the water. <br/>
                        <br/>
                        <br/>
                        Just as you are reading this post, I was incredibly disappointed that React Hooks had nothing to
                        do with fishing, and everything to do with React. However, React Hooks are a great way to write
                        React Components inside a function while still using props, state, and other class based features
                        in a much cleaner and less verbose fashion<br/>
                        <br/>
                        <br/>
                        In this tutorial I'll be going through building a simple React App that will display all Studio
                        Ghibli films with their Title, Description, Director, and Rotten Tomatoes Score <br/>
                        <br/>
                        <br/>
                        <h2>Table of Contents</h2>
                        <p className="table">
                            <Link to="Introduction" smooth={true} duration={2000} offset={-70}>1. Introduction to Hooks</Link>
                            <div className="sub-table">
                                <Link to="useState" smooth={true} duration={2000} offset={-70}>&bull; useState Hook</Link>
                                <Link to="useEffect" smooth={true} duration={2000} offset={-70}>&bull; useEffect Hook</Link>
                                <Link to="props" smoot={true} duration={2000} offset={-70}>&bull; Using Props</Link>
                            </div>
                        </p>
                        <p className="table">
                            <Link to="project" smooth={true} duration={2000} offset={-70}>2. Tutorial Project</Link>
                            <div className="sub-table">
                                <Link to="project" smooth={true} duration={2000} offset={-70}>&bull; Setup</Link>
                                <Link to="card" smooth={true} duration={2000} offset={-70}>&bull; Simple Card</Link>
                                <Link to="list" smoot={true} duration={2000} offset={-70}>&bull; Listing the Movies</Link>
                            </div>
                        </p>
                        <p className="table">
                            <Link to="Conclusion" smooth={true} duration={2000} offset={-70}>2. Conclusion</Link>
                        </p><br/>
                        <br/>
                        <br/>
                        <h2 id="Introduction">Getting Started</h2><br/>
                        <p>
                            So what exactly are hooks? <br/>
                            <br/>
                            <br/>
                            In React, Hooks are simply methods that allow you to create React Components without writing a class.
                            This alleviates the need for constructors, and the annoying <code>this.</code> that you have to append
                            to any property of the class. For the purpose of this tutorial, we'll be investigating
                            the <code>useState()</code> and <code>useEffect()</code> Hooks since those are all we need to
                            get started with React Hooks and complete this tutorial project.<br/>
                            <br/>
                            <br/>
                        </p>
                        <p id="useState">
                            Consider the following example. <br/>
                            <br/>
                            <Gist id="fce8439398fae492e97f05777bd9f0e2" /> <br/>
                            <br/>
                            This is a simple component that contains a button that will update the clicked count by updating the Component
                            level state. The <code>useState()</code> method replaces initializing data in <code>this.state</code> as
                            well as the need for a constructor, and our predefined method <code>incrementCount()</code> replaces
                            the need for <code>this.setState()</code>.
                            <br/>
                            <br/>
                        </p>
                        <p id="useEffect">
                            Let's investigate another example <br/>
                            <br/>
                            <Gist id="5a1aebb1ac61b4931c959f8960681c4e" /> <br/>
                            <br/>
                            <p>
                                This time we are making use of the <code>useEffect()</code> Hook which replaces
                                the <code>componentDidMount()</code> lifecycle method we would use in a Component class.
                                This component fetches a random dog image using the <code>useEffect()</code> Hook and
                                updates the displayed image using the <code>setImage()</code> method initialized by
                                the <code>useState()</code> hook. <br/>
                                <br/>
                                <br/>
                            </p>
                        </p>
                        <p id="props">
                            Now we know how to handle Component level state using Hooks, but what about props? <br/>
                            <br/>
                            <Gist id="374328fc4d20eece66c11cb7b90566aa" /> <br/>
                            <br/>
                            It's that simple. Just pass in <code>props</code> as a function parameter, and use props as
                            you normally would with any React Class, just remove the annoying <code>this.</code> that would
                            normally be there. <br/>
                            <br/>
                            <br/>
                        </p>
                        <p>
                            By comparing the two ways to write this component, the benefits of using Hooks are evident.
                            By using Hooks you have made the code not only easier to read and understand, but shortened the amount of time
                            it would take to develop the component. <br/>
                            <br/>
                            <br/>
                            Now let's take those simple concepts and apply them to a larger scale project. <br/>
                            <br/>
                            <br/>
                        </p>
                        <h2 id="project">Making a Project</h2> <br/>
                        <p>
                            <b>To build this app I am assuming the following:</b>
                            <div className="sub-table">
                                <p>&bull; You have node installed</p>
                                <p>&bull; Are well-versed in JavaScript</p>
                                <p>&bull; Some knowledge of React</p>
                            </div> <br/>
                            <br/>
                            First things first, we have to create our react app, there are different ways to do this, but
                            in this tutorial we'll be running the command <code>npx create-react-app react-hooks-intro</code>.
                            Once everything is set up, change directories into our new project and
                            run <code>npm install semantic-ui-react semantic-ui-css</code> so that we can make
                            a presentable frontend using Semantic UI (because React is a UI framework in the end).
                            In this tutorial we'll be using the pre built css themes from Semantic UI, if you would like to
                            customize your frontend, no need to use Semantic UI at all, but for this tutorial we'll be importing
                            the minified css file <code>import 'semantic-ui-css/semantic.min.css';</code> in our App.js file<br/>
                            <br/>
                            <br/>
                            Next, create a directory called <code>components</code> and create a JavaScript file
                            called <code>ListMovies.js</code> and another called <code>Movie.js</code>. We'll start by making
                            a reusable Card component with the help of Semantic UI in our <code>Movie.js</code> file. <br/>
                            <br/>
                            <br/>
                            <b id="card">Creating the Card Component</b> <br/>
                            <br/>
                            <br/>
                            In order to use this Component for all the movies we fetch from the API, we have to know what the card properties will be.
                            In this case we have the movie title, description, director, and the Rotten Tomatoes Score. We will
                            display the same image for each Card since the API doesn't provide an image.<br/>
                            <br/>
                            <br/>
                            At this point our JavaScript file will look something like this <br/>
                            <br/>
                            <Gist id="56588618d11e561bae8124f27ff52136" /> <br/>
                            <br/>
                            <b id="list">Making the API Call</b> <br/>
                            <br/>
                            <br/>
                            The next step is to make the API call in our <code>ListMovies.js</code> file. To do this we'll be using the API given to us by our good friends
                            at <a href="https://ghibliapi.herokuapp.com/">the Studio Ghibli API</a>. The way this will be done is by creating
                            a state variable called 'movies' that we will update using the <code>useState()</code> Hook. The API call itself
                            will be done using the <code>useEffect()</code> Hook, and the contents of the request will be mapped onto
                            the Cards we have already built to be displayed in an organized manner. Your <code>ListMovies</code> Component should
                            now look something like this <br/>
                            <br/>
                            <Gist id="2a7d374b70c69369740e1d985a920be0" /> <br/>
                            <br/>
                            If you use the same styles as I do, your application should now look something like this <br/>
                            <br/>
                            <br/>
                            <div className="main-img">
                                <img src={project} alt=""/>
                            </div> <br/>
                            <br/>
                            <h2>Final Thoughts</h2> <br/>
                            So that's that, your first mini project using React Hooks. Hopefully this tutorial helped you,
                            and gave you some practice using Hooks. <br/>
                            <br/>
                            <br/>
                            If you'd like to see the full project, checkout my repository <a href="https://github.com/s6eskand/learn-with-me">Learn With Me</a> where
                            I post all the completed projects from these tutorials. This specific project can be
                            found <a href="https://github.com/s6eskand/learn-with-me/tree/master/intro-react-hooks-js">here</a>. If this was helpful, star
                            the repository and be sure to come back soon for more posts and tutorials <span role="img" aria-label="smiling emoji">&#128516;</span>
                        </p>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Post2;