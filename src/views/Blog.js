import React, { useState, useEffect } from "react";

import {Link} from "react-router-dom";
import '../views/posts/PostHeader.css'
import './Blog.css'

// Material UI
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors'
import {
    ExpansionPanel,
    ExpansionPanelDetails,
    ExpansionPanelSummary,
    Typography,
    FormControlLabel,
    Checkbox
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// components
import Blogcard from '../components/Blogcard';
import MobileCard from "../components/MobileCard";

// icons
import { FaGithub, FaLinkedin } from "react-icons/fa";

// images

// constants
import {
    TAGS,
} from "../constants/filters";

import { routes } from "../constants/posts";

const tags = {
    display: 'flex',
    flexWrap: 'wrap'
};

const useStyles = makeStyles((theme) => ({
    root: {
        width: 700,
        margin: 'auto',
        marginTop: 50,
        height: 'auto',
        background: '#f1f1f1'
    },
    rootMobile: {
        width: 345,
        margin: 'auto',
        marginTop: 50,
        height: 'auto',
        background: '#f1f1f1'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
}));

const BlueCheckbox = withStyles({
    root: {
        color: blue[200],
        '&$checked': {
            color: blue[400],
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

function Blog(props) {

    const classes = useStyles();
    const [width, setWidth] = useState(window.innerWidth);
    const [expanded, setExpanded] = useState(false);
    const [keys, setKeys] = useState([]);
    const [checked, setChecked] = useState({
        General: false,
        React: false,
        Hooks: false,
        JavaScript: false,
        Django: false,
        Python: false,
    });

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const handleCheck = (event) => {
        setChecked({ ...checked, [event.target.name]: event.target.checked });
        const key = event.target.name;
        keys.includes(key) ?
            setKeys(keys.filter(tag => tag !== key))
            : setKeys([...keys, key]);
    };

    useEffect(() => {
        window.addEventListener('resize', getWidth)
    });

    const getWidth = () => {
        setWidth(window.innerWidth)
    };

    const checkFilters = (component) => {
        let show = true;
        keys.map(key => {
            show = !component.tags.includes(key) && checked[key] ? false : show
        });
        return show
    };

    return (
        <div className="center" style={{marginBottom: '100px'}}>
            <div className="container" style={{paddingTop: '100px'}}>
                <h1 className="posts-title">Learn With Me, A(nother) Tech Blog</h1>
                <div className="author-info">
                    <img className="author-img" src="https://avatars3.githubusercontent.com/u/53276111?s=460&u=20f828d7613af24665772cd71f864427b0ee21c1&v=4" alt=""/>
                    <div className="info-header-text">
                        <p><b>Personal Blog for <a href="https://github.com/s6eskand" style={{textDecoration: 'underline', color: 'rgb(98, 132, 149)'}}>Sam Eskandar</a></b>
                            <br/>
                            Explaining concepts through projects
                        </p>
                    </div>
                    <div className="social-icons container">
                        <a href="https://github.com/s6eskand"><FaGithub id="github" size={30} /></a>
                        <a href="https://linkedin.com/in/sameskandar"><FaLinkedin id="linkedin" size={30} /></a>
                    </div>
                </div>
            </div>
            <div className={width > 760 ? classes.root : classes.rootMobile}>
                <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography className={classes.heading}>Filter Settings</Typography>
                        <Typography className={classes.secondaryHeading}>Set Filters to see Posts Related to what you are Looking for.</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <div style={tags}>
                            { TAGS.map(tag =>
                                <FormControlLabel
                                    control={<BlueCheckbox checked={checked.tag} onChange={handleCheck} name={tag}/>}
                                    label={tag}
                                />
                            )
                            }
                        </div>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
            {
                routes.map((route) =>
                    checkFilters(route) ?
                        width > 760 ?
                            <Link to={route.path}><Blogcard
                                image={route.image}
                                title={route.title}
                                description={route.description}
                                tags={route.tags}
                                date={route.date}
                                time={route.time}
                                books={route.books}
                            /></Link> :
                            <Link to={route.path}><MobileCard
                                image={route.image}
                                title={route.title}
                                description={route.description}
                                tags={route.tags}
                                date={route.date}
                                time={route.time}
                                books={route.books}
                            /></Link> :
                    null)
                    }
        </div>
    )
}

export default Blog;