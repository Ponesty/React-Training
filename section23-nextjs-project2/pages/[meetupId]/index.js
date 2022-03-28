import { MongoClient } from "mongodb";
import mondbLink from "../../components/link/mon";

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

export const getStaticPaths = async () => {
  const client = await MongoClient.connect(mondbLink());
  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
};

export const getStaticProps = async (context) => {
  // fetch data from a single meetup

  const meetupId = context.params.meetupId;
  console.log(meetupId);
  return {
    props: {
      meetupData: {
        image:
          "https://globalgrasshopper.com/wp-content/uploads/2020/03/most-beautiful-places-to-visit-in-Japan-1000x667.jpg",
        id: meetupId,
        title: "First Meetup",
        address: "Address 001, 12345 A Town",
        description: "First meetup!",
      },
    },
  };
};

export default MeetupDetails;
