import {
  createAction,
  createFeature,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';

interface State {
  wrapper: boolean;
}

const initialState: State = {
  wrapper: true,
};

export const toggleWrapper = createAction('[Wrapper Component] Toggle');

export const wrapperFeature = createFeature({
  name: 'wrapper',
  reducer: createReducer(
    initialState,
    on(toggleWrapper, (state) => ({
      ...state,
      wrapper: false,
    }))
  ),
});

export const {
  name, // feature name
  reducer, // feature reducer
  selectWrapperState, // feature selector
} = wrapperFeature;

export const selectWrapper = createSelector(
  selectWrapperState,
  (state) => state.wrapper
);
