import React from 'react';
import { Helmet } from 'react-helmet';

interface Props {
  title: string | undefined;
}

const ReactHelmet: React.FC<Props> = ({ title }) => (
  <Helmet>
    <title>{title ? title : 'Loading'}</title>
  </Helmet>
);

export default ReactHelmet;
