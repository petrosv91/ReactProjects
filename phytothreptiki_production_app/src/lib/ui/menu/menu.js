import React from 'react';

import { Button, Menu as ChakraMenu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { MdExpandMore } from 'react-icons/md';

function Menu({ handleClick, options, title }) {
  return (
    <ChakraMenu>
      <MenuButton
        w={150}
        as={Button}
        fontSize='md'
        cursor='pointer'
        variant='ghost'
        // borderRadius={0}
        // borderBottomWidth={1}
        // borderBottomColor='text'
        rightIcon={<MdExpandMore />}
        _active={{ bg: 'none' }}
        _hover={{ color: 'secondaryText' }}
        _expanded={{ bg: 'none', color: 'text' }}
      >
        {title}
      </MenuButton>
      <MenuList p={1} minWidth={150} bg='background' borderRadius='sm'>
        {options.map((opt, index) => {
          return (
            <MenuItem
              key={index}
              p={2}
              color='text'
              borderBottomWidth={1}
              borderBottomColor='secondaryText'
              _last={{ borderBottomWidth: 0 }}
              _hover={{ bg: 'secondaryBackground' }}
              onClick={() => {
                handleClick(opt);
              }}
            >
              {opt.label}
            </MenuItem>
          );
        })}
      </MenuList>
    </ChakraMenu>
  );
}

export default Menu;
