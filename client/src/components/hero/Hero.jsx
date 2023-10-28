import React from "react";
import "../hero/Hero.css";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";

export const Hero = ({ movies }) => {
  const navigate = useNavigate();

  function reviews(movieId) {
    navigate(`/Reviews/${movieId}`);
  }

  return (
    <div className="movie-carousel-container">
      <Carousel>
        {movies.map((item) => {
          return (
            <Paper>
              <div className="movie-card-container">
                <div
                  className="movie-card"
                  style={{ "--img": `url(${item.backdrops[0]})` }}
                >
                  <div className="movie-detail">
                    <div className="movie-poster">
                      <img src={item.poster} alt="" />
                    </div>
                    <div className="movie-title">
                      <h1>{item.title}</h1>
                    </div>

                    <div className="movie-buttons-container">
                      <Link
                        to={`/Trailer/${item.trailerLink.substring(
                          item.trailerLink.length - 11
                        )}`}
                      >
                        <div className="play-button-icon-container">
                          <FontAwesomeIcon
                            className="play-button-icon"
                            icon={faCirclePlay}
                          />
                        </div>
                      </Link>

                      <div className="movie-review-button-container">
                        <Button
                          variant="info"
                          onClick={() => reviews(item.imdbId)}
                        >
                          Reviews
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Paper>
          );
        })}
      </Carousel>
    </div>
  );
};
