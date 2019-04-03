import React, { Component } from "react";
import CompanyList from "../components/CompanyList";
import { SEEDS } from "../seeds";
import EditForm from "../components/EditForm";
import CreateCompany from "../components/CreateCompany";
import { connect } from 'react-redux'
import { addCompanies } from '../redux/actions'
import { Segment, Container } from 'semantic-ui-react'


class CompanyContainer extends Component {
  state = {
    showEditForm: false,
    editCompany: null,
    sortedCompanies: [],
    showSortedCo: false
  };

  componentDidMount() {
    this.props.dispatch(addCompanies(SEEDS))
  }

  handleEditClick = id => {
    // leaf node is CompanyCard via CompanyList
    let editCompany = this.props.companies.find(
      company => company.id === id
    );
    this.setState({ editCompany: editCompany });
    this.setState({ showEditForm: !this.state.showEditForm });
    
  };

  handleEditSubmit = (company) => {
    // passed down to editForm
    this.setState({ showEditForm: false })
    const updatedCompanies = this.props.companies.map( c => {
        if(c.id === company.id){
            return Object.assign( {}, company)
        } else {
            return c
        }
    })
    this.props.dispatch(addCompanies(updatedCompanies))
  }

  render() {
    return (
      <div>
        <Container>
          <Segment>
              <div style={{padding: '15px'}}>
              <CreateCompany />
              </div>
              {this.state.showEditForm ? (
                <Segment>
                  <EditForm
                    company={this.state.editCompany}
                    handleEditSubmit={this.handleEditSubmit}
                  />
                </Segment>
              ) : null}
            </Segment>

            <CompanyList
              handleEditClick={this.handleEditClick}
            />
          </Container>
      </div>
    );
  }
}

const mapStateToProps = ({companies}) => {
  return { 
    companies: companies
  }
}

export default connect(mapStateToProps)(CompanyContainer);
