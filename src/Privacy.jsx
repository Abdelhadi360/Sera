import React from 'react';

function Privacy() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-violet">Privacy Policy</h1>

      <p className="mb-4">
        At <span className="font-semibold">Sera</span>, your privacy is important to us. This policy explains how we handle your data when using our app.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">What We Collect</h2>
      <ul className="list-disc list-inside space-y-2 mb-4">
        <li><span className="font-medium">Email address</span> – used only for authentication and account personalization.</li>
        <li><span className="font-medium">Profile picture</span> – shown in the UI for a more personal experience.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">What We Don't Collect</h2>
      <p className="mb-4">
        We <span className="font-bold">do not collect, track, or store</span> any sensitive or private messages, inputs, or content generated in your chat.
        Your conversations remain private and are not saved on our servers.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">No Third-Party Sharing</h2>
      <p className="mb-4">
        We never share your data with any third-party services or companies. Your email and profile image are only used to provide you with a smooth and personalized experience inside the app.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Changes to this Policy</h2>
      <p className="mb-4">
        We may occasionally update this privacy policy. If we do, we'll notify you directly in the app.
      </p>

      <p className="text-sm text-gray-600 mt-10">
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </div>
  );
}

export default Privacy;
