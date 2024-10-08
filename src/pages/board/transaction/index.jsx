import React, { useEffect, useState } from 'react'

import TransactionData from './components/TransactionData'
import { api } from '../../../services/api'
import { appUrls } from '../../../services/urls'
import * as XLSX from 'xlsx';

const ITEMS_PER_PAGE = 10;  // Set the number of items per page

const Transactions = () => {
    const [allTransactions, setAllTransactions] = useState([])
    const [page, setPage] = useState(1)
    const [totalNumberOfPages, setTotalNumberOfPages] = useState(1)


    const fetchTransactionData = async() => {
        await api.get(appUrls?.GET_ALL_TRANSACTIONS_URL)
        .then((res) => {
          console.log(res, "data")
          setAllTransactions(res?.data?.data)
          setTotalNumberOfPages(Math.ceil(res?.data?.data.length / ITEMS_PER_PAGE));
        })
        .catch((err) => {
          console.log(err, "err")
        })
      }
    
    useEffect(() => {
        fetchTransactionData();
    }, [])


    const handlePageChange = (event, newPage) => {
        setPage(newPage);
    };

    const currentPageTransactions = allTransactions?.slice(
        (page - 1) * ITEMS_PER_PAGE,
        page * ITEMS_PER_PAGE
    );

    const exportToExcel = () => {
      const worksheet = XLSX.utils.json_to_sheet(allTransactions);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Transactions");
      XLSX.writeFile(workbook, "transactions.xlsx");
  };
    

  return (
    <div className='p-4'>
        <div className='flex justify-between items-center'>
            <h1 className='font-semibold xs:text-lg lg:text-3xl text-[#000]'>Transactions</h1>
            <button
              className='rounded-lg p-2 bg-[#027315] flex items-center justify-center w-[100px] h-[48px]'
              type='button'
              onClick={exportToExcel}
            >
              <p className='text-[#fff]  font-mont_alt text-sm'>Export CSV</p>
            </button>
        </div>
        <TransactionData
            allTransactions={currentPageTransactions}
            totalNumberOfPages={totalNumberOfPages}
            page={page}
            handlePaginationChange={handlePageChange}
        />
    </div>
  )
}

export default Transactions