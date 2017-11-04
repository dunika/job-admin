import React from 'react';

const jobTypes = [
  { value: '2', label: 'Full Time' },
  { value: '189', label: 'Volunteer' },
  { value: '192', label: 'Temporary' },
  { value: '193', label: 'Permanent' },
  { value: '314', label: 'Freelance' },
  { value: '315', label: 'Internship' },
  { value: '340', label: 'Apprenticeship' },
  { value: '342', label: 'Part Time and Full Time' },
  { value: '401', label: 'Part Time' },
];

export default ({ input }) => (
  <select {...input}>
    <option disabled value="">Select job type</option>
    {jobTypes.map(({ value, label }) => (
      <option value={value}>{label}</option>
    ))}
  </select>
);
