import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';
import { Typography, CircularProgress, Box } from '@mui/material';
import axios from 'axios';

const Overview = () => {
  const [statistics, setStatistics] = useState({
    totalWaste: '0 kg',
    totalFarmers: 0,
    totalIndustries: 0,
    recentActivities: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const response = await axios.get('http://localhost:9003/api/overview');
        setStatistics(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching statistics:', error);
        setLoading(false);
      }
    };

    fetchStatistics();
  }, []);

  if (loading) {
    return (
      <Container fluid>
        <Box display="flex" justifyContent="center" alignItems="center" style={{ height: '80vh' }}>
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  return (
    <Container fluid>
      <Typography variant="h4" className="mb-4">Dashboard Overview</Typography>
      <Row>
        <Col xs={12} md={4} className="mb-4">
          <Card>
            <Card.Body>
              <Typography variant="h5">Total Waste Collected</Typography>
              <Typography variant="h6">{statistics.totalWaste}</Typography>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4} className="mb-4">
          <Card>
            <Card.Body>
              <Typography variant="h5">Total Farmers</Typography>
              <Typography variant="h6">{statistics.totalFarmers}</Typography>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4} className="mb-4">
          <Card>
            <Card.Body>
              <Typography variant="h5">Total Industries</Typography>
              <Typography variant="h6">{statistics.totalIndustries}</Typography>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Typography variant="h5" className="mb-4">Recent Activities</Typography>
      <Row>
        <Col xs={12} md={12} className="mb-4">
          <Card>
            <Card.Body>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Activity</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  {statistics.recentActivities.length > 0 ? (
                    statistics.recentActivities.map((activity, index) => (
                      <tr key={index}>
                        <td>{activity.date}</td>
                        <td>{activity.title}</td>
                        <td>{activity.details}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="3">No recent activities</td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Overview;
