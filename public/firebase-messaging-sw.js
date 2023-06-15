// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: 'AIzaSyDjaIeOwoiNUzeGoHOvA68l_Wx1dMqyL_E',
  authDomain: 'gifted-proxy-388006.firebaseapp.com',
  projectId: 'gifted-proxy-388006',
  storageBucket: 'gifted-proxy-388006.appspot.com',
  messagingSenderId: '734605853766',
  appId: '1:734605853766:web:52141e35c39cc71932b647',
  measurementId: 'G-26PMCP3B3X',
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
