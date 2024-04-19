<img width="1800" alt="Screenshot 2024-04-19 at 13 11 09" src="https://github.com/Cyndii-Lauper/Ecommerce-Nodejs/assets/72398527/0a43153f-08d5-4264-b578-258ad08fc643">## Getting Started
Về phía folder client 

- Thứ nhất, cài đặt môi trường:
```bash
npm install
# or
yarn install
# or
bun install
```
- Thứ hai, trong file .env ở folder client
```bash
// Tạo key API Google OAuth Credentials để chức năng đăng nhập google hoạt động
GOOGLE_FRONT_ID="create Google OAuth Credentials (Client ID and Secret)"
GOOGLE_FRONT_SECRET="create Google OAuth Credentials (Client ID and Secret)"

MONGODB_URI="mongodb+srv://elevenine00:21112003@ecommerce.paklsaa.mongodb.net/?retryWrites=true&w=majority&appName=ecommerce"

PUBLIC_URL="http://localhost:4000"
NEXT_PUBLIC_URL="http://localhost:4000"
NEXTAUTH_URL="http://localhost:4000"
```
Cách tạo key API có thể xem video sau để tham khảo: https://www.youtube.com/watch?v=OKMgyF5ezFs


First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

