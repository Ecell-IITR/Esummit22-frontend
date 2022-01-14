import Accordion from '../faq/accordian';

function EventsFaq({ detailsEvents }) {
  return (
    <div className='events_details_faq'>
      {detailsEvents[0].event_faqs.map((faq, id) => (
        <Accordion title={faq.question} content={faq.answer} key={id} />
      ))}
    </div>
  );
}

export default EventsFaq;
