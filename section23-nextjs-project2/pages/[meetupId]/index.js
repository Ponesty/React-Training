import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <MeetupDetail
      image="https://globalgrasshopper.com/wp-content/uploads/2020/03/most-beautiful-places-to-visit-in-Japan-1000x667.jpg"
      title="First Meetup"
      address="Address 001, 12345 A Town"
      description="First meetup!"
    />
  );
};

export const getStaticProps = async (context) => {
  // fetch data from a single meetup
  return {
    props: {
      meetupData: {
        image:
          "https://globalgrasshopper.com/wp-content/uploads/2020/03/most-beautiful-places-to-visit-in-Japan-1000x667.jpg",
        id: "m1",
        title: "First Meetup",
        address: "Address 001, 12345 A Town",
        description: "First meetup!",
      },
    },
  };
};

export default MeetupDetails;
