import React, { useEffect, useState } from 'react';

const HostName = ({ url }) => {
  const [host, setHost] = useState(null);

  useEffect(() => {
    const urlObject = new URL(url);
    const host = urlObject.hostname.indexOf('www.') === 0 ? urlObject.hostname.substr(4) : urlObject.hostname;
    setHost(host);
  }, [url]);

  return (
    <span>{host}</span>
  );
};

export default HostName;
