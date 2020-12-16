import { mode } from './../tools';

const baseStyle = (props: Record<string, any>) => {
  return {
    color: mode('gray.800', 'white')(props),
  };
};
const defaultProps = {
  fontWeight: 300,
};

export default { baseStyle, defaultProps };
