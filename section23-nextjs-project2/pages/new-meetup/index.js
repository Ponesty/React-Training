// our-domain.com/new-meetup

import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const addMeetupHandler = async (enteredMeetupData) => {
    const response = await fetch();
  };
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetupPage;
