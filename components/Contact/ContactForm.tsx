import { ILoading } from '@components/Icons';
import { InputField, TextareaField } from '@components/Shared/Common';
import { Modal } from '@components/Shared/Modal';
import { yupResolver } from '@hookform/resolvers/yup';
import { getError } from '@utils/common';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { sendmailService } from 'services';
import { schemaContact } from './ContactForm.props';

export interface ContactFormProps {}

export default function ContactForm(props: ContactFormProps) {
  const [loading, setLoading] = useState(false);
  const form = useForm({
    resolver: yupResolver(schemaContact),
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = form;

  const onSubmit = async (values) => {
    const { email, message, subject, name } = values;
    setLoading(true);
    try {
      const result = await sendmailService.sendMail({
        email,
        subject,
        message,
        name,
      });

      if (result?.message) {
        toast.success(result?.message);
      }
    } catch (error) {
      toast.error(getError(error));
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="z-10">
      {loading && (
        <Modal showIconClose={false} isShow={loading} onChange={() => {}}>
          <ILoading />
        </Modal>
      )}
      <h4 className="text-blue-1 text-3xl">Get In Touch</h4>
      <div className="text-sub-title font-lato-light leading-7 mt-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices tristique
        amet erat vitae eget dolor los vitae lobortis quis bibendum quam.
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-9">
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-6 gap-4">
          <InputField
            control={control}
            name={'name'}
            className="lg:bg-white bg-transparent"
            placeholder="Your Name*"
          />
          <InputField
            type="email"
            control={control}
            name={'email'}
            className="lg:bg-white bg-transparent"
            required
            placeholder="Your E-mail"
          />
        </div>
        <InputField
          control={control}
          name={'subject'}
          className="lg:bg-white bg-transparent"
          required
          placeholder="Subject*"
        />
        <TextareaField
          name="message"
          control={control}
          className="lg:bg-white bg-transparent"
          placeholder="Type Your Messege*"
        />
        <button
          disabled={loading}
          type="submit"
          className="mt-4 bg-pink-1 w-40 rounded-sm px-5 py-2.5 text-base font-lato text-white shadow-sm backdrop-opacity-10 hover:backdrop-opacity-60"
        >
          Send Mail
        </button>
      </form>
    </div>
  );
}
