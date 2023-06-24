import FCM from 'fcm-node';

const serverKey = process.env.NEXT_PUBLIC_FIREBASE_SERVERKEY; // put your server key here
const fcm = new FCM(serverKey);

/**
 *
 * @param registration_ids: ['registration_01', 'registration_02']
 * @param data: {
      //you can send only notification or only data(or include both)
      my_key: 'my value',
      my_another_key: 'my another value',
      url: 'https://prasanthj.com/javascript/send-push-notifcations-to-devices-using-nodejs/',
    },
 * @param notification:  {
      title: 'Title of your push notification',
      body: 'Body of your push notification',
    },
 */

export const sendNotiWithFirebase = async (registration_ids, data, notification) => {
  try {
    const message = {
      registration_ids,
      collapse_key: 'your_collapse_key',

      notification,
      data,
    };

    fcm.send(message, function (err, response) {
      if (err) {
        throw new Error('Something has gone wrong!');
      }
    });
  } catch (error) {
    throw new Error('error');
  }
};
