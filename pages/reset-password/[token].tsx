import ResetpassForm from '@components/Auth/ResetpassForm';
import { ModalSuccess } from '@components/Shared/Modal';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { authService } from 'services/auth-services';

export interface ResetPasswordProps {}

export default function ResetPassword(props: ResetPasswordProps) {
  const [error, setError] = useState('');
  const router = useRouter();
  const {
    query: { token },
  } = router;

  useEffect(() => {
    (async () => {
      try {
        await authService.verifyToken({ token });
      } catch (error) {
        if (error.message) {
          setError(error.message);
        }
      }
    })();

    return () => {
      setError('');
    };
  }, [token]);

  const handleonClose = () => {
    router.push('/');
  };

  return (
    <>
      <ModalSuccess isShow={!!error} title={error} onClose={handleonClose} />
      {token && !error && <ResetpassForm />}
    </>
  );
}
