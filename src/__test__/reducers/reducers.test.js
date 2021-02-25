import reducer from './../../reducers/index';
import ProductMock from './../../__mocks__/ProductMock';

describe('Reducers', () => {
  test('Retornar inital State', () => {
    expect(reducer({}, '')).toEqual({});
  });

  test('ADD_TO_CART', () => {
    const initialState = {
      cart: [],
    };
    const payload = ProductMock;
    const action = {
      type: 'ADD_TO_CART',
      payload,
    };
    const expected = {
      cart: [ProductMock],
    };

    expect(reducer(initialState, action)).toEqual(expected);
  });
});
