const ADD_COMPANIES = 'ADD_COMPANIES'
const DELETE_COMPANY = 'DELETE_COMPANY'
const ADD_COMPANY = 'ADD_COMPANY'
const ADD_SEARCH_RESULTS = 'ADD_SEARCH_RESULTS'
const SORTED_COMPANIES = 'SORTED_COMPANIES'
const UPDATE_SEARCH_TERM = 'UPDATE_SEARCH_TERM'
const SHOW_SORTED_LIST = 'SHOW_SORTED_LIST'

export function addCompanies(companies){
   return { type: ADD_COMPANIES, companies: companies }
}

export function deleteCompany(company){
   return { type: DELETE_COMPANY, company: company }
}

export function addCompany(company){
   return { type: ADD_COMPANY, company: company}
}

export function addSearchResults(companies){
   return { type: ADD_SEARCH_RESULTS, companies: companies}
}

export function sortedCompanies(companies){
   return { type: SORTED_COMPANIES, companies: companies}
}

export function updateSearchTerm(term){
   return { type: UPDATE_SEARCH_TERM, term: term}
}

export function toggleSortedList(toggle){
   return { type: SHOW_SORTED_LIST, toggle: toggle}
}