import React, { useContext } from 'react';
import Countdown from 'react-countdown';
import { AuthContext } from '../../context/AuthContext';

const renderer = ({ days, hours, minutes, seconds, completed, props }) => {
  if (completed) {
    return null;
  }

  return (
    <div className="col">
      <div className="card border-none">
        <div
          style={{
            height: '320px',
            backgroundImage: `url(${props.item.imgUrl})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
          className="w-100"
        />

        <div className="card-body">
          <p className="lead display-6 black-color">{props.item.title}</p>
          <div className="d-flex justify-content-between align-item-center">
            <h5>
            {days} days {hours} hr: {minutes} min: {seconds} sec
            </h5>
          </div>
          <i><p className="card-text fw-light">{props.item.desc}</p></i>
          <div className="d-flex justify-content-between align-item-center black-color">
            <div>
              {!props.owner ? (
                <div
                  onClick={() => props.bidAuction()}
                  className="btn btn-outline-secondary"
                >
                  Bid
                </div>
              ) : props.owner.email === props.item.email ? (
                <div
                  onClick={() => props.endAuction(props.item.id)}
                  className="btn btn-outline-secondary mt-3"
                >
                  Cancel Auction
                </div>
              ) : props.owner.email === props.item.curWinner ? (
                <p className="display-6">Winner</p>
              ) : (
                <div
                  onClick={() =>
                    props.bidAuction(props.item.id, props.item.curPrice)
                  }
                  className="btn btn-outline-secondary mt-3"
                >
                  Bid
                </div>
              )}
            </div>
            <p className="display-6">${props.item.curPrice}</p>
          </div>
          {props.item.curWinner ? (<small className="d-flex justify-content-between align-item-center">
              1st place: {props.item.curWinner.replace('@gmail.com', '')}
            </small>) : (<small className="d-flex justify-content-between align-item-center">
              No one made a bid yet, be the first one!
            </small>)}
            <center><small className="text-right"> Auctioned by: {props.item.email}</small></center>
        </div>
      </div>
    </div>
  );
};

export const AuctionCard = ({ item }) => {
  let expiredDate = item.duration;
  const { currentUser, bidAuction, endAuction } = useContext(AuthContext);

  return (
    <Countdown
      owner={currentUser}
      date={expiredDate}
      bidAuction={bidAuction}
      endAuction={endAuction}
      item={item}
      renderer={renderer}
    />
  );
};
