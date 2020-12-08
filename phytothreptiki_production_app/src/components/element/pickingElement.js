import React from 'react';

import { Text } from '@chakra-ui/react';

import useGetElements from '../../api/queries/useGetElements';
import { ElementList } from '../../lib/ui';
import ItemList from '../lists/itemList';

function PickingElement({ send, onClose }) {
  const keys = React.useRef(['label']);
  const { data = [], status, error } = useGetElements();

  function handleElementClick(el) {
    onClose();
    send({ type: 'ADD_ITEM', key: 'element', data: el });
  }

  if (error)
    return (
      <Text color='red.500' fontSize='md' fontWeight='500'>
        {error.message}
      </Text>
    );
  return (
    <ItemList
      keys={keys}
      data={data}
      List={ElementList}
      isLoading={status === 'loading'}
      handleClick={handleElementClick}
    />
  );
}

export default PickingElement;
