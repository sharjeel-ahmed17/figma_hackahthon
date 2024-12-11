export function FAQs() {
    const faqs = [
      {
        question: "What's your return policy?",
        answer: "We offer a 30-day return policy for all unused items in their original packaging.",
      },
      {
        question: "How long does shipping take?",
        answer: "Shipping typically takes 3-5 business days for domestic orders and 7-14 days for international orders.",
      },
      // Add more FAQs as needed
    ]
  
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div key={index} className="space-y-2">
            <h3 className="text-lg font-semibold">{faq.question}</h3>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    )
  }
  
  