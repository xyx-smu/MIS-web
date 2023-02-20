ng build --prod
docker build --platform linux/amd64 -t registry.cn-hangzhou.aliyuncs.com/space_smu/mis-web .
docker login --username=yxxxxie registry.cn-hangzhou.aliyuncs.com
docker push registry.cn-hangzhou.aliyuncs.com/space_smu/mis-web