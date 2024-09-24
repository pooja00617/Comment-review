import React, { useState } from 'react';
import { IoIosStar } from 'react-icons/io';

function App() {
  const [review, setReview] = useState(0);
  const [feedback, setFeedback] = useState({});
  const [listfb, setListfb] = useState([]);
  


  const handleStar = (rating) => {
    setReview(rating);
    setFeedback(prevFeedback => ({ ...prevFeedback, review: rating }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback(prevFeedback => ({ ...prevFeedback, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setListfb(prevList => [...prevList, feedback]);
    setReview(0);
    setFeedback({});
  };

  return (
    <>
    <div className="container">
      <div className='card' style={{ textAlign: 'center',backgroundColor:"#e8e8f5" }}>
        <h2>Comment & Review</h2>
        <h5>How was the quality of the call?</h5>
        <form onSubmit={handleSubmit}>
          {[1, 2, 3, 4, 5].map((v) => (
            <IoIosStar
              key={v}
              color={review >= v ? 'yellow' : 'gray'}
              onMouseOver={() => handleStar(v)}
            />
          ))}
          <br />
          <br />
          <textarea
            name='feedback'
            cols={30}
            rows={10}
            placeholder='Enter your message'
            onChange={handleChange}
            value={feedback.feedback || ''}
          />
          <br /><br />
          
          <button type='submit' className='btn'>Submit</button>
        </form>
        <br />
        <br />
        <table className="table" border={1} align='center'>
          <thead>
            <tr>
              <th>Review</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {listfb.map((v1, i) => (
              <tr key={i}>
                <td>
                  {[1, 2, 3, 4, 5].map((v) => (
                    <IoIosStar key={v} color={v1.review >= v ? 'yellow' : 'gray'} />
                  ))}
                </td>
                <td>{v1.feedback}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </>
  );
}

export default App;
