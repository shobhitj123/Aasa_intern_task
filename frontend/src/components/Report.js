import React, { useState, useEffect } from 'react';
import { fetchReport } from '../services/weatherService';

const Report = () => {
  const [report, setReport] = useState([]);

  useEffect(() => {
    fetchReport().then((data) => setReport(data));
  }, []);

  return (
    <div>
      {report.map((log, index) => (
        <div key={index}>
          <p>{log.city} - {log.weather_data}</p>
        </div>
      ))}
    </div>
  );
};

export default Report;
