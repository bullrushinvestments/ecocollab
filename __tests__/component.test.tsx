import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

// Mock external dependencies
jest.mock('./ExternalDependency', () => ({ default: ({ children }) => children }));

describe('Core Functionality Component Tests', () => {
    test('renders without crashing', () => {
        render(<CoreFunctionalityComponent />);
        expect(screen.getByText(/core functionality/i)).toBeInTheDocument();
    });

    test('handles user interaction with button click', async () => {
        const handleClick = jest.fn();

        render(
            <CoreFunctionalityComponent
                onButtonClick={handleClick}
            />
        );

        fireEvent.click(screen.getByRole('button', { name: /click me/i }));

        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    test('displays loading state when fetching data', async () => {
        const fetchMock = jest.fn().mockResolvedValueOnce({ data: [] });
        
        render(
            <CoreFunctionalityComponent
                fetchData={fetchMock}
            />
        );

        fireEvent.click(screen.getByRole('button', { name: /load data/i }));

        await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1));
        expect(screen.getByText(/loading.../i)).toBeInTheDocument();
    });

    test('handles error state when fetching data fails', async () => {
        const fetchMock = jest.fn().mockRejectedValueOnce(new Error('Failed to load'));

        render(
            <CoreFunctionalityComponent
                fetchData={fetchMock}
            />
        );

        fireEvent.click(screen.getByRole('button', { name: /load data/i }));

        await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1));
        expect(screen.getByText(/failed to load/i)).toBeInTheDocument();
    });

    test('validates input fields and shows error messages on invalid inputs', () => {
        render(
            <CoreFunctionalityComponent
                validateInput={() => ({ valid: false, message: 'Invalid input' })}
            />
        );

        fireEvent.change(screen.getByRole('textbox'), { target: { value: '' } });
        fireEvent.click(screen.getByRole('button', { name: /submit/i }));

        expect(screen.getByText(/invalid input/i)).toBeInTheDocument();
    });

    test('ensures accessibility features are properly implemented', () => {
        render(<CoreFunctionalityComponent />);

        const button = screen.getByRole('button', { name: /click me/i });
        fireEvent.click(button);
        
        expect(button).toHaveAttribute('aria-label');
        expect(button).toBeVisible();
    });

    test('handles edge cases such as empty data arrays and null values', () => {
        render(
            <CoreFunctionalityComponent
                data={[]}
                fetchData={() => Promise.resolve({ data: [] })}
            />
        );

        fireEvent.click(screen.getByRole('button', { name: /load data/i }));

        expect(screen.queryByText(/no data available/i)).toBeInTheDocument();
    });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

// Mock external dependencies
jest.mock('./ExternalDependency', () => ({ default: ({ children }) => children }));

describe('Core Functionality Component Tests', () => {
    test('renders without crashing', () => {
        render(<CoreFunctionalityComponent />);
        expect(screen.getByText(/core functionality/i)).toBeInTheDocument();
    });

    test('handles user interaction with button click', async () => {
        const handleClick = jest.fn();

        render(
            <CoreFunctionalityComponent
                onButtonClick={handleClick}
            />
        );

        fireEvent.click(screen.getByRole('button', { name: /click me/i }));

        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    test('displays loading state when fetching data', async () => {
        const fetchMock = jest.fn().mockResolvedValueOnce({ data: [] });
        
        render(
            <CoreFunctionalityComponent
                fetchData={fetchMock}
            />
        );

        fireEvent.click(screen.getByRole('button', { name: /load data/i }));

        await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1));
        expect(screen.getByText(/loading.../i)).toBeInTheDocument();
    });

    test('handles error state when fetching data fails', async () => {
        const fetchMock = jest.fn().mockRejectedValueOnce(new Error('Failed to load'));

        render(
            <CoreFunctionalityComponent
                fetchData={fetchMock}
            />
        );

        fireEvent.click(screen.getByRole('button', { name: /load data/i }));

        await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1));
        expect(screen.getByText(/failed to load/i)).toBeInTheDocument();
    });

    test('validates input fields and shows error messages on invalid inputs', () => {
        render(
            <CoreFunctionalityComponent
                validateInput={() => ({ valid: false, message: 'Invalid input' })}
            />
        );

        fireEvent.change(screen.getByRole('textbox'), { target: { value: '' } });
        fireEvent.click(screen.getByRole('button', { name: /submit/i }));

        expect(screen.getByText(/invalid input/i)).toBeInTheDocument();
    });

    test('ensures accessibility features are properly implemented', () => {
        render(<CoreFunctionalityComponent />);

        const button = screen.getByRole('button', { name: /click me/i });
        fireEvent.click(button);
        
        expect(button).toHaveAttribute('aria-label');
        expect(button).toBeVisible();
    });

    test('handles edge cases such as empty data arrays and null values', () => {
        render(
            <CoreFunctionalityComponent
                data={[]}
                fetchData={() => Promise.resolve({ data: [] })}
            />
        );

        fireEvent.click(screen.getByRole('button', { name: /load data/i }));

        expect(screen.queryByText(/no data available/i)).toBeInTheDocument();
    });
});