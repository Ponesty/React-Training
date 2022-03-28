import { MongoClient } from "mongodb";
import mondbLink from "../../components/link/mon";

// /api/new-meetup
// POSt /api/new-meetup

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    const { title, image, address, description } = data;
    const client = await MongoClient.connect(mondbLink);
  }
};

export default handler;
