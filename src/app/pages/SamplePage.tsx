import React from 'react';
import { useSelector } from 'react-redux';
import ToastSample from '../components/Common/Toast';
import Counter from '../components/Counter/Counter';
import { RootState } from '../store/configStore';

export default function SamplePage(): JSX.Element {
  const showToast = useSelector((state: RootState) => state.toast.show);

  return (
    <div>
      <Counter />
      {showToast && <ToastSample />}
    </div>
  );
}
