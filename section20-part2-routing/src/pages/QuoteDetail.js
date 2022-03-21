import { Fragment } from "react";
import { useParams, Route } from "react-router-dom";
import Comments from "../components/comments/Comments";

const DUMMY_QUOTES = [
  { id: "q1", author: "Eren Jeager", text: "Simp for no one!" },
  { id: "q2", author: "Vinsmoke Sanji", text: "Keep the simp gang strong!" },
  { id: "q3", author: "Maidenless Tarnish", text: "I'm the Elden Lord!" },
  { id: "q4", author: "Saskue Uchiha", text: "I will become Hokage, no cap!" },
];

const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);
  return (
    <Fragment>
      <h1>Quote Detail Page</h1>
      <p>{params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
