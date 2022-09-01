import React from 'react'; 
import { render } from '@testing-library/react'; 
import '@testing-library/jest-dom/extend-expect';
// import modules to test
import App from '../App';


// tbr-tab for test block
test('Vitejs should be in the doc', () => {
    const { getByText } = render(<App />);
    getByText(/Vitejs/i);
 });