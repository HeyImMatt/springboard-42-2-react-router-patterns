import React from 'react';

export default class DogList extends React.Component {
  render() {
    return (
      <div className='DogList'>
        <ul>
          {this.props.dogs.map((dog, idx) => (<a href={`dogs/${dog.name}`} key={idx}><li>{dog.name}</li></a>) )}
        </ul>
      </div>
    )
  }
}