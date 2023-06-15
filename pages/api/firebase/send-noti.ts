import { mongooseConnect } from '@lib/mongoose';
import { withNextCorsRoute } from '@utils/withSession';
import { sendNotiWithFirebase } from 'helpers/firebaseSendNoti';

export default withNextCorsRoute(async (req, res) => {
  const { method } = req;
  await mongooseConnect();

  switch (method) {
    case 'POST': {
      const { data, notification, registration_ids } = req.body;

      try {
        await sendNotiWithFirebase(registration_ids, data, notification);
        res.status(200).json({ message: 'Successfully sent with response' });
      } catch (error) {
        res.status(500).json({ message: 'Something has gone wrong!' });
      }
      break;
    }

    default:
      res.status(200).json({ message: 'Send noti with firebase' });
      break;
  }
});
