import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Counter.module.scss';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from '../../store/slices/counterSlice';
import { hideToast } from '../../store/slices/toastSlice';

export default function Counter(): JSX.Element {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');
  const incrementValue = Number(incrementAmount) || 0;

  const decrease = () => {
    dispatch(decrement());
    dispatch(hideToast());
  };

  return (
    <>
      <div>
        <div className={styles.row}>
          <button
            type="button"
            className={styles.button}
            aria-label="Decrement value"
            onClick={() => decrease()}
          >
            -
          </button>
          <span className={styles.value}>{count}</span>
          <button
            type="button"
            className={styles.button}
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            +
          </button>
        </div>
        <div className={styles.row}>
          <input
            className={styles.textbox}
            aria-label="Set increment amount"
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(e.target.value)}
          />
          <button
            type="button"
            className={styles.button}
            onClick={() => dispatch(incrementByAmount(incrementValue))}
          >
            Add Amount
          </button>
          <button
            type="button"
            className={styles.asyncButton}
            onClick={() => dispatch(incrementAsync(incrementValue))}
          >
            Add Async
          </button>
          <button
            type="button"
            className={styles.button}
            onClick={() => dispatch(incrementIfOdd(incrementValue))}
          >
            Add If Odd
          </button>
        </div>
      </div>
    </>
  );
}
