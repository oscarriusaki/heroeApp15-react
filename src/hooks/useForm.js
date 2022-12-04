import React, { useState } from 'react'

export const useForm = (initialValue) => {

    const [inputForm, setInputForm] = useState(initialValue);

    const onChange = ({target}) => {
        
        const {name, value} = target;

        setInputForm({
            ...inputForm,
            [name]: value
        })
    }
    const onReset = () => {
        setInputForm(initialValue);
    }

  return {
    ...inputForm,
    onChange,
    onReset,
  }
}
