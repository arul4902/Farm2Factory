import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminQueries.css'; // Ensure this path is correct

const AdminQueries = () => {
    const [queries, setQueries] = useState([]);
    const [replyMessage, setReplyMessage] = useState('');
    const [isReplyModalOpen, setReplyModalOpen] = useState(false);
    const [selectedQuery, setSelectedQuery] = useState(null);

    useEffect(() => {
        const fetchQueries = async () => {
            try {
                const response = await axios.get('http://localhost:9003/api/contacts/queries');
                if (Array.isArray(response.data)) {
                    setQueries(response.data);
                } else {
                    console.error('Expected an array but got:', response.data);
                    setQueries([]);
                }
            } catch (error) {
                console.error('Error fetching contact queries:', error);
            }
        };

        fetchQueries();
    }, []);

    const handleReply = (query) => {
        setSelectedQuery(query);
        setReplyMessage('');
        setReplyModalOpen(true);
    };

    const handleSendReply = async () => {
        if (!selectedQuery) return;

        try {
            await axios.post(`http://localhost:9003/api/contacts/reply/${selectedQuery.id}`, replyMessage, {
                headers: { 'Content-Type': 'text/plain' }
            });
            alert('Reply sent successfully');
            setReplyModalOpen(false);
            setSelectedQuery(null);
        } catch (error) {
            console.error('Error sending reply:', error);
            alert('Failed to send reply');
        }
    };

    const handleCloseModal = () => {
        setReplyModalOpen(false);
        setSelectedQuery(null);
    };

    return (
        <div className="admin-queries-container">
            <h2>Contact Queries</h2>
            <table>
                <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Message</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(queries) && queries.map((query) => (
                        <tr key={query.id}>
                            <td>{query.fullName}</td>
                            <td>{query.email}</td>
                            <td>{query.message}</td>
                            <td>
                                <button onClick={() => handleReply(query)}>Reply</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {isReplyModalOpen && selectedQuery && (
                <div className="modal-overlay">
                    <div className="reply-modal">
                        <h3>Reply to {selectedQuery.email}</h3>
                        <textarea
                            value={replyMessage}
                            onChange={(e) => setReplyMessage(e.target.value)}
                            placeholder="Enter your reply here..."
                        ></textarea>
                        <button onClick={handleSendReply}>Send Reply</button>
                        <button className="cancel-button" onClick={handleCloseModal}>Cancel</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminQueries;
