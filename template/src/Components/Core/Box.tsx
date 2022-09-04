import styled from '@emotion/native';
import {
  color,
  compose,
  flex,
  flexbox,
  flexDirection,
  flexGrow,
  justifyContent,
  layout,
  space,
  alignItems,
  typography,
  border,
  backgroundImage,
  position,
  backgroundPosition,
  backgroundSize,
  system,
  boxShadow,
  background,
} from 'styled-system';
import {
  transform,
  transition,
  transformOrigin,
  cursor,
} from './system/system';
import { BoxProps } from './types';

export const Box = styled.View<BoxProps>(
  {
    minWidth: 0,
  },
  compose(
    color,
    backgroundImage,
    border,
    layout,
    space,
    flex,
    flexbox,
    flexDirection,
    flexGrow,
    justifyContent,
    alignItems,
    typography,
    position,
    backgroundPosition,
    backgroundSize,
    boxShadow,
    transition,
    transform,
    transformOrigin,
    background,
    cursor,
  ),
  system({
    transform: true,
    transition: true,
    transformOrigin: true,
    cursor: true,
  }),
);

export const Flex = styled(Box)({
  display: 'flex',
});

export const Container = styled(Flex)`
  justify-content: ${props => props.justifyContent || 'center'};
  align-items: ${props => props.alignItems || 'center'};
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
`;
