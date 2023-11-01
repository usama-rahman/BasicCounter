import React, { Component } from 'react'

export default class Counter extends Component {
  state = {
    count : 0,
    tags : ['tag1', 'tag2', 'tag3' ]
  }

//   constractor() {
//     super()
//     this.handelIncrement = this.handelIncrement.bind(this)
//   }

  handelIncrement = () => {
    this.setState({ count: this.state.count + 1 })
  }
  
  renderTags(){
    if(this.state.tags.length === 0) return <p> There is no text</p>

    return <ul>
    {this.state.tags.map(tag => <li key={tag}>{tag}</li> )}
        </ul>
  }

    render() {
    return (
    <>

    <span className={ this.getBadgeclasses() }>
        {this.formatCount()}
    </span>

    <button 
        onClick={  this.handelIncrement} 
        className='btn btn-secondary btn-sm'
    >
        Increment
    </button>

    <div>{this.renderTags()}</div>
    

    </>
    )
  }



  getBadgeclasses () {
    let classes = "badge m-2 badge-"
    classes += this.state.count === 0 ? 'warning' : 'primary'
    return classes;
  }

  formatCount () {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  }



}
