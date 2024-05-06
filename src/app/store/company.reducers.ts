

import {createReducer, on} from '@ngrx/store';
import { updateCompanyData } from './company.actions';

export const initialState = {
  companyDetails: []
}

export const companyUpdateReducer = createReducer(
  initialState,
  on(updateCompanyData, (state: any, {item}) => {
    return {...state, companyDetails: [item]}
  })
)