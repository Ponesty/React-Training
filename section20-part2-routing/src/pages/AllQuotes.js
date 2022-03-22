import QuoteList from "../components/quotes/QuoteList";

import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";

const DUMMY_QUOTES = [
  { id: "q1", author: "Eren Jeager", text: "Simp for no one!" },
  { id: "q2", author: "Vinsmoke Sanji", text: "Keep the simp gang strong!" },
  { id: "q3", author: "Maidenless Tarnish", text: "I'm the Elden Lord!" },
  { id: "q4", author: "Saskue Uchiha", text: "I will become Hokage, no cap!" },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
