import * as React from 'react';

import { User } from '../interfaces';

type ListDetailProps = {
  item: User;
};

const ListDetail = ({ item: user }: ListDetailProps) => (
  <div>
    <h3>Detail for {user.name}</h3>
    <p>ID: {user.id}</p>
  </div>
);

export default ListDetail;
