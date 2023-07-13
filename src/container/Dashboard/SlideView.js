import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px'
}
const slideImages = [
  {
    url: 'https://www.bluepencilpublishers.com/wp-content/uploads/2021/08/book-cover.jpeg',
    caption: 'Slide 1'
  },
  {
    url: 'https://img.freepik.com/premium-vector/education-school-book-cover-page-design-corporate-business-cover-page-annual-reports-poster_235578-222.jpg?w=2000',
    caption: 'Slide 2'
  },
  {
    url: 'https://img.freepik.com/premium-vector/education-book-cover-design-school-book-cover-fashion-cover-page-gym-book-cover-annual-reports_235578-224.jpg?w=2000',
    caption: 'Slide 3'
  },
  {
    url: 'https://i.ytimg.com/vi/XR5D4sAddck/maxresdefault.jpg',
    caption: 'Slide 4'
  },
  {
    url: 'https://picturedensity.com/wp-content/uploads/2019/10/physical-science45.jpg',
    caption: 'Slide 5'
  },
  {
    url: 'https://i.ytimg.com/vi/JGeIMOpYDsY/maxresdefault.jpg',
    caption: 'Slide 6'
  },
];

const SlideView = () => {
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                {/* <span style={spanStyle}>{slideImage.caption}</span> */}
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
};
export default SlideView;