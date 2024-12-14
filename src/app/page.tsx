import Navbar from '@/components/navbar';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="flex justify-center bg-gray-100 min-h-screen pt-16">
        <div className="container bg-white rounded-lg shadow-lg p-8 text-center border border-black">
          <h1 className="text-2xl font-bold text-gray-800">Home Page</h1>
          <p className="text-gray-600 mt-4">Home Page Description</p>
        </div>
      </main>
    </>
  );
};

export default Home;
