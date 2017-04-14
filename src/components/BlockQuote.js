import React from 'react';

class BlockQuote extends React.Component {
  render() {
    return (
      <blockquote>
        <p>
        {this.props.quote.desc}
        {!!this.props.quote.source && <a href={this.props.quote.source} target="_blank">source</a>}
        </p>
      </blockquote>
    )
  }
}

BlockQuote.contextTypes = {

}

export default BlockQuote;
