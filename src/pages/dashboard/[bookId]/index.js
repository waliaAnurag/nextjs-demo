import React, { useEffect, useState } from 'react'
import dashboardStyles from "../../../styles/dashboard.module.css";
import pageStyles from "../../../styles/page.module.css";
import Image from 'next/image'
import { getTrendingBooksData, getBookReview } from "@/helpers/api-utils";
import ReviewSection from '@/component/reviewSection';

function BookInformation(props) {
 
  const { bookData, bookId, reviewList } = props;
  const { title, authors, description, image, subtitle, publishers } = bookData
  const [bookReview,setBookReview] = useState([])
  const [reviewText,setReviewText] = useState()
  useEffect(() => {
    (async () => {
      try {
        // await async "fetchBooks()" function
        const books = await getBookReview(bookId);
        
        setBookReview(books);
      } catch (err) {
        console.log('Error occured when fetching books');
      }
    })();
  }, []);

  function handleInput(e){
    setReviewText(e.target.value)
  }
  function postreview(e) {
    e.preventDefault();
    console.log(e)
    const requestBody = {
      bookReview: reviewText
    }
   
    fetch(`/api/review/${bookId}`, {
      method: 'PUT',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => res.json()).then((data) => {
      let tempBookReview = [...bookReview];
      
      tempBookReview.push(data.review)
      setBookReview(tempBookReview)
    });
  }
  return (
    <center >
      <div className={dashboardStyles.bookDetailContainer}>
        <div>
          <Image
            src={image}
            width={350}
            height={500}
            style={{ borderRadius: "5px" }}
            alt="cover image"
          />
        </div>
        <div>
          <h1>{`${title} by ${authors}`}</h1>
        </div>
        <div>
          <h3>{`${subtitle ? subtitle : publishers}`}</h3>
        </div>
        <div className={dashboardStyles.bookDescription}>
          {description}
        </div>
        <div>

        </div>
        <div className={dashboardStyles.reviewInformation}>
          <textarea type="text" placeholder='Add your Book review here' onChange={handleInput} />
          <div className={dashboardStyles.buttonpos}>
            <button type='button' className={`${pageStyles["btn"]} ${dashboardStyles["btnCustomStyles"]}`} onClick={postreview}>Add your review</button>
          </div>
        </div>
        <div className={dashboardStyles.reviewHeading}>Customer Book Reviews</div>
        <div className={dashboardStyles.reviewSection}>
          <>
          
          {bookReview && bookReview.map((item, index) => {
            return (
              <ReviewSection key={index} bookId={item.id} review={item.review} reviewer={item.name} reviewDate={item.date} />
            )
          })}
          </>
        </div>
      </div>

    </center>
  )
}

export default BookInformation

export async function getServerSideProps(context) {
  //revalidate doesnt make sense for getServerSideProps
  const { params } = context;
  try {

    let data;

    data = await getTrendingBooksData(params.bookId);

    if (data) {

      return {
        props: {
          bookData: data,
          bookId: params.bookId
        }
      }
    } else {
      return {
        notFound: true
      }
    }
  } catch (e) {
    console.log(e);
    return {
      notFound: true
    };
  }

}