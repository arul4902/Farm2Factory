import React, { useEffect, useState } from 'react';
import { Container, Grid, Card, CardContent, Typography, Box, Divider, Avatar } from '@mui/material';
import { Bar, Line } from 'react-chartjs-2';
import axios from 'axios';
import 'chart.js/auto';
import './AdminDashboard.css'; // Import your custom styles
import CircularProgress from '@mui/material/CircularProgress';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import profile  from'./mine pic.jpg';


const AdminDashboard = () => {
  const [statistics, setStatistics] = useState({
    totalWaste: '5000 kg',
    totalFarmers: 2,
    totalIndustries: 2,
  });
  const [activities, setActivities] = useState([
    { description: 'Waste collection completed for Farmer John' },
  ]);
  const [loading, setLoading] = useState(true);

  // Sample Data for Charts
  const websiteViewsData = {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    datasets: [
      {
        label: 'Website Views',
        data: [40, 50, 30, 60, 50, 70, 60],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
    ],
  };

  const dailySalesData = {
    labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Daily Sales',
        data: [300, 400, 300, 500, 600, 400, 700, 600, 650],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const completedTasksData = {
    labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Completed Tasks',
        data: [200, 250, 300, 400, 350, 450, 500, 550, 600],
        backgroundColor: 'rgba(255, 159, 64, 0.6)',
      },
    ],
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const statsResponse = await axios.get('http://localhost:9003/api/overview');
        setStatistics(statsResponse.data);

        const activitiesResponse = await axios.get('http://localhost:9003/api/activities');
        setActivities(activitiesResponse.data);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();

    const intervalId = setInterval(() => {
      console.log('Fetching updated data...');
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  if (loading) {
    return (
      <Container maxWidth="xl">
        <Box display="flex" justifyContent="center" alignItems="center" style={{ height: '80vh' }}>
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="xl" className="dashboard-container">
      <Grid container spacing={3}>
        {/* Sidebar */}
        <Grid item xs={12} md={2} className="sidebar">
          <Box display="flex" flexDirection="column" alignItems="center" p={2}>
            <Avatar
              alt="Profile Picture"
              src={profile} // Replace with actual image path
              sx={{ width: 80, height: 80, mb: 2 }}
            />
            <Typography variant="h6" className="sidebar-title">Admin Dashboard</Typography>
            <Divider />
            <Nav className="flex-column mt-3">
              <Nav.Link as={Link} to="/manage-farmers" className="mb-3">Manage Farmers</Nav.Link>
              <Nav.Link as={Link} to="/manage-industries" className="mb-3">Manage Industries</Nav.Link>
              <Nav.Link as={Link} to="/manage-waste" className="mb-3">Manage Waste</Nav.Link>
              <Nav.Link as={Link} to="/queries" className="mb-3">Queries</Nav.Link>
              <Nav.Link as={Link} to="/logout" className="mb-3">Logout</Nav.Link>
            </Nav>
          </Box>
        </Grid>

        {/* Dashboard Content */}
        <Grid item xs={12} md={10}>
          <Typography variant="h4" className="mb-4">Dashboard Overview</Typography>

          {/* Summary Cards */}
          <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
              <Card>
              <div className='card1'>
                <CardContent>
                  <Typography variant="h6">Total Waste Collected</Typography>
                  <Typography variant="h4">{statistics.totalWaste}</Typography>
                </CardContent>
                </div>
              </Card>
            </Grid>
            <Grid item xs={12} md={3}>
              <Card>
              <div className='card2'>
                <CardContent>
                  <Typography variant="h6">Total Farmers</Typography>
                  <Typography variant="h4">{statistics.totalFarmers}</Typography>
                </CardContent>
                </div>
              </Card>
            </Grid>
            <Grid item xs={12} md={3}>
              <Card>
              <div className='card3'>
                <CardContent>
                  <Typography variant="h6">Total Industries</Typography>
                  <Typography variant="h4">{statistics.totalIndustries}</Typography>
                </CardContent>
                </div>
              </Card>
            </Grid>
            <Grid item xs={12} md={3}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Recent Activities</Typography>
                  <Box>
                    {activities.length > 0 ? (
                      activities.map((activity, index) => (
                        <Typography key={index} variant="body2">{activity.description}</Typography>
                      ))
                    ) : (
                      <Typography variant="body2">No recent activities</Typography>
                    )}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Graphs Section */}
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Website Views</Typography>
                  <Bar data={websiteViewsData} />
                  <Typography color="textSecondary">Last Campaign Performance</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Daily Sales</Typography>
                  <Line data={dailySalesData} />
                  <Typography color="textSecondary">+15% increase in today sales</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Completed Tasks</Typography>
                  <Line data={completedTasksData} />
                  <Typography color="textSecondary">Last Campaign Performance</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AdminDashboard;
