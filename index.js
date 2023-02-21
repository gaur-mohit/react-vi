import React, { Component } from 'react';
import { render } from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './Hello';
import Form from './form';
import './style.css';


const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<Form />);
