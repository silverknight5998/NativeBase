import React from 'react';
import Flex from '../../primitives/Flex';
import type { IBreadcrumbItemProps } from './types';

const BreadcrumbItem = (props: IBreadcrumbItemProps) => {
  const { children, isCurrentPage, _text, ...remainingProps } = props;
  return (
    <Flex {...remainingProps}>
      {React.Children.map(children, (child: any, index: number) =>
        React.cloneElement(child, {
          key: `breadcrumb-item-${index}`,
          _text: {
            ..._text, //taken out empty _text prop from props
            fontWeight: isCurrentPage ? 'bold' : undefined,
          },
          ...{
            isUnderlined: false,
          },
          ...remainingProps,
        })
      )}
    </Flex>
  );
};

export default React.memo(BreadcrumbItem);
