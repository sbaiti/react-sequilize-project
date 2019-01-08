import React from 'react';
import Users from '../users/Users';
import Home from '../home/Home';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { Route, Router } from 'react-router-dom';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './sideBar.css';


const SideBar = (props) => {
    return (
        <Router>
            <Route render={({ location, history }) => (
                <React.Fragment>
                    <SideNav
                        onSelect={(selected) => {
                            const to = '/' + selected;
                            if (location.pathname !== to) {
                                history.push(to);
                            }
                        }}
                    >
                        <SideNav.Toggle />
                        <SideNav.Nav defaultSelected="home">
                            <NavItem eventKey="home">
                                <NavIcon>
                                    <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                                </NavIcon>
                                <NavText>
                                    Home
                    </NavText>
                            </NavItem>
                            <NavItem eventKey="users">
                                <NavIcon>
                                    <i className="fa fa-fw fa-user" style={{ fontSize: '1.75em' }} />
                                </NavIcon>
                                <NavText>
                                    Users
</NavText>
                                <NavItem eventKey="users/member">
                                    <NavText>
                                        Member
    </NavText>
                                </NavItem>
                                <NavItem eventKey="users/gantt">
                                    <NavText>
                                        Gantt Chart
    </NavText>
                                </NavItem>
                            </NavItem>
                        </SideNav.Nav>
                    </SideNav>
                    <main>
                        <Route path="/home" component={props => <Home />} />
                        <Route path="/users" component={props => <Users />} />
                    </main>
                </React.Fragment>
            )}
            />
        </Router>

    )
}


export default SideBar;