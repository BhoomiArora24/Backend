//server ko start krna
const app = require("./src/app")




app.listen(3000, () => {
    console.log(`Server is running on port 3000`)// jaise hi server start hua ye callback function apne ap chl jaega
})