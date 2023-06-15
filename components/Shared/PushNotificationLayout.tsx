import { firebaseConfig } from '@utils/firebase';
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, NotificationPayload, onMessage } from 'firebase/messaging';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

export function PushNotificationLayout() {
  useEffect(() => {
    const firebaseApp = initializeApp(firebaseConfig);
    const messaging = getMessaging(firebaseApp);

    const fetchToken = () => {
      return getToken(messaging, {
        vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPIDKEY,
      })
        .then(async (token) => {
          if (token) {
            // *Note: this case for test send noti from server, if token isn't registed anymor, it will show error send noti
          }
        })
        .catch((err) => {
          console.log('An error occurred while retrieving token. ', err);
        });
    };

    const onMessageListener = () =>
      new Promise((resolve) => {
        onMessage(messaging, (payload) => {
          resolve(payload);
        });
      });

    fetchToken();

    onMessageListener()
      .then((payload: { notification: NotificationPayload }) => {
        const { title, body, image } = payload.notification;
        toast(`${title}, ${body}`, {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
        console.log(payload);
      })
      .catch((err) => console.log('failed: ', err));
  });

  return <></>;
}

export default PushNotificationLayout;
