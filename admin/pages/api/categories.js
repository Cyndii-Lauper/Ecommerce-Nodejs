import {Category} from "@/models/Category";
import {mongooseConnect} from "@/lib/mongoose";
import {getServerSession} from "next-auth";
import {authOptions, isAdminRequest} from "@/pages/api/auth/[...nextauth]";

export default async function handle(req, res) {
  const {method} = req;
  await mongooseConnect();
  await isAdminRequest(req,res);

  if (method === 'GET') {
    res.json(await Category.find().populate());
  }

  if (method === 'POST') {
    const {name,properties} = req.body;
    const categoryDoc = await Category.create({
      name,
      properties,
    });
    res.json(categoryDoc);
  }

  if (method === 'PUT') {
    const {name,properties,_id} = req.body;
    const categoryDoc = await Category.updateOne({_id},{
      name,
      properties,
    });
    res.json(categoryDoc);
  }

  if (method === 'DELETE') {
    const {_id} = req.query;
    await Category.deleteOne({_id});
    res.json('ok');
  }
}