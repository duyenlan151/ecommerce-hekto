import { titleAction } from 'constants/index';
import { ActionCommon, SummaryModel, UserModel } from 'models';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { usersService } from 'services/Admin';

export const useUsers = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<Partial<UserModel>>({});

  const handleUser = async (user: Partial<UserModel>, action: ActionCommon) => {
    setLoading(true);
    let statusCode = false;
    try {
      const { _id, status } = user;
      switch (action) {
        case 'edit':
          {
            await usersService.updateUser({ _id, status });
          }
          break;

        default:
          break;
      }

      setTimeout(() => {
        toast(`${titleAction[action]} Successfully!`, { type: 'success' });
      }, 2000);

      statusCode = true;
    } catch (error) {
      toast('Something error! Please try again.', { type: 'error' });
    } finally {
      setLoading(false);
    }

    return statusCode;
  };

  return { loading, user, handleUser };
};
