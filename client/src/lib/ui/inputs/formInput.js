import React from 'react';

import {
  Tag,
  Text,
  Icon,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';

import { useColorMode } from '../../../context/colorModeProvider';
import Input from './input';

function FormInput({
  errors = {},
  w,
  label,
  name,
  tag,
  leftIcon,
  rightIcon,
  rightIconClick,
  defaultValue,
  formRef,
  ...rest
}) {
  const { currentColor } = useColorMode();
  return (
    <FormControl w={w} mt={2} isInvalid={errors[name]}>
      {label && (
        <FormLabel htmlFor={name} fontSize={{ sm: 'sm', md: 'md' }} color='text'>
          {label}
        </FormLabel>
      )}
      <InputGroup>
        {leftIcon && (
          <InputLeftElement>
            <Icon as={leftIcon} color='secondaryText' boxSize={6} />
          </InputLeftElement>
        )}
        <Input
          pr={tag ? '10' : '2'}
          px={leftIcon || rightIcon ? '10' : '2'}
          name={name}
          defaultValue={defaultValue}
          formRef={formRef}
          {...rest}
        />
        {defaultValue && rightIcon && (
          <InputRightElement cursor='pointer' onClick={rightIconClick}>
            <Icon
              as={rightIcon}
              boxSize={6}
              color='red.500'
              onClick={rightIconClick}
              _hover={{ color: 'red.400' }}
            />
          </InputRightElement>
        )}
        {tag && (
          <InputRightElement zIndex={0}>
            <Tag p={0} size='lg' borderRadius='sm' color='colorText' bg={currentColor}>
              <Text w='full' textAlign='center'>
                {tag}
              </Text>
            </Tag>
          </InputRightElement>
        )}
      </InputGroup>
    </FormControl>
  );
}

export default React.memo(FormInput);
