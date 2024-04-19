## Về phía folder client 

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

Cụ thể như trong hình dưới đây: 
<img width="1800" alt="Screenshot 2024-04-19 at 13 11 09" src="https://github.com/Cyndii-Lauper/Ecommerce-Nodejs/assets/72398527/0a43153f-08d5-4264-b578-258ad08fc643">

MongoDB có thể trực tiếp sử dụng đường dẫn cho trong code

- Tiếp theo, Chạy server:
```bash
npm run dev -p 4000
# or
yarn dev -p 4000
# or
bun dev -p 4000
```

## Về phía folder admin

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
GOOGLE_ID=""
GOOGLE_SECRET=""

MONGODB_URI="mongodb+srv://elevenine00:21112003@ecommerce.paklsaa.mongodb.net/?retryWrites=true&w=majority&appName=ecommerce"

// Tạo key S3 bucket trong AWS để làm chức năng lưu ảnh sản phẩm
S3_ACCESS_KEY="AKIA6NZQGTTTVFMU5GCL"
S3_SECRET_ACCESS_KEY="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"
```
Cách tạo key API có thể xem video sau để tham khảo: https://www.youtube.com/watch?v=OKMgyF5ezFs

Cụ thể như trong hình sau:
<img width="1800" alt="Screenshot 2024-04-19 at 13 31 37" src="https://github.com/Cyndii-Lauper/Ecommerce-Nodejs/assets/72398527/d1a519a1-aba3-476f-9ee7-aab84631e5bd">

Có thể sử dụng trực tiếp key S3 bucket đã cho sẵn trong code. 

Hoặc là cách tạo key S3 bucket trong AWS để làm chức năng lưu ảnh sản phẩm: https://www.youtube.com/watch?v=9gtOkz4Ybdg

MongoDB có thể trực tiếp sử dụng đường dẫn cho trong code

- Tiếp theo, Là cấp quyền admin cho user mới:

Trong theo đường dẫn admin -> pages -> api -> auth -> [...nextauth].js

<img width="909" alt="Screenshot 2024-04-19 at 14 06 28" src="https://github.com/Cyndii-Lauper/Ecommerce-Nodejs/assets/72398527/6b7c0820-64dd-4412-ab27-db7f385c86d3">

Hãy sửa đoạn   

```bash
const defaultAdminEmail = 'email of the admin user here';
 ```
bằng email bạn muốn cấp quyền admin để đăng nhập vào hệ thống
- Cuối cùng, chạy chương trình
```bash
npm run dev
# or
yarn dev
# or
bun dev
```

