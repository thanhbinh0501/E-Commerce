# E-Commerce
## ❯ Technical:
- Backend: NestJS
- Database: Mysql
- Catching: Redis
- Storage: AWS S3

## ❯ Requirements:
### Backend setup
- [ ] Build source NestJS
- [ ] Connect MySQL (using TypeORM)
- [ ] Implement authentication, authorization (using PassportJS)

### Create API
#### Authentication
- [ ] Login (email, password)
- [ ] Register new user (email, password, phone number,...)
- [ ] Get list user (Admin role only)
- [ ] Get user detail by ID (Admin role only)
- [ ] Update user by ID (Admin role only)
- [ ] Delete user by ID (Admin role only)
- [ ] User profile (/me)
- [ ] Update user by itself
#### Category
- [ ] Create category (Iphone, Samsung, Xiaomi,...)
- [ ] Get list category
- [ ] Get detail category by ID
- [ ] Update category (name) by ID
- [ ] Delete category by ID
#### Product
- [ ] Create product (name, category, variable, stock, price,...) => add product images later.
- [ ] Get list product
- [ ] Get detail product by ID
- [ ] Update product by ID
- [ ] Delete product by ID
#### Add to cart
- [ ] Create cart by user ID
- [ ] Get detail cart by user ID
- [ ] Update cart by ID (add product, remove product,...)
#### Order
- [ ] Create order by user cart info
- [ ] Get list order
- [ ] Get detail order by ID
### Image
- [ ] Setup AWS S3 storage
- [ ] Create API to get presigned URL to upload image
- [ ] Update API create/update product to save product images
- [ ] Update API get list product/detail product to return presigned URL of product images
#### Payment
- [ ] Implement payment for order
#### Voucher
- [ ] Create voucher
- [ ] Get list voucher
- [ ] Get detail voucher by ID
- [ ] Update voucher by ID
- [ ] Delete voucher by ID
- [ ] Caching voucher stock to secure voucher limitation
