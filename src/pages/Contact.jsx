import { useState } from 'react';

export default function Contact() {
  const [result, setResult] = useState('');

  const onSubmit = async event => {
    event.preventDefault();
    setResult('Sending....');
    const formData = new FormData(event.target);

    formData.append('access_key', '83944034-54a5-4933-a6aa-30b92f540363');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult('Form Submitted Successfully');
      event.target.reset();
    } else {
      console.log('Error', data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact-area wrapper">
      <div className="contact-about">
        <div>
          <h4>ঠিকানা :</h4>
          <p>রামপুরা ,বনশ্রী ঢাকা</p>
        </div>
        <div>
          <h4> তথ্যসমূহ:</h4>
          <p>
            {' '}
            কল করুন: 0123456789 (২৪ ঘন্টা খোলা) প্রবাস থেকে পরিবারের কাছে উপহার
            পাঠাতে যোগাযোগ করুন |
          </p>
        </div>
      </div>
      <div className="contact-sec">
        <h2>We would love to hear from you.</h2>
        <form className="form-area wrapper" onSubmit={onSubmit}>
          <label>আপনার নাম</label>
          <input type="name" placeholder="Enter Your Name" required />
          <label>আপনার ইমেইল </label>
          <input type="email" placeholder="Enter Your Email" required />
          <textarea placeholder="Enter Your Message" rows="6" required />
          <button type="submit">Submit Now </button>
        </form>
        <span className="result">{result}</span>
      </div>
    </div>
  );
}
