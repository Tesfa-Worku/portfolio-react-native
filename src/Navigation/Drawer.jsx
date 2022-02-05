import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import Home from '../Screens/Home';
import Career from '../Screens/Career';
import Portfolio from '../Screens/Portfolio';
import Education from '../Screens/Education';
// import Contact from '../Screens/Contact';

const Drawer = () => {

    const Drawers = createDrawerNavigator();
    return (
        <Drawers.Navigator>
            {/* <Drawers.screen name="Home" component={Home}/> */}
            <Drawers.screen name="Career" component={Career}/>
            <Drawers.screen name="Portfolio" component={Portfolio}/>
            <Drawers.screen name="Education" component={Education}/>
            {/* <Drawers.screen name="Contact" component={Contact}/> */}
        </Drawers.Navigator>
    );
}

export default Drawer;
