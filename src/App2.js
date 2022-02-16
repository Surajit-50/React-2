import React from "react";
import { useState } from "react";
import { laptop } from "./laptop";
import { tshirt } from "./tshirt";
function App2() {
  const arr = [
    {
      id: 1, 
      img: "https://images-eu.ssl-images-amazon.com/images/I/81s0B6NYXML._AC_UL604_SR604,400_.jpg",
      desc: 'It ends with US: A novel'
      ,cost:'240'
    },
    {
      id: 2,
      img: "https://images-eu.ssl-images-amazon.com/images/I/91PRf2I5gDL._UX300__PJku-sticker-v7,TopRight,0,-50_AC_UL604_SR604,400_.jpg",
      desc: 'The Girl with end less love'
      ,cost:'430'
    },
    {
      id: 3,
      img:'https://images-eu.ssl-images-amazon.com/images/I/71g2ednj0JL._AC_UL604_SR604,400_.jpg',
      desc: 'The psychology of money',
      cost:'345'
    },
    {
      id: 4,
      img: 'https://images-eu.ssl-images-amazon.com/images/I/91bYsX41DVL._AC_UL604_SR604,400_.jpg',
      desc: 'The atomic Habits',
      cost:'567'
    },
    {
      id: 5,
      img: 'https://images-eu.ssl-images-amazon.com/images/I/61fxhU8lc+L._AC_UL604_SR604,400_.jpg',
      desc: 'The Fifty Nine percent',
      cost:'345'
    },
    {
      id: 6,
      img: 'https://images-eu.ssl-images-amazon.com/images/I/81bsw6fnUiL._AC_UL604_SR604,400_.jpg',
      desc: 'Rich Dad poor Dad',
      cost:'345'
    },
    {
      id: 7,
      img: 'https://images-eu.ssl-images-amazon.com/images/I/41+grDTP2FL._AC_UL604_SR604,400_.jpg',
      desc: 'DO EPIC SHIT',
      cost:'345'
    },
    {
      id: 8,
      img: 'https://images-eu.ssl-images-amazon.com/images/I/618XGVFYlwL._AC_UL604_SR604,400_.jpg',
      desc: 'How to win and Influence people',
      cost: '433'
    },
    {
      id: 9,
      img: 'https://images-eu.ssl-images-amazon.com/images/I/61wipuAV0uL._AC_UL604_SR604,400_.jpg',
      desc: 'Chetan Bhagan :400 Days',
      cost:'543'
    },
    {
      id: 10,
      img: 'https://images-eu.ssl-images-amazon.com/images/I/81tEgsxpNZS._AC_UL604_SR604,400_.jpg',
      desc: 'As A Man Thinket',
      cost: '543'
    },
    {
      id: 11,
      img: 'https://images-eu.ssl-images-amazon.com/images/I/91+t0Di07FL._AC_UL302_SR302,200_.jpg',
      desc: 'The Intelligent Investor',
      cost: '743'
    },
    {
      id: 12,
      img: 'https://images-eu.ssl-images-amazon.com/images/I/81lZ-9E4F-S._AC_UL302_SR302,200_.jpg',
      desc: 'The Diary of Young Girl',
      cost: '257'
    },
  ];
  const action = [
    {
      id: 1,
      img: "https://images-eu.ssl-images-amazon.com/images/I/81StezluKUS._AC_UL604_SR604,400_.jpg",
    
    },
    {
      id: 2,
      img: "https://images-eu.ssl-images-amazon.com/images/I/81oZ2suDhdS._AC_UL604_SR604,400_.jpg",
    },
  ];
  const [ar, setArr] = useState(arr);
  return (
    <>
      <button type="button" className="btn btn-info" onClick={() => setArr(arr)}> Books</button>
      <button type="button" className="btn btn-info" onClick={() => setArr(laptop)}> Laptops</button>
      <button type="button" className="btn btn-info" onClick={() => setArr(tshirt)}> Tshirt</button>
      <div>
      {ar.map((i) => {
           
        return (
          <>
            <div  className="responsive">
              <div className="gallery">
                <a target="" href="">
                  <img
                    src={i.img}
                    alt=""
                    width="600"
                    height="400"
                  />
                </a>
                <div className="desc">{i.desc}</div>
                <button type="button">Buy</button>
                <div className="cl1">{i.cost}</div>
              </div>
            </div>
          </>
        );
      })}
      </div>
    </>
  );
}

export default App2;
