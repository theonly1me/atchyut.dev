import { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';

export function useCal() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({});
      cal('floatingButton', {
        calLink: 'atchyut/20min',
        buttonText: 'Calendar',
      });
      cal('ui', {
        styles: { branding: { brandColor: '#000000' } },
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
    })();
  }, []);
}
