import { ILoading } from '@components/Icons';
import { InputField } from '@components/Shared/Common';
import { yupResolver } from '@hookform/resolvers/yup';
import useTranslation from 'next-translate/useTranslation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { authService } from 'services/auth-services';
import { schemaForgot } from './ResetpassForm.props';

export interface ForgotPassProps {}

export default function ForgotpassForm({}: ForgotPassProps) {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const form = useForm({
    resolver: yupResolver(schemaForgot),
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = form;

  const onSubmit = async (values) => {
    const { email } = values;
    setLoading(true);
    try {
      const data = await authService.forgetPassword({ email });

      // @ts-ignore
      setMessage(data?.message);
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
        <h4 className="text-3xl text-center mb-4">{t('auth:forgot-password.title')}</h4>
        <p className="text-sub-title mb-5 mt-2 font-lato-light tracking-wide font-bold text-center">
          {t('auth:forgot-password.desc')}
        </p>

        <InputField
          control={control}
          disabled={loading}
          name="email"
          placeholder={t('form:email.placeholder')}
          type="email"
        />
        <div
          dangerouslySetInnerHTML={{
            __html: message,
          }}
        ></div>
        {/* {message} */}
        <button
          type="submit"
          disabled={loading}
          className={`mt-5 bg-pink-1 w-full rounded-sm px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm backdrop-opacity-10 hover:backdrop-opacity-60 ${
            loading && 'opacity-50'
          }`}
        >
          {loading ? <ILoading /> : t('form:submit')}
        </button>
      </form>
    </section>
  );
}
