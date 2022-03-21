import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "Eren Jeager", text: "Simp for no one!" },
  { id: "q1", author: "Vinsmoke Sanji", text: "Keep the simp gang strong!" },
  { id: "q1", author: "Maidenless Tarnish", text: "I'm the Elden Lord!" },
  { id: "q1", author: "Saskue Uchiha", text: "I will become Hokage, no cap!" },
];

const AllQuotes = () => {
  return <QuoteList />;
};

export default AllQuotes;
