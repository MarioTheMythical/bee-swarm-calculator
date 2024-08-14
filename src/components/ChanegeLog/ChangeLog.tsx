import React from 'react';

interface ChangelogProps {
  changelogData: ChangelogEntry[];
}

const Changelog: React.FC<ChangelogProps> = ({ changelogData }) => {
  return (
    <div className="changelog">
      {changelogData.map((entry, index) => (
        <div key={index} className="changelog-entry">
          <h3>Version {entry.version} - {entry.date}</h3>
          <ul>
            {entry.changes.map((change, i) => (
              <li key={i}>{change}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Changelog;