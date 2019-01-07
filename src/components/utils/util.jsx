
import React from 'react';

const Greet = ({ name, type }) => (
    <div>  {type ? name + ' registred succefully !' : name + ' fialled to register !'}</div>
);
export { Greet }