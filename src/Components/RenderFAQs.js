import parse from 'html-react-parser';

function RenderFAQs(props) {
  return props.items.map((item, index) => {
    return (
      <article key={index} className="message">
        <div className="message-header">
          {parse(item.question)}
        </div>
        <div className="message-body is-collapsible is-active">
          <div className="message-body-content">
            {parse(item.answer)}
          </div>
        </div>
      </article>
    );
  })
}

export default RenderFAQs;