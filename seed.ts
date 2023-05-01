import {Prisma, PrismaClient} from "@prisma/client"

const client = new PrismaClient();

const getuser = ():Prisma.userCreateInput[]=>
[
     {
        user_id:"10011",     
        username:"Mahesh",
        mail_id:"maheshfake@gmail.com",
        ph_no:"9590627265",        
        address:"#123, tilaknagar, Bangalore 560029",       
        address_id:"123",
        password:"whatthehell12",
        profile_image:"png",
    }

];
[
    {
       user_id:"10012",     
       username:"Suresh",
       mail_id:"sureshfake@gmail.com",
       ph_no:"9590745665",        
       address:"#13, rtnagar, Bangalore 560029",       
       address_id:"456",
       password:"abcdefg123",
       profile_image:"png",
   }

];
[
    {
       user_id:"10013",     
       username:"Rakesh",
       mail_id:"rakeshfake@gmail.com",
       ph_no:"8363427265",        
       address:"#101, shubamnagar, Bangalore 560019",       
       address_id:"789",
       password:"789654321",
       profile_image:"png",
   }

];

[
    {
       user_id:"10014",     
       username:"Abhishek",
       mail_id:"abhishekgouda@gmail.com",
       ph_no:"8541517265",        
       address:"#123, tilaknagar, Bangalore 560029",       
       address_id:"123",
       password:"wdhvbivbe134",
       profile_image:"png",
   }

];

[
    {
       user_id:"10015",     
       username:"Mudassir Ahmed I Torgal",
       mail_id:"artbymait786@gmail.com",
       ph_no:"7499434767",        
       address:"#123, kumarswamy layout, Bangalore 560029",       
       address_id:"786863",
       password:"artbymait@123",
       profile_image:"png",
   }

];