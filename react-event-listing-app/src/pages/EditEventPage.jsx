import { useState } from 'react';
import { useParams, useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditEventPage = ({ updateEventSubmit }) => {
    const event = useLoaderData();
    const [title, setTitle] = useState(event.title);
    const [type, setType] = useState(event.type);
    const [location, setLocation] = useState(event.location);
    const [description, setDescription] = useState(event.description);
    const [date, setDate] = useState(event.date);
    const [organizerName, setOrganizerName] = useState(event.organizer.name);
    const [organizerDescription, setOrganizerDescription] = useState(event.organizer.description);
    const [contactEmail, setContactEmail] = useState(event.organizer.contactEmail);
    const [contactPhone, setContactPhone] = useState(event.organizer.contactPhone);

    const navigate = useNavigate();
    const { id } = useParams();

    const submitForm = (e) => {
        e.preventDefault();

        const updatedEvent = {
            title,
            type,
            location,
            description,
            date,
            organizer: {
                name: organizerName,
                description: organizerDescription,
                contactEmail,
                contactPhone,
            },
        };

        updateEventSubmit(updatedEvent);

        toast.success('Event Updated Successfully');

        return navigate(`/events/${id}`);
    };

    return (
        <section className='bg-[#FAEBD7]'>
            <div className='container m-auto max-w-2xl py-24'>
                <div className='bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0'>
                    <form onSubmit={submitForm}>
                        <h2 className='text-3xl text-center font-semibold mb-6'>Update Event</h2>

                        <div className='mb-4'>
                            <label
                                htmlFor='type'
                                className='block text-gray-700 font-bold mb-2'
                            >
                                Event Type
                            </label>
                            <select
                                id='type'
                                name='type'
                                className='border rounded w-full py-2 px-3'
                                required
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                            >
                                <option value='Arts'>Arts</option>
                                <option value='Cultural'>Cultural</option>
                                <option value='Technology'>Technology</option>
                                <option value='Music'>Music</option>
                                <option value='Educational'>Educational</option>
                                <option value='Workshop'>Workshop</option>
                                <option value='Conference'>Conference</option>
                                <option value='Sports'>Sports</option>
                                <option value='Food & Drink'>Food & Drink</option>
                                <option value='Health & Wellness'>Health & Wellness</option>
                            </select>
                        </div>

                        <div className='mb-4'>
                            <label className='block text-gray-700 font-bold mb-2'>
                                Event Listing Name
                            </label>
                            <input
                                type='text'
                                id='title'
                                name='title'
                                className='border rounded w-full py-2 px-3 mb-2'
                                placeholder='eg. Creative Workshops Series'
                                required
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className='mb-4'>
                            <label
                                htmlFor='description'
                                className='block text-gray-700 font-bold mb-2'
                            >
                                Description
                            </label>
                            <textarea
                                id='description'
                                name='description'
                                className='border rounded w-full py-2 px-3'
                                rows='4'
                                placeholder='Add any event duties, expectations, requirements, etc'
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                        </div>

                        <div className='mb-4'>
                            <label
                                htmlFor='date'
                                className='block text-gray-700 font-bold mb-2'
                            >
                                Event Date and Time
                            </label>
                            <input
                                type='datetime-local'
                                id='date'
                                name='date'
                                className='border rounded w-full py-2 px-3'
                                required
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </div>

                        <div className='mb-4'>
                            <label className='block text-gray-700 font-bold mb-2'>
                                Location
                            </label>
                            <input
                                type='text'
                                id='location'
                                name='location'
                                className='border rounded w-full py-2 px-3 mb-2'
                                placeholder='Organizer Location'
                                required
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            />
                        </div>

                        <h3 className='text-2xl mb-5'>Organizer Info</h3>

                        <div className='mb-4'>
                            <label
                                htmlFor='organizer'
                                className='block text-gray-700 font-bold mb-2'
                            >
                                Organizer Name
                            </label>
                            <input
                                type='text'
                                id='organizer'
                                name='organizer'
                                className='border rounded w-full py-2 px-3'
                                placeholder='Organizer Name'
                                value={organizerName}
                                onChange={(e) => setOrganizerName(e.target.value)}
                            />
                        </div>

                        <div className='mb-4'>
                            <label
                                htmlFor='organizer_description'
                                className='block text-gray-700 font-bold mb-2'
                            >
                                Organizer Description
                            </label>
                            <textarea
                                id='organizer_description'
                                name='organizer_description'
                                className='border rounded w-full py-2 px-3'
                                rows='4'
                                placeholder='What does your organizer do?'
                                value={organizerDescription}
                                onChange={(e) => setOrganizerDescription(e.target.value)}
                            ></textarea>
                        </div>

                        <div className='mb-4'>
                            <label
                                htmlFor='contact_email'
                                className='block text-gray-700 font-bold mb-2'
                            >
                                Contact Email
                            </label>
                            <input
                                type='email'
                                id='contact_email'
                                name='contact_email'
                                className='border rounded w-full py-2 px-3'
                                placeholder='Email address for organizers'
                                required
                                value={contactEmail}
                                onChange={(e) => setContactEmail(e.target.value)}
                            />
                        </div>
                        <div className='mb-4'>
                            <label
                                htmlFor='contact_phone'
                                className='block text-gray-700 font-bold mb-2'
                            >
                                Contact Phone
                            </label>
                            <input
                                type='tel'
                                id='contact_phone'
                                name='contact_phone'
                                className='border rounded w-full py-2 px-3'
                                placeholder='Optional phone for organizers'
                                value={contactPhone}
                                onChange={(e) => setContactPhone(e.target.value)}
                            />
                        </div>

                        <div>
                            <button
                                className='bg-[#EA7E5D hover:bg-[#FF6347]  text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline'
                                type='submit'
                            >
                                Update Event
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default EditEventPage
