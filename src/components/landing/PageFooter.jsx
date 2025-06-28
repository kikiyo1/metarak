import React from 'react';

const PageFooter = () => {
  return (
    <footer className="bg-gray-900 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="text-2xl font-bold mb-4">SOFTWARE HADESOLUTION</div>
          <p className="text-gray-400 mb-6">Revolusi sistem kasir untuk masa depan bisnis yang lebih cerah</p>
          
          <div className="flex justify-center gap-8 text-sm text-gray-400">
            <span>© 2024 HADESOLUTION. All rights reserved.</span>
            <span>•</span>
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PageFooter;