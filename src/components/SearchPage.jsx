import React from 'react';
import { Container } from 'react-bootstrap';
import SearchForm from './SearchForm';

function SearchPage() {
    return (
        <div>
            <Container className='mt-5 mb-5'>
                <SearchForm/>
            </Container>
        </div>
    )
}

export default SearchPage
