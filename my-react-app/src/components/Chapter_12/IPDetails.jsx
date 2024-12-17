import React, { useState, useEffect } from 'react';

const IpDetails = () => {
    const [ip, setIp] = useState(null);
    const [details, setDetails] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch the IP address
        fetch('https://api.ipify.org?format=json')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setIp(data.ip);
                // Fetch details for the IP address
                return fetch(`http://ip-api.com/json/${data.ip}`);
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setDetails(data);
            })
            .catch(err => {
                setError(err.message);
            });
    }, []);

    if (error) return <div>Error: {error}</div>;
    if (!details) return <div>Loading...</div>;

    return (
        <div>
            <h1>IP Details</h1>
            <p><strong>IP:</strong>{details.query}</p>
            <p><strong>Country:</strong>{details.country}</p>
            <p><strong>Region:</strong>{details.regionName}</p>
            <p><strong>City:</strong>{details.city}</p>
            <p><strong>ISP:</strong>{details.isp}</p>
        </div>
    );
};

export default IpDetails;