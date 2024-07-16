import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
    .prompt([
        {
            type: "input",
            name: "url",
            message: "Enter url",
        }
    ])
    .then((answers) => {
        try{
            var qr_img = qr.image(answers.url, {type: "png"});
            qr_img.pipe(fs.createWriteStream("qr.png"));
            fs.writeFile("your_url.txt", answers.url, (err) => {
                if (err) throw err;
                console.log("Your file has been saved!!!");
            });
        }
        catch(err){
            console.error("Error generating qr code.", err);
        }
    })
    .catch((error) => {
        console.error("Error generating qr code");
    })
