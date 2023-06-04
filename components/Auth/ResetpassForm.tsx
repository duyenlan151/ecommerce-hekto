import { ILoading } from '@components/Icons';
import { InputField } from '@components/Shared/Common';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { authService } from 'services/auth-services';
import { schemaReset } from './ResetpassForm.props';

export interface ResetPassProps {}

export default function ResetpassForm({}: ResetPassProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const {
    query: { token },
  } = router;

  const form = useForm({
    resolver: yupResolver(schemaReset),
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = form;

  const onSubmit = async (values) => {
    const { confirm_password, password } = values;
    setLoading(true);
    try {
      const data = await authService.resetPassword({ token, password, confirm_password });

      // @ts-ignore
      toast.success(data.message);
      setTimeout(() => {
        router.push('/login');
      }, 1000);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="container mx-auto my-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto py-10 w-34 max-w-[98%] shadow-main lg:!px-8 px-4 bg-white"
      >
        <h4 className="text-3xl text-center mb-4">Reset password</h4>

        <InputField
          control={control}
          name="password"
          placeholder="Password"
          type="password"
          disabled={loading}
        />

        <InputField
          control={control}
          name="confirm_password"
          placeholder="Confirm Password"
          type="password"
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading}
          className={`mt-3 bg-pink-1 w-full rounded-sm px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm backdrop-opacity-10 hover:backdrop-opacity-60 ${
            loading && 'opacity-50'
          }`}
        >
          {loading ? <ILoading /> : 'Reset'}
        </button>
      </form>
    </section>
  );
}
