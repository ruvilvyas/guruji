import React from 'react';

export default function Contact() {
  return (
    <div className="bg-white text-gray-800 font-mono p-8 rounded-lg shadow-lg max-w-2xl mx-auto my-16 border border-gray-300">
      <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
        Contact Me
      </h2>

      <pre className="bg-gray-100 p-6 rounded-lg overflow-x-auto text-sm leading-7">
<span className="text-pink-500">{"{"}</span>
  {"\n"}
  &nbsp;&nbsp;<span className="text-yellow-600">"name"</span>: <span className="text-blue-600">"Dhruvil Vyas"</span>,{"\n"}
  &nbsp;&nbsp;<span className="text-yellow-600">"email"</span>: <span className="text-blue-600">"dhruvilvyas03@gmail.com"</span>,{"\n"}
  &nbsp;&nbsp;<span className="text-yellow-600">"phone"</span>: <span className="text-blue-600">"9979089031"</span>,{"\n"}
  &nbsp;&nbsp;<span className="text-yellow-600">"address"</span>: <span className="text-blue-600">"India"</span>,{"\n"}
  &nbsp;&nbsp;<span className="text-yellow-600">"github"</span>: <span className="text-blue-600">"<a href='https://github.com/ruvilvyas' target='_blank' rel='noopener noreferrer' className="underline text-blue-600">ruvilvyas</a>"</span>{"\n"}
<span className="text-pink-500">{"}"}</span>
      </pre>
    </div>
  );
}
