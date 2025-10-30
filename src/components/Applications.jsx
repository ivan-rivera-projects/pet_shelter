import { useState, useEffect } from "react";
import { fetchApplications } from "../services/api";

const formatDate = (dateString) => dateString.split("T")[0];

const Applications = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadApplications = async () => {
      try {
        setLoading(true);
        const applicationsData = await fetchApplications();
        setApplications(applicationsData);
        setError(null);
      } catch (err) {
        console.error('Failed to load applications:', err);
        setError('Failed to load applications. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadApplications();
  }, []);

  if (loading) {
    return (
      <div className="table-container">
        <h3>Applications</h3>
        <p>Loading applications...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="table-container">
        <h3>Applications</h3>
        <p style={{ color: 'red' }}>{error}</p>
      </div>
    );
  }

  return (
    <div className="table-container">
      <h3>Applications</h3>
      <table>
        <thead>
          <tr>
            <th>Applicant Name</th>
            <th>Email</th>
            <th>Phone #</th>
            <th>Pet ID</th>
            <th>Pet Name</th>
            <th>Pet Species</th>
            <th>Application Submitted on</th>
          </tr>
        </thead>
        <tbody>
          {applications.length === 0 ? (
            <tr>
              <td colSpan="7" style={{ textAlign: 'center' }}>
                No applications yet
              </td>
            </tr>
          ) : (
            applications.map((application) => (
              <tr key={application.applicationId}>
                <td>{application.applicant_name}</td>
                <td>{application.email}</td>
                <td>{application.phone}</td>
                <td>{application.pet_id}</td>
                <td>{application.pet_name}</td>
                <td>{application.species}</td>
                <td>{formatDate(application.submitted_at)}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Applications;
