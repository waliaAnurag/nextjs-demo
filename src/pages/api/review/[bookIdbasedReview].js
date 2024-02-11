const { connectDataBase,insertDocument,getAllDocuments } = require("@/helpers/db-utils");

async function handler(req,res){

    let client;
    let bookReviewData;
    
    if(req.method === 'PUT'){
     
           
        const bookId = req.query.bookIdbasedReview;
        const userName = 'Anurag';
        const bookReview = req.body.bookReview;
        const requestObject = {
            date : new Date().toISOString(),
            id : bookId,
            name : userName,
            review : bookReview
        }

        try{
            client = await connectDataBase();
         
        }catch(error){
            console.log(error)
            res.status(500).json({message:'error occurred while posting your review',error:error});
          
            return
        }

        try{
          //Insertion
            await insertDocument(client,"bookReview",requestObject);
            client.close();
        }catch(error){
            res.status(500).json({message:'Insert into DB failed !',error:error});
            client.close();
            return;
        }
        res.status(201).json({message : 'Success !', review : requestObject})
    }
    if(req.method === 'GET'){        
      
        try{
            client = await connectDataBase();
         
        }catch(error){
            console.log("error whiule connecting to DB",error)
            res.status(500).json({message:'error occurred while posting your review',error:error});
          
            return
        }

        try{
          //Insertion
          bookReviewData = await getAllDocuments(client,"bookReview",{_id:-1});
            client.close();
        }catch(error){
            res.status(500).json({message:'Fetch from DB failed !',error:error});
            client.close();
            return;
        }
        res.status(201).json({message : 'Success !', review : bookReviewData})
    }
}

export default handler;