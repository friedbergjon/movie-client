import {useEffect, useRef, useState} from 'react';
import api from '../../api/axiosConfig';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import ReviewForm from '../reviewForm/ReviewForm';

import React from 'react'

const Reviews = ({ getMovieData, movie }) => {
    const revText = useRef();
    const [reviews, setReviews] = useState([]);
    const params = useParams();
    const movieId = params.movieId;

    useEffect(() => {
        getMovieData(movieId);
    }, [movieId]);

    const addReview = async (e) => {
        e.preventDefault();
        const rev = revText.current;
        console.log("rev", rev);
        try {
            const response = await api.post("/api/v1/reviews", { reviewBody: rev.value, imdbId: movieId });
            const newReview = { body: rev.value };
            setReviews(prevReviews => [...prevReviews, newReview]);
            rev.value = "";
            console.log("Some shit:", newReview);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <Container>
            <Row>
                <Col><h3>Reviews</h3></Col>
            </Row>
            <Row className='mt-2'>
                <Col>
                    <img src={movie?.poster} alt="" />
                </Col>
                <Col>
                    <ReviewForm handleSubmit={addReview} revText={revText} labelText="Write a Review" />
                    <hr />
                    {reviews.map((r, index) => (
                        <div key={index}>
                            <Row>
                                <Col>{r.body}</Col>
                            </Row>
                            <Row>
                                <Col>
                                    <hr />
                                </Col>
                            </Row>
                        </div>
                    ))}
                </Col>
            </Row>
            <Row>
                <Col>
                    <hr />
                </Col>
            </Row>
        </Container>
    );
}

export default Reviews;