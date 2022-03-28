import { MongoClient } from "mongodb";
import mondbLink from "../../components/link/mon";

// /api/new-meetup
// POSt /api/new-meetup

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(mondbLink);
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    meetupsCollection.insertOne({ data });
  }
};

export default handler;
