import React from 'react';
import Profile from '../imgs/profile.jpeg';
import ReactImage from '../imgs/react_snapshot.jpg';
import FutureMe from '../imgs/future_me.jpg';
import CardList from './CardList';
import CardText from './CardText';
import './styles/Main.css';

function Main() {
  const completedSubjects = [
    'HTML', 'CSS', 'JavaScript',
    'Flex CSS', 'JS ES6', 'Jest',
    'Stateless React', 'Stateful React', 'Conditional Rendering',
    'Dynamic Rendering', 'React CRUD', 'Agile Development',
  ];

  const remainingSubjects = [
    'React Redux', 'React Hooks', 'Context API',
    'SQL', 'MongoDB', 'Node.js',
    'Rest and Restful Architeture', 'Deployment', 'Computer Science',
  ];

  return (
    <main>
      <div className="container">
        <div className="cards-container">
          <CardList
            title="What I learned so far:"
            profile={ReactImage}
            info={completedSubjects}
          />
          <CardText
            title="Manoel de Souza Rocha Neto"
            profile={Profile}
            info={'I\'m a web developer student who loves to code and create beautiful designs. I also love astronomy, exercising, gaming and martial arts. At the moment, I\'m studying at Trybe to improve my knowledge around the latest technologies to be better to contribute in the IT market. Be sure to checkout my GitHub and LinkedIn!'}
          />
          <CardList
            title="What I learned so far:"
            profile={FutureMe}
            info={remainingSubjects}
          />
        </div>
      </div>
    </main>
  );
}

export default Main;
