import React from 'react';
import PropTypes from 'prop-types';

function CardList(props) {
  const { title, profile, info } = props;
  return (
    <div className="card-item">
      <div className="card-inner">
        <div className="card-top">
          <img src={profile} alt="" />
        </div>
        <div className="card-bottom">
          <div className="title">
            <h3>{title}</h3>
          </div>
          <div className="description">
            <ul>
              {info.map((element) => <li key={element}>{ element }</li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

CardList.propTypes = {
  title: PropTypes.string.isRequired,
  profile: PropTypes.string.isRequired,
  info: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CardList;
