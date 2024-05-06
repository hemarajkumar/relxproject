
export interface CompanyList {
  items?: ItemList;
  company_number?: string;
  address_snippet?: string;
  title?: string;
  description?: string;
  company_status?: string;
  company_type?: string;
  company_incorporated?: string;
}

export interface ItemList {
  [x: string]: any;
  company_number?: string;
  address_snippet?: string;
  title?: string;
  description?: string;
  date_of_creation?: string;
  company_type?: string;
}

