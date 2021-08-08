import React from 'react';
import PropTypes from 'prop-types';

function CardText(props) {
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
          <div className="text">
            <p>{info}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

CardText.propTypes = {
  title: PropTypes.string.isRequired,
  profile: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
};

export default CardText;
