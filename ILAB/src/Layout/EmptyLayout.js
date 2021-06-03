import React from 'react';

const EmptyLayout = ({ children, ...restProps }) => (
  <main className="cr-app bg-light" {...restProps}>
  </main>
);

export default EmptyLayout;
