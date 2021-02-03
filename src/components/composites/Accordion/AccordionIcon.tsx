import React from 'react';
import Icon from '../../primitives/Icon';
import type { IAccordionIconProps, IAccordionItemContextProps } from './types';
import { AccordionItemContext } from './Context';
import { useThemeProps } from '../../../hooks';

const AccordionIcon = ({ ...props }: IAccordionIconProps) => {
  const { isOpen }: IAccordionItemContextProps = React.useContext(
    AccordionItemContext
  );
  const { ...newProps } = useThemeProps('AccordionIcon', props);
  return (
    <Icon
      name={isOpen ? 'chevron-small-up' : 'chevron-small-down'}
      type="Entypo"
      {...newProps}
    />
  );
};

export default React.memo(AccordionIcon);
