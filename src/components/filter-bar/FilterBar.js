import React from 'react'
import FilterHeader from './FilterHeader/FilterHeader.js'
import FilterBody from './FilterBody/FilterBody.js'

import './FilterBar.css'

/* A dropdown menu that applies tag-based filters
 * to the displayed project previews. */
class FilterBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showBody: false
    }

    this.display = this.display.bind(this);
    this.hide = this.hide.bind(this);
  }

  /* Display FilterBody. */
  display() {
    this.setState({
      showBody: true,
    })
  }

  /* Hide FilterBody. */
  hide() {
    this.setState({
      showBody: false,
    })
  }

  render() {

    const showBody = this.state.showBody ? 'showBody' : null;

    var body = null;
    if (this.state.showBody) {
      body = (
        /* Dropdown element that allows user to select and apply filters. */
        <FilterBody filters={ this.props.filters }
                    tags={ this.props.tags }
                    showBody={ this.state.showBody }
                    handleFilterAdd={ this.props.handleFilterAdd }
                    handleFilterRemove={ this.props.handleFilterRemove }
                    hide={ this.hide } />
      );
    }

    return (
      <div className={`FilterBar ${showBody}`}>

        {/* Header element displaying which filters, if any, are applied. */}
        <FilterHeader filters={ this.props.filters }
                      display={ this.display } />

        { body }

      </div>
    )
  }

}

export default FilterBar
