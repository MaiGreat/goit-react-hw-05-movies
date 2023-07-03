import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRewiewsMovies } from "components/service/API";

const Reviews = () => {
    const { id } = useParams();
    const [reviews, setReviews] = useState(null);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const reviewsMovies = await getRewiewsMovies(id);
                setReviews(reviewsMovies.results);
                console.log(reviewsMovies.results);
            } catch (error) {
                console.log('Error fetching movie reviews:', error);
            }
        };

        fetchReviews();
    }, [id]);

    if (!reviews) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {reviews.length === 0 ? (
                <h3>No Reviews.</h3>
            ) : (
                <div>
                    {reviews.map(({ id, author, content }) => (
                        <div key={id}>
                            <p>
                                <span>Author:</span> {author}
                            </p>
                            <p>{content}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Reviews;
