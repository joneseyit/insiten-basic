import React from "react";
import { Card } from "semantic-ui-react";
import CompanyCard from "./CompanyCard";
import { connect } from 'react-redux'


// const showCompanies = ( ( props.searchTerm !== ''  && props.searchResults ) || props.sortCompanies) || props.companies


const CompanyList = (props) => {

  return (
    <div>
      <Card.Group ui centered itemsPerRow={6}>          
        {props.companies.map(company => (
          <CompanyCard
            key = {company.id}
            company={company}
            handleEditClick={props.handleEditClick}
          />
        ))}
      </Card.Group>  
    </div>
  );
}

const mapStateToProps = ({ companies, searchResults, sortedCompanies, searchTerm, showSortedList }) => {
  return { 
    companies: companies
  }
}

export default connect(mapStateToProps)(CompanyList);
