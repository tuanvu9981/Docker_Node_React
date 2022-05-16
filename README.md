## A small todo app to learn Docker.

### Create Dockerfile for backend (Nodejs)
* [Nodejs Docker](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)

### Create Dockerfile for frontend (Nodejs)
* [ReactJS Docker]()

### Remove all images and containers:
* [Remove containers & images](https://stackoverflow.com/questions/44785585/docker-how-to-delete-all-local-docker-images)

### Re-create images and containers: 
```docker-compose up --build```

### Running file in backend
* Running with mongoAtlas (CloudDB): ***app.js***
* Running with mongoDB image on local: ***app_server.js***

### References: 
* [docker-nodejs-mongo-process.env](https://github.com/bezkoder/docker-compose-nodejs-mongodb/)
* [docker run -it -p 8080:8080 container_name](https://stackoverflow.com/questions/36813690/connection-refused-on-docker-container)

### Note
1. Khi đã chạy lệnh ```RUN npm install``` trong Dockerfile rồi nhưng vẫn gặp lỗi not found module "express", thì vấn đề là như sau: 
```
volumes: 
	- ./backend:　/app/backend1
```
Copy data từ **folder thực backend sang folder ảo /app/backend1**, dẫn đến việc khi chưa cài node_modules thì **folder ảo docker bị ghi đè, dẫn đến mất hẳn folder node_modules** mà lệnh "RUN npm i" trong Dockerfile vừa chạy --> thiếu module "express". Bỏ dòng code volumes đi thì chạy thành công 

2. Khởi tạo & chạy 1 image để tạo ra container với cổng setup localhost 
```
docker run -it -p <real_port>:<docker_port> <image_name>
```
Vd: 
```
docker run -it -p 3000:3000 docker_node_react_frontend
```
--> vào máy chủ, localhost cổng 3000, bây giờ sẽ có thể xem được code chạy như thế nào 

3. Vào trong 1 container mongo_db để kiểm tra dữ liệu 
```
docker-compose exec <mongo_host_name> bash
```
+ **<mongo_host_name>** ở đây là tên được đặt trong file docker-compose.yml, mà chứa image docker 
* Khi giao diện hiển thị dòng có mongo ... #, tiến hành nhập 
```
mongo -u <username> -p <password>
``` 

+ Nếu mật khẩu đúng, sẽ có thể vào bên trong container, thực hiện các thao tác insert, update trực tiếp ... 

4. Để xác thực người dùng (authentication) trong nodejs + mongoDB cần sử dụng đến URI theo khuôn dạng sau
```
mongodb://<username>:<password>@<mongo_host_name>:<port>
```

+ **<mongo_host_name>** ở đây là tên được đặt trong file docker-compose.yml, mà chứa image docker 
VD: 
```
mongodb://tuanvu:123456@mongo_db:27017
```

* docker mongoDB tạo ra sẵn 1 database tên là "admin", nên là khi connect với URI kiểu ```mongodb://tuanvu:123456@mongo_db:27017/todo```, sẽ bị lỗi do docker mongo không hiểu được rằng todo là cơ sở dữ liệu gì (authentication không khớp, không cho CRUD)

5. Để tạo ra 1 container mới từ image đã có sẵn, xài 
```
docker run <port_real>:<port_docker> <image_name>
```

6. Để chạy 1 container đã tồn tại nhưng hiện đang bị tắt 
```
docker start <container-name/ID>
docker exec -it <container_id_or_name> bash
```

7. Để dừng 1 container đang chạy 
```
docker stop <container-name/ID>
```

