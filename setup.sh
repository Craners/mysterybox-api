docker build -t amir/mysterybox-api .
docker images
docker run -p 3000:3000 -d amir/mysterybox-api