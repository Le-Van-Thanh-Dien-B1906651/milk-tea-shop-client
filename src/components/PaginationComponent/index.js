import { useState, useEffect } from 'react';
import { Pagination } from 'react-bootstrap';

function PaginationComponent({ itemsPerPage, totalItems, paginate, currentPage }) {
    const [disablePrev, setDisablePrev] = useState(false);
    const [disableNext, setDisableNext] = useState(false);

    const pageNumbers = [];
    const pageNumber = Math.ceil(totalItems/itemsPerPage);

    for (let i=1; i<=pageNumber; i++){
        pageNumbers.push(i);
    }

    useEffect(() => {
        if (currentPage===1) 
            setDisablePrev(true);
        else setDisablePrev(false);

        if (currentPage===pageNumber)
            setDisableNext(true);
        else setDisableNext(false);

    }, [currentPage])

    return (
        <Pagination className={`justify-content-center`}>
            <Pagination.First disabled={disablePrev} onClick={() => paginate(1)} />
            {pageNumbers.map(number => {
                return <Pagination.Item 
                            onClick={() => paginate(number)} 
                            key={number}
                        >
                            {number}
                        </Pagination.Item>
            })}     
            <Pagination.Last disabled={disableNext} onClick={() => paginate(pageNumber)} />
        </Pagination>
    )
}

export default PaginationComponent
