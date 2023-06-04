import { ILoading } from '@components/Icons';
import { InputField } from '@components/Shared/Common';
import { yupResolver } from '@hookform/resolvers/yup';
import { ActionAuthPage } from 'models';
import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiFillGooglePlusCircle } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { authService } from 'services/auth-services';
import { dataTile, schemaLogin, schemaSignUp } from './AuthForm.props';

export interface LoginFormProps {
  type?: ActionAuthPage;
}

export default function LoginForm({ type = 'login' }: LoginFormProps) {
  const router = useRouter();
  const {
    query: { redirect },
  } = router;
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const form = useForm({
    resolver: yupResolver(type === 'login' ? schemaLogin : schemaSignUp),
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = form;

  const onSubmit = async (values) => {
    const { name, email, password } = values;
    setLoading(true);
    try {
      let result;
      switch (type) {
        case 'signup':
          result = await authService.signup({ name, email, password });
          break;
        case 'login':
          result = await authService.login({ email, password });
          break;
        default:
          break;
      }

      if (result?.error) {
        return toast.error(result?.error);
      }
      toast.success(`${type} successfully`);
      if (redirect) {
        router.push(String(redirect));
      }
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  //@ts-ignore
  if (session?.user?.name && !session?.user?.isAdmin && router.pathname === '/login') {
    // router.push('/');
    return <section className="container mx-auto">You've already logged</section>;
  }

  return (
    <section className="container mx-auto">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto py-10 w-34 max-w-[98%] shadow-main lg:!px-8 px-4 bg-white"
      >
        <h4 className="text-3xl text-center mb-4">{type === 'login' ? 'Login' : 'Sign Up'}</h4>

        {type === 'login' && (
          <p className="text-sub-title mb-5 mt-2 font-lato-light tracking-wide font-bold text-center">
            Please login using account detail bellow.
          </p>
        )}
        {type !== 'login' && (
          <InputField disabled={loading} control={control} name="name" placeholder="Name" />
        )}
        <InputField disabled={loading} control={control} name="email" placeholder="Email Address" />
        <InputField
          disabled={loading}
          control={control}
          name="password"
          placeholder="Password"
          type="password"
        />

        {type !== 'login' && (
          <InputField
            disabled={loading}
            control={control}
            name="confirm_password"
            placeholder="Confirm Password"
            type="password"
          />
        )}
        {type === 'login' && (
          <Link
            href="/forgot"
            className="block -mt-1 block underline text-left text-xs hover:text-pink-1 transition ease-in-out duration-500 font-lato-light text-sub-title tracking-wide"
          >
            Forgot password
          </Link>
        )}

        <button
          disabled={loading}
          onClick={() => signIn('google')}
          type="button"
          className="flex items-center justify-center mt-10 w-full rounded-sm px-3.5 py-2.5 text-sm font-semibold border border-primary shadow-sm backdrop-opacity-10 hover:backdrop-opacity-60"
        >
          {dataTile[type]} with Google
          <span className="ml-2">
            <AiFillGooglePlusCircle size={30} />
          </span>
        </button>
        <button
          type="submit"
          disabled={loading}
          className={`mt-3 bg-pink-1 w-full rounded-sm px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm backdrop-opacity-10 hover:backdrop-opacity-60 ${
            loading && 'opacity-50'
          }`}
        >
          {loading ? <ILoading /> : dataTile[type]}
        </button>
        <Link
          href={`/${type !== 'login' ? 'login' : 'signup'}`}
          className="mt-6 text-center block underline font-lato-light text-primary tracking-wide"
        >
          {type !== 'login' ? 'Already a Member? Sign In' : 'Don’t have an Account? Create account'}
        </Link>
      </form>
    </section>
  );
}
