import React, { useState, useEffect } from 'react';
import AdminHeader from './adminHeader';
import { Modal, Button, Table, Form } from 'react-bootstrap';

const AdminWaste = () => {
  const [waste, setWaste] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedWaste, setSelectedWaste] = useState(null);
  const [editType, setEditType] = useState('');
  const [editQuantity, setEditQuantity] = useState('');
  const [newType, setNewType] = useState('');
  const [newQuantity, setNewQuantity] = useState('');

  useEffect(() => {
    // Fetch waste data from API or server
    // For demo purposes, using a static list
    setWaste([
      { id: 1, type: 'Manure', quantity: '100 kg' },
      { id: 2, type: 'Organic Waste', quantity: '200 kg' },
    ]);
  }, []);

  const handleEdit = (wasteItem) => {
    setSelectedWaste(wasteItem);
    setEditType(wasteItem.type);
    setEditQuantity(wasteItem.quantity);
    setShowEditModal(true);
  };

  const handleDelete = (wasteItem) => {
    setSelectedWaste(wasteItem);
    setShowDeleteModal(true);
  };

  const handleAdd = () => {
    setNewType('');
    setNewQuantity('');
    setShowAddModal(true);
  };

  const handleEditSubmit = () => {
    // Handle the edit logic here (e.g., send updated data to the server)
    setWaste(waste.map(item =>
      item.id === selectedWaste.id ? { ...item, type: editType, quantity: editQuantity } : item
    ));
    setShowEditModal(false);
  };

  const handleDeleteConfirm = () => {
    // Handle the delete logic here (e.g., send delete request to the server)
    setWaste(waste.filter(item => item.id !== selectedWaste.id));
    setShowDeleteModal(false);
  };

  const handleAddSubmit = () => {
    // Handle the add logic here (e.g., send new waste data to the server)
    const newWaste = {
      id: waste.length + 1, // Simple ID generation for demo purposes
      type: newType,
      quantity: newQuantity
    };
    setWaste([...waste, newWaste]);
    setShowAddModal(false);
  };

  return (
    <div>
      <AdminHeader />
      <div className="d-flex">
        <main className="flex-grow-1 p-4">
          <h1>Manage Waste</h1>
          <Button variant="primary" onClick={handleAdd}>Add Waste</Button>
          <Table striped bordered hover responsive className="mt-3">
            <thead>
              <tr>
                <th>ID</th>
                <th>Type</th>
                <th>Quantity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {waste.map(wasteItem => (
                <tr key={wasteItem.id}>
                  <td>{wasteItem.id}</td>
                  <td>{wasteItem.type}</td>
                  <td>{wasteItem.quantity}</td>
                  <td>
                    <Button variant="warning" size="sm" onClick={() => handleEdit(wasteItem)}>Edit</Button>
                    <Button variant="danger" size="sm" className="ml-2" onClick={() => handleDelete(wasteItem)}>Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          {/* Edit Modal */}
          <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Waste</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Type</Form.Label>
                  <Form.Control
                    type="text"
                    value={editType}
                    onChange={(e) => setEditType(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control
                    type="text"
                    value={editQuantity}
                    onChange={(e) => setEditQuantity(e.target.value)}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowEditModal(false)}>Close</Button>
              <Button variant="primary" onClick={handleEditSubmit}>Save Changes</Button>
            </Modal.Footer>
          </Modal>

          {/* Delete Modal */}
          <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Confirm Deletion</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Are you sure you want to delete {selectedWaste?.type}?
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>Cancel</Button>
              <Button variant="danger" onClick={handleDeleteConfirm}>Delete</Button>
            </Modal.Footer>
          </Modal>

          {/* Add Modal */}
          <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Add New Waste</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Type</Form.Label>
                  <Form.Control
                    type="text"
                    value={newType}
                    onChange={(e) => setNewType(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control
                    type="text"
                    value={newQuantity}
                    onChange={(e) => setNewQuantity(e.target.value)}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowAddModal(false)}>Close</Button>
              <Button variant="primary" onClick={handleAddSubmit}>Add Waste</Button>
            </Modal.Footer>
          </Modal>

        </main>
      </div>
    </div>
  );
};

export default AdminWaste;
