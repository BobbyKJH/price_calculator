/** React */
import React, { useCallback, useState } from 'react';

const useInput = <T>(initialValue: T) => {
  const [input, setInput] = useState<T>(initialValue);

  /** object Fc */
  const handleChangeInput = useCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.currentTarget;
    setInput({
      ...input,
      [name]: value
    })
  }, [input]);

  /** string Fc */
  const handleChange = (event: React.ChangeEvent): void => {
    // @ts-ignore
    const { value } = event.currentTarget;
    setInput(value)
  }

  return { input, handleChange, handleChangeInput };
};

export default useInput;