import React, { Component } from 'react';
import Search from '../../components/Search';
import Button from '../../components/Button';
import Table from '../../components/Table';
import Loading from '../../components/Loading';
import {
  DEFAULT_QUERY,
  DEFAULT_PAGE,
  DEFAULT_HPP,

  PATH_BASE,
  PATH_SEARCH,
  PARAM_SEARCH,
  PARAM_PAGE,
  PARAM_HPP,
} from '../../constants';
import './index.css';

const withLoading = (Component) => ({ isLoading, ...rest }) => isLoading ? <Loading /> : <Component { ...rest } />

const updateSearchTopstoriesState = (hits, page) => (prevState) => {
  const { searchKey, results } = prevState;

  const oldHits = results && results[searchKey]
    ? results[searchKey].hits
    : [];

  const updatedHits = [
    ...oldHits,
    ...hits
  ];

  return {
    results: {
      ...results,
      [searchKey]: { hits: updatedHits, page }
    },
    isLoading: false
  };
};

const updateDismissState = (id) => (prevState) => {
  const { searchKey, results } = prevState;
  const { hits, page } = results[searchKey];

  const isNotId = item => item.objectID !== id;
  const updatedHits = hits.filter(isNotId);

  return {
    results: {
      ...results,
      [searchKey]: { hits: updatedHits, page }
    }
  };
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: null,
      searchKey: '',
      searchTerm: DEFAULT_QUERY,
      isLoading: false
    };

    this.needsToSearchTopstories = this.needsToSearchTopstories.bind(this);
    this.setSearchTopstories = this.setSearchTopstories.bind(this);
    this.fetchSearchTopstories = this.fetchSearchTopstories.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }

  componentDidMount() {
    const { searchTerm } = this.state;

    this.setState({ searchKey: searchTerm });
    this.fetchSearchTopstories(searchTerm, DEFAULT_PAGE);  
  }

  setSearchTopstories(result) {
    const { hits, page } = result;

    this.setState(updateSearchTopstoriesState(hits, page));
  }

  needsToSearchTopstories(searchTerm) {
    return !this.state.results[searchTerm];
  }

  fetchSearchTopstories(searchTerm, page) {
    this.setState({ isLoading: true });

    fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`)
      .then(response => response.json())
      .then(result => {
        setTimeout(() => {
          this.setSearchTopstories(result);
        }, 1500); 
      });
  }

  onSearchChange(event) {
    this.setState({
      searchTerm: event.target.value
    });
  }

  onSearchSubmit(event) {
    const { searchTerm } = this.state;
    this.setState({ searchKey: searchTerm });

    if (this.needsToSearchTopstories(searchTerm)) {
      this.fetchSearchTopstories(searchTerm, DEFAULT_PAGE);
    }

    event.preventDefault();
  }

  onDismiss(id) {
    this.setState(updateDismissState(id));
  }

  render() {
    const { searchTerm, results, searchKey, isLoading } = this.state;
    const page = (results && results[searchKey] && results[searchKey].page) || 0;
    const list = (results && results[searchKey] && results[searchKey].hits) || [];
    const ButtonWithLoading = withLoading(Button);    

    return (
      <div className='page'> 
        <div className='interactions'>
          <Search
            value={searchTerm}
            onChange={this.onSearchChange}
            onSubmit={this.onSearchSubmit}
          >
            Search
          </Search>
          </div>
          <Table
            list={list}
            onDismiss={this.onDismiss}
          />
          <div className="interactions">
            <ButtonWithLoading
              isLoading={isLoading}
              onClick={() => this.fetchSearchTopstories(searchKey, page + 1)}
            >
              More
            </ButtonWithLoading>
          </div>
      </div>
    );
  }
}

export default App;
