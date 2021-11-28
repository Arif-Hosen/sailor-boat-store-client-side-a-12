import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Box, Drawer, Divider, Button, Typography, Toolbar, ListItemText, ListItemIcon, ListItem, List, InboxIcon, IconButton, CssBaseline } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";

import useAuth from './../../../Hooks/useAuth';
import Pay from './../Pay/Pay';
import MyOrders from './../MyOrders/MyOrders';
import Home from '../../Home/Home/Home';
import AddProduct from './../AddProduct/AddProduct';
import ManageAllOrder from './../ManageAllOrder/ManageAllOrder';
import ManageProduct from './../ManageProduct/ManageProduct';
import MakeAdmin from './../MakeAdmin/MakeAdmin';
import Review from '../Review/Review';
import AdminRoute from './../../Login/AdminRoute/AdminRoute';
import DashboardHome from './../DashboardHome/DashboardHome';

const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { user, admin, logOut } = useAuth();

    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div style={{ textAlign: 'left' }}>
            <Toolbar />
            <Divider />
            <Typography sx={{ textAlign: 'center' }}>
                <i style={{ fontSize: 35 }} className="fas fa-user-circle"></i><br /> {user.displayName}
            </Typography>
            <Link to='/home'><Button color="inherit">Home</Button></Link>
            <br />
            {!admin && <Box>

                <Link to={`${url}/pay`}><Button color="inherit">Payment</Button></Link>
                <br />
                <Link to={`${url}/myorder`}><Button color="inherit">My Order</Button></Link>
                <br />
                <Link to={`${url}/review`}><Button color="inherit">Review</Button></Link>
                <br />

            </Box>}
            {admin && <Box>

                <Link to={`${url}/makeAdmin`}><Button color="inherit">Make Admin</Button></Link>
                <Link to={`${url}/addProduct`}><Button color="inherit">Add A Product</Button></Link>
                <br />
                <Link to={`${url}/manageAllOrder`}><Button color="inherit">Manage All Orders</Button></Link>
                <br />
                <Link to={`${url}/manageProduct`}><Button color="inherit">Manage Products</Button></Link>
                <br />
            </Box>}
            <Button style={{ border: '1px solid navy' }} sx={{ mt: 5 }} variant='contained' onClick={logOut} color="inherit">Logout</Button>

            {/* <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List> */}

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                style={{ backgroundColor: ' #ff0101' }}
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />


                <Switch>
                    {/* user see this route */}
                    <Route path='/home'>
                        <Home></Home>
                    </Route>
                    {/* <Route exact path={`${path}/`}>
                        <DashboardHome></DashboardHome>
                    </Route> */}
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`${path}/myorder`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route>

                    {/* admin routes */}
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageAllOrder`}>
                        <ManageAllOrder></ManageAllOrder>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageProduct`}>
                        <ManageProduct></ManageProduct>
                    </AdminRoute>

                </Switch>



            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;