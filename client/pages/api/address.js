import {mongooseConnect} from "@/lib/mongoose";
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import {Address} from "@/models/Address";

export default async function handle(req, res) {
  await mongooseConnect();
  const {user} = await getServerSession(req, res, authOptions);
  res.json(user);
  // const address = await Address.findOne({userEmail:user.email});
  // if (address) {
  //   res.json(await Address.findByIdAndUpdate(address._id, req.body));
  // } else {
  //   res.json(await Address.create({userEmail:user.email, ...req.body}));
  // }
  if (req.method === 'PUT') {
    const address = await Address.findOne({userEmail:user.email});
    if (address) {
      res.json(await Address.findByIdAndUpdate(address._id, req.body));
    } else {
      res.json(await Address.create({userEmail:user.email, ...req.body}));
    }
  }
  if (req.method === 'GET') {
    const address = await Address.findOne({userEmail: user.email}).select('-_id -__v').lean(); // Lựa chọn tất cả các trường ngoại trừ _id và __v
    res.json(address);
}

}