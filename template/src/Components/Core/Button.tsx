import { theme } from '@/Theme/themes/theme';
import styled from '@emotion/native';
import {
  color,
  compose,
  layout,
  space,
  typography,
  variant,
  border,
  zIndex,
  position,
} from 'styled-system';
import { ButtonProps } from './types';

export const Button = styled.TouchableOpacity(
  (props: ButtonProps) => `
padding: ${String(props.p || theme.spaces[2])};
${compose(color, layout, space, typography, variant, border, zIndex, position)}
`,
);
