import Card from './Card';
import { Link } from 'react-router-dom';

const HomeCards = () => {
    return (
      <section className='py-4'>
        <div className='container-xl lg:container m-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
            <Card>
              <h2 className='text-2xl font-bold'>For Event Seekers</h2>
              <p className='mt-2 mb-4'>
              Dive into a vibrant world of gatherings, festivals, and workshops. Start your journey to unforgettable experiences.
              </p>
              <Link
                href='/events'
                className='inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700'
              >
                Browse Event
              </Link>
            </Card>
            <Card bg='bg-[#EA7E5D]/50'>
              <h2 className='text-2xl font-bold'>For Event Organizers</h2>
              <p className='mt-2 mb-4'>
              List your event and connect with enthusiasts who are just as passionate. Find your crowd, effortlessly.
              </p>
              <Link
                to='/add-event'
                className='inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-[#FF6347]'
              >
                Add Event
              </Link>
            </Card>
          </div>
        </div>
      </section>
    );
  };
  export default HomeCards;