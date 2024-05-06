import {createAction, props} from '@ngrx/store';
import { CompanyList } from '../model/company';

export const updateCompanyData = createAction('[item] company details', props<{
    item: CompanyList
}>());




