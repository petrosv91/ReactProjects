import React from 'react';

import { useToast } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';

import { useMainMachine } from '../context/mainMachineProvider';
import { createToast, isRateValid, isTotalWeightValid } from '../utils';

function useStoreValidation() {
  const toast = useToast();
  const { getValues } = useFormContext();
  const [{ context }] = useMainMachine();

  const validate = React.useCallback(
    (formData, key) => {
      if (!formData) return true;
      const { totalWeight } = getValues();

      switch (key) {
        case 'element':
          if (!isRateValid(context, formData)) {
            createToast(toast, {
              type: 'error',
              title: 'Αποτυχία',
              content: 'Το ποσοστό έχει ξεπεράσει το 100%',
            });
            return false;
          }
          break;
        case 'product':
          if (!totalWeight) {
            createToast(toast, {
              type: 'error',
              title: 'Αποτυχία',
              content: 'Το πεδίο συνολικά κιλά είναι άδειο',
            });
            return false;
          }
          if (!isTotalWeightValid(context, formData, totalWeight)) {
            createToast(toast, {
              type: 'error',
              title: 'Αποτυχία',
              content: 'Τα κιλά έχουν ξεπεράσει τα συνολικά κιλά που δώθηκαν',
            });
            return false;
          }
          break;
        default:
          return true;
      }
      return true;
    },
    [context, getValues, toast],
  );
  return { validate };
}

export default useStoreValidation;
