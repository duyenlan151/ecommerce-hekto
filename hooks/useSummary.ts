import { SummaryModel } from 'models';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { summaryService } from 'services/Admin';

export const useSummary = () => {
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState<Partial<SummaryModel>>({});

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const result = await summaryService.getSummary();
        setSummary(result);
      } catch (error) {
        toast('Something error! Please try again.', { type: 'error' });
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { loading, summary };
};
