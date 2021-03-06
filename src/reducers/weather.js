import { WEATHER_INFO_SETTING } from '../actions/actionTypes';

const initialState = {
  id: 0,
  temperature: 0
};

const weather = (state = initialState, action) => {
  const {
    type,
    temperature,
    weather
  } = action;

  switch (type) {
    case WEATHER_INFO_SETTING:
      const { id } = weather[0];
      return { id, temperature };
    default:
      return state;
  }
};

export default weather;
