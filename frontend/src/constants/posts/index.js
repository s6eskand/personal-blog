
// import components
import About from "../../views/posts/About";
import Post2 from '../../views/posts/Post2';
import Post3 from '../../views/posts/Post3';
import Post4 from '../../views/posts/Post4';

// import Constants
import {
    TAG0,
    TAG1,
    TAG2,
    TAG3,
} from "../filters";

// Images
import introduction from '../../media/images/introduction.png';
import djangoUnchained from '../../media/images/django_django_unchained.png';
import reactHooks from '../../media/images/react_hooks.png';
import reactHooksTs from '../../media/images/react_hooks_ts.png';

export const routes = [
    {
      image: reactHooksTs,
      title: "An Intro to React and TypeScript",
      description: "React hasn't changed, but dynamically typed components have.",
      tags: TAG3,
      date: "June 27 2020 ",
      time: " 10 min read",
      books: 2,
      path: "/react-with-typescript",
      component: Post4
    },
    {
        image: djangoUnchained,
        title: "Building a Web Application with Django",
        description: "Going through Quentin Tarantino's favourite web framework.",
        tags: TAG2,
        date: "June 20 2020 ",
        time: ' 20 min read',
        books: 3,
        path: "/intro-to-django",
        component: Post3
    },
    {
        image: reactHooks,
        title: "An intro to React Hooks",
        description: "Because the React devs love fishing, and JavaScript functions.",
        tags: TAG1,
        date: "June 19 2020 ",
        time: " 10 min read",
        books: 2,
        path: "/intro-to-hooks-js",
        component: Post2
    },
    {
        image: introduction,
        title: "Welcome to my Blog!",
        description: "A quick welcome and insight into the purpose of this blog.",
        tags: TAG0,
        date: "June 19 2020 ",
        time: "1 min read",
        books: 1,
        path: "/about",
        component: About
    },
];