import { Flex } from '@chakra-ui/layout';
import { useFormContext } from 'react-hook-form';

import ElementStore from '../components/element/elementStore';
import RecipeFooter from '../components/recipe/recipeFooter';
import RecipeMiddle from '../components/recipe/recipeMiddle';
import { useMainMachine } from '../context/mainMachineProvider';
import { FormInput } from '../lib/ui';

function RawMaterials() {
  const [{ context }] = useMainMachine();
  const { register } = useFormContext();

  return (
    <Flex direction='column'>
      <Flex direction='column' pointerEvents='none'>
        <Flex mt={4} justify='flex-end'>
          <FormInput
            w={['full', '30%']}
            tag='No.'
            fontSize='lg'
            color='red.500'
            cursor='default'
            defaultValue={context.code}
          />
        </Flex>
        <Flex mt={4} align='center' justify='space-between' direction={['column', 'row']}>
          <FormInput
            w={['full', '30%']}
            name='date'
            label='Ημερομηνία'
            formRef={register}
          />
          <FormInput w={['full', '30%']} name='type' label='Τύπος' formRef={register} />
          <FormInput
            w={['full', '30%']}
            name='recipe'
            label='Συνταγή'
            formRef={register}
          />
        </Flex>
        <RecipeMiddle mt={4} />
      </Flex>
      <ElementStore mt={4} />
      <RecipeFooter mt={4} />
    </Flex>
  );
}

export default RawMaterials;
