const QuoteBox = ({ quote, author, changeQoute }) => {
  const linkTwitter = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
  return (
    <div className='card-box'>
      <i class='fas fa-quote-left'></i>
      <div className='quote'>
        <p className='text-quote'>{quote}</p>
        <p className='text-auhtor'>~ {author}</p>
      </div>
      <div className='card-btns'>
        <a href={linkTwitter} target='_blank' rel='noopener noreferrer'>
          <i class='fab fa-twitter'></i>
        </a>
        <i class='fas fa-angle-right' onClick={changeQoute}></i>
      </div>
    </div>
  );
};

export default QuoteBox;
