import React from 'react';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const Gellary = () => {
    return (
        <div>
            <p className='font-bold text-3xl py-10'>Plants Gallery</p>
            <section className="py-6 dark:bg-gray-100">
                <div className="container flex flex-col justify-center p-4 mx-auto">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
                        <img
                            src="https://i.ibb.co/BV5VRztP/kara-eads-Eb-LX7o-Ro4v-I-unsplash.jpg"
                            className="object-cover w-full dark:bg-gray-500 aspect-square"
                            data-tooltip-id="gallery-tip"
                            data-tooltip-content="A cozy indoor plant setup"
                        />
                        <img
                            src="https://i.ibb.co/Gv3F43WM/mockup-graphics-m-UVHhv-BYZ0-unsplash.jpg"
                            className="object-cover w-full dark:bg-gray-500 aspect-square"
                            data-tooltip-id="gallery-tip"
                            data-tooltip-content="Elegant plant on a minimal shelf"
                        />
                        <img
                            src="https://i.ibb.co/KxnxbG8S/kara-eads-x-Ry-L63-Aw-ZFE-unsplash.jpg"
                            className="object-cover w-full dark:bg-gray-500 aspect-square"
                            data-tooltip-id="gallery-tip"
                            data-tooltip-content="Potted green plant in natural light"
                        />
                        <img
                            src="https://i.ibb.co/BV5VRztP/kara-eads-Eb-LX7o-Ro4v-I-unsplash.jpg"
                            className="object-cover w-full dark:bg-gray-500 aspect-square"
                            data-tooltip-id="gallery-tip"
                            data-tooltip-content="Plant collection by the window"
                        />
                    </div>
                    {/* Add the Tooltip component once with the matching ID */}
                    <Tooltip id="gallery-tip" place="top" effect="solid" />
                </div>
            </section>
        </div>
    );
};

export default Gellary;
