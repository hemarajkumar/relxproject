import { createSelector  } from "@ngrx/store";
import { CompanyList } from '../model/company';

export const selectState = (state: CompanyList) => state;

export const selectStateData = createSelector(
  selectState,
  (state) => state
)
