import React, { useState } from 'react';

export const useFetch = (url = '') => {

    const [fetchDate, setFetchDate] = useState({
        data: null,
        isLoading: false,
        isError: null,
    });

    const getData = async () => {
        setFetchDate({
            ...fetchDate,
            isLoading: true,
        });
        const resp = await fetch(url);
        const data = await resp.json();
        console.log(data, 'data...');
        setFetchDate({
            ...fetchDate,
            data:data,
            isLoading: false,
            isError: null,
        })
    }

  return {
    ...fetchDate,
    getData,
  };
}
