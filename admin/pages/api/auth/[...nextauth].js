import NextAuth, { getServerSession } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb";
import { Admin } from "@/models/Admin";
import { mongooseConnect } from '@/lib/mongoose';

// const adminEmails = ['mt130811@gmail.com'];

async function createDefaultAdmin() {
  mongooseConnect();
  const defaultAdminEmail = 'email of the admin user here';
  const existingAdmin = await Admin.findOne({ email: defaultAdminEmail });
  if (!existingAdmin) {
    const admin = new Admin({ email: defaultAdminEmail });
    await admin.save();
  }
}

async function isAdminEmail(email) {
  mongooseConnect();
  return !!(await Admin.findOne({ email }));
}

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  callbacks: {
    session: async ({ session, token, user }) => {
      await createDefaultAdmin(); 
      const isAdmin = await isAdminEmail(session?.user?.email);
      if (isAdmin) {
        session.user.isAdmin = true;
        return session;
      } else {
        return false; 
      }
    },
  },
};

export default NextAuth(authOptions);

export async function isAdminRequest(req, res) {
  const session = await getServerSession(req, res, authOptions);
  if (!(session?.user?.isAdmin)) {
    res.status(401);
    res.end();
    throw 'not an admin';
  }
}
