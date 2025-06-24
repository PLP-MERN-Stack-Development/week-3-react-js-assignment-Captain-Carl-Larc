import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold">Welcome to Captain Carl's Task Manager!</h1>
        <p className="mt-4 text-lg">Manage your tasks efficiently and effectively.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;