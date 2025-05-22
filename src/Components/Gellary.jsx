import React from 'react';

const Gellary = () => {
    return (
        <div>
            <p className='font-bold text-3xl py-10'>Plants Gallery</p>
            <section className="py-6 dark:bg-gray-100">
	<div className="container flex flex-col justify-center p-4 mx-auto">
		<div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2  border-green-300 border-2">
			<img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://i.ibb.co/BV5VRztP/kara-eads-Eb-LX7o-Ro4v-I-unsplash.jpg" />
			<img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://i.ibb.co/Gv3F43WM/mockup-graphics-m-UVHhv-BYZ0-unsplash.jpg" />
			<img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://i.ibb.co/KxnxbG8S/kara-eads-x-Ry-L63-Aw-ZFE-unsplash.jpg" />
			<img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://i.ibb.co/BV5VRztP/kara-eads-Eb-LX7o-Ro4v-I-unsplash.jpg" />
		</div>
	</div>
</section>
        </div>
    );
};

export default Gellary;