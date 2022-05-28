import React from 'react';

const Blogs = () => {
    return (
        <div className='lg:grid grid-cols-3 gap-5 mb-20 mt-40 lg:ml-20'>
            <div class="card w-96 mb-5 bg-base-100 shadow-2xl">
                <div class="card-body">
                    <h1 className="text-base font-serif font-semibold"> 1.How will you improve the performance of a React Application?</h1>
                    <p className='flex flex-col'>
                        <span>i. কমিউনিকেশন স্টেট</span>
                        <span>ii. ডাটা স্টেট</span>
                        <span>iii. কন্ট্রোল স্টেট</span>
                        <span> iv. সেশন স্টেট</span>
                        <span>v. লোকেসন স্টেট</span>
                    </p>
                </div>
            </div>
            <div class="card w-96 mb-5 bg-base-100 shadow-2xl">
                <div class="card-body">
                    <h1 className="text-base font-serif font-semibold"> 2.What are the different ways to manage a state in a React application?</h1>
                    <p className='flex flex-col'>
                        <span>i.যেখানে প্রয়োজন সেখানে উপাদানের অবস্থা স্থানীয় রাখা।</span>
                        <span>ii. অপ্রয়োজনীয় রি-রেন্ডার এর জন্য কম্পোনেন্ট গুলোকে মনে রাখা ।</span>
                        <span>iii.একই কোড বার বার না লিখে একটা হুক বানিয়ে তা ব্যভার করা ।</span>
                        <span>iv.ছবি সমূহের সাইজ ঠিক করা ।</span> </p>
                </div>
            </div>
            <div class="card w-96 mb-5 bg-base-100 shadow-2xl">
                <div class="card-body">
                    <h1 className="text-base font-serif font-semibold"> 3. How does prototypical inheritance work?</h1>
                    <p>প্রোটোটাইপিকাল উত্তরাধিকার অন্য বস্তু থেকে বস্তুর বৈশিষ্ট্য অ্যাক্সেস করার ক্ষমতা বোঝায়।
                        জাভাস্ক্রিপ্ট প্রোটোটাইপ ব্যাবহার করে আমরা নতুন প্রোপার্টি ও মেথড যুক্ত করতে পারি অবজেক্টে কনস্ট্রাক্টরে ।
                        প্রোটোটাইপিকাল ইনহেরিটেন্স আমাদেরকে একটি রেফারেন্স পয়েন্টার ফাংশনের মাধ্যমে একটি জাভাস্ক্রিপ্ট অবজেক্ট থেকে অন্যটিতে বৈশিষ্ট্য বা পদ্ধতিগুলি পুনরায় ব্যবহার করতে দেয়।</p>
                </div>
            </div>
            <div class="card w-96 mb-5 bg-base-100 shadow-2xl">
                <div class="card-body">
                    <h1 className="text-base font-serif font-semibold"> 4.  You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
                    <p>
                        প্রথমে একটা স্টেট ডিক্লিয়ার করতে হবে । প্রোডাক্টস গুলোকে দিয়ে একটি এপিয়াই বানিয়ে সেই এপিয়াই থেকে কে ফেচ করতে হবে ইউজ ইফেক্ট মধ্যে রেখে । তারপর এপিয়াই থেকে পাওয়া ডাটা গুলোকে স্টেটে রাখতে হবে ।
                        একটা ইনপুট ফিল্ড বানিয়ে সেখানে একটি অনচেঞ্জ হ্যন্ডেলার দিতে হবে । তারপর অই হ্যান্ডেলার ফাংশনের ভিতরে ইপুটফিল্ড এর টেক্সট নিতে হবে এবং আবার ফেচ করতে হবে সেই নাম দিয়ে তারপর ইউ আই তে দেখাতে হবে । </p>
                </div>
            </div>
            <div class="card w-96 mb-5 bg-base-100 shadow-2xl">
                <div class="card-body">
                    <h1 className="text-base font-serif font-semibold">5. What is a unit test? Why should write unit tests?</h1>
                    <p>
                        ইউনিট পরীক্ষাগুলি সাধারণত লিখিত এবং সফ্টওয়্যার ডেভ্লোপার দ্বারা প্রচালিত হয় তা নিশ্চিত করার জন্য একটি অ্যাপ্লিকেশনের একটি অংশ  যা ইউনিট" নামে পরিচিত । ইউনিট পরীক্ষার একটি সুবিধা হল যে তারা একটি ফাংশন, ক্লাস বা মেথড আলাদা করে এবং শুধুমাত্র সেই কোডটি পরীক্ষা করে।</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;