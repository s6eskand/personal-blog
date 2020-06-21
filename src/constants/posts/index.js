
// import Constants
import {
    TAG0,
    TAG1,
    TAG2,
} from "../filters";

// Images
import introduction from '../../media/images/introduction.png';
import djangoUnchained from '../../media/images/django_django_unchained.png';
import reactHooks from '../../media/images/react_hooks.png';

export const routes = [{
        image: djangoUnchained,
        title: "Building a Web Application with Django",
        description: "Going through Quentin Tarantino's favourite web framework.",
        tags: TAG2,
        date: "June 20 2020 ",
        time: ' 20 min read',
        books: 3,
        path: "/intro-to-django",
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
    },
];