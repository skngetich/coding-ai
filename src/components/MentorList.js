import React, { Component } from "react";
import { Link } from "react-router-dom";
import Heart from "./Heart";
import ReactImageFallback from "react-image-fallback";

import loader from '../assets/loader.gif';
import mentorImage from '../assets/mentor-default.svg';

class MentorList extends Component {
  render() {
    return (
      <div className="col-sm-4 ">
        <Link
          to={{ pathname: `/mentor/profile/${this.props.data.id}`, state: { id: this.props.data } }}
          className="card"
        >
         
          <div className="text-center">
        
            
            <ReactImageFallback
                    src={this.props.data.image}
                    fallbackImage={mentorImage}
                    initialImage={loader}
                    alt={this.props.data.name}
                    className="img-thumbnail img-fluid rounded-circle thumbnail" />
            
          </div>

          <div className="content-card">
            <h3>{this.props.data.name}</h3>
            <p className="tags">{this.props.data.technology}</p>
            <div className="bottom-info">
              <p>{this.props.data.country}</p>
              <Heart {...this.props.data} />
            </div>
          </div>
        </Link>
      </div>
    );
  }
}
export default MentorList;
