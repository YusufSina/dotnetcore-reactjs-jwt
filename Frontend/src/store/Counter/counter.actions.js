import { INCREMENT, DECREMENT } from './counter.types';

export function increaseCounter() {
  return {
    type: INCREMENT,
  };
}

export function decreaseCounter() {
  return {
    type: DECREMENT,
  };
}
