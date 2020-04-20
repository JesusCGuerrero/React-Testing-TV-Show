import React, { useReducer } from 'react';
import App from './App';
import * as rtl from '@testing-library/react';
import { userEvent } from '@testing-library/user-event'
import { getByTestId } from '@testing-library/react';

test('displays the correct name starting with the API data', async () => {
let myApp = rtl.render(<App />);
const text = await myApp.findByText('Select a season');
expect(text).toBeInTheDocument();
expect(text).toBeVisible();
});


