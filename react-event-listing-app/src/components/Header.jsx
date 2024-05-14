const Header = ({
    title = 'Discover Your Next Adventure',
    subtitle = 'Explore, Connect, and Experience the Best Events Around You',
  }) => {
    return (
      <section className='bg-[#EA7E5D] py-20 mb-4'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
          <div className='text-center'>
            <h1 className='text-4xl font-extrabold text-white sm:text-5xl md:text-6xl'>
              {title}
            </h1>
            <p className='my-4 text-xl text-white'>{subtitle}</p>
          </div>
        </div>
      </section>
    );
  };
  export default Header;