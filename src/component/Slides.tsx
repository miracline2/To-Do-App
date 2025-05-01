import '../App.css'

interface ISlideProps{
    slides: { title: string; text: string }[];
}

const Slides:React.FC<ISlideProps>= ({ slides }) => {
  return (
    <div>
      <div id="navigation" className="text-center">
        <button data-testid="button-restart" className="small outlined">
          Restart
        </button>
        <button data-testid="button-prev" className="small">
          Prev
        </button>
        <button data-testid="button-next" className="small">
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
      {slides.map((slide, index) => (
        <div key={index} id="slide" className="card text-center">
          <h1 data-testid="title">{slide.title}</h1>
          <p data-testid="text">{slide.text}</p>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Slides;
