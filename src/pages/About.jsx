import aboutBg from '../assets/bg-about.jpg'
import aboutImg from '../assets/about-img.webp'

export default function About() {
  return (
    <div>
      <img src={aboutBg} alt='about-bg' />
       <div className="about-area wrapper">
            <div className="about-img">
              <img src={aboutImg} alt="about image" />
            </div>
            <div className="about-content">
              <h2>ঘরের বাজার সম্পর্কে</h2>
              <h4>Grown in Nature, Served by Nature</h4>
              <p>
                ‘’ ঘরের বাজার’’ দেশের অন্যতম বিশ্বস্ত প্রতিষ্ঠান! প্রত্যন্ত অঞ্চল থেকে
                নিরাপাদ খাদ্য সংগ্রহ করে,পুষ্টিগুন বজায় রেখে ক্রেতার হাতে পৌছে দেয়াই
                আমাদের মূল উদ্দেশ্য। পুষ্টিকর ও উচ্চমানের পণ্য সরবারহের প্রতিশ্রুতি
                বজায় রেখে এর মধ্যেই গ্রাহকের আস্থা অর্জন করেছে, দেশে নিরাপদ খাদ্যে
                সরবারহকারী অন্যতম বিশ্বস্ত এই প্রতিষ্ঠান। বিশুদ্ধ এবং নিরাপদ খাদ্য
                সরবারহ এবং গ্রাহক সেবা নিশ্চিত করতে আমরা প্রতিশ্রুতিবদ্ধ। প্রত্যন্ত
                অঞ্চল থেকে নিরাপাদ খাদ্য সংগ্রহ করে,পুষ্টিগুন বজায় রেখে ক্রেতার হাতে
                পৌছে দেয়াই আমাদের প্রধান লক্ষ্য।
              </p>
            </div>
          </div>
    </div>
  )
}

