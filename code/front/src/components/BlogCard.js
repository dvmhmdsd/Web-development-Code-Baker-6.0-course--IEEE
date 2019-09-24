import React, { Component } from 'react'

export default class BlogCard extends Component {
  render() {
    return (
      <div>
        <div className="card">
                    <div className="card-header">
                        Featured
                    </div>
                    <div className="card-body">
                        <h5 className="card-title"> { this.props.data.title } </h5>
                        <p className="card-text">{ this.props.data.body }</p>
                        <a href="#" className="btn btn-primary">See more</a>
                    </div>
                    </div>
      </div>
    )
  }
}
