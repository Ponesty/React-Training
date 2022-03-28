import { MongoClient } from "mongodb";

import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First Meetup",
    image:
      "https://globalgrasshopper.com/wp-content/uploads/2020/03/most-beautiful-places-to-visit-in-Japan-1000x667.jpg",
    address: "Address 001, 12345 A Town",
    description: "First meetup!",
  },
  {
    id: "m2",
    title: "Second Meetup",
    image:
      "https://www.planetware.com/wpimages/2019/09/top-places-to-visit-in-the-world-machu-picchu-peru.jpg",
    address: "Address 002, 23456 B Town",
    description: "Second meetup!",
  },
  {
    id: "m3",
    title: "Third Meetup",
    image:
      "https://static.boredpanda.com/blog/wp-content/uuuploads/unbelievable-places/unbelievable-places-8.jpg",
    address: "Address 003, 34567 C Town",
    description: "Third meetup!",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export const getStaticProps = async () => {
  // fetch data from an API

  const client = await MongoClient.connect(mondbLink());
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  return {
    props: {
      meetups: meetups,
    },
    revalidate: 1,
  };
};

// export const getServerSideProps = async (context) => {
//   const req = context.req;
//   const res = context.res;

//   // fetch data from an API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// };

export default HomePage;
