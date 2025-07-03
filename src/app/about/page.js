import Image from 'next/image';
import Organic from './organic';
import Alternative from './alternative';

export default function About() {
  return (
    <>
      <div className="w-full h-64 md:h-80 flex items-center justify-center bg-cover bg-center mb-12" style={{ backgroundImage: 'url(/contact-page/Banner.png)' }}>
        <h2 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">About Us</h2>
      </div>
    <section className="py-16 px-4 bg-primary">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-dark mb-4">Lavy Earth Pvt Ltd</h1>
        <p className="text-lg text-accent mb-8">About Us</p>
        <p className="text-gray-700 mb-6">
          Lavy Earth Pvt Ltd is a parent company founded by Gutam Premchand in 2025, with two distinct divisions: <span className="text-secondary font-semibold">Lavy Earth Spices</span> and <span className="text-secondary font-semibold">Lavy Earth Constructions</span>.
        </p>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-dark mb-2">Lavy Earth Spices</h2>
          <p className="mb-2">Lavy Earth Spices is a food industry division that specializes in providing high-quality spices and food products. Our mission is to bring flavor and aroma to your table with our carefully crafted blends.</p>
          <ul className="list-disc pl-6 mb-2">
            <li>Our Products: We offer a range of spices, spice blends, and food products that cater to various cuisines and tastes.</li>
            <li>Our Story: Our spices are carefully selected, processed, and blended to bring out the best flavors and aromas.</li>
            <li>Our Values: Quality, innovation, customer satisfaction, and integrity are at the core of everything we do.</li>
          </ul>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-dark mb-2">Lavy Earth Constructions</h2>
          <p className="mb-2">Lavy Earth Constructions is a mechanical construction division that specializes in designing, building, and maintaining industrial infrastructure. Our mission is to deliver innovative and efficient construction solutions that meet our clients' needs.</p>
          <ul className="list-disc pl-6 mb-2">
            <li>Our Services: We offer a range of mechanical construction services, including design, fabrication, installation, and maintenance.</li>
            <li>Our Expertise: Our team of experienced professionals has expertise in handling complex construction projects.</li>
            <li>Our Values: Quality, innovation, customer satisfaction, and integrity are at the core of everything we do.</li>
          </ul>
        </div>
       
      </div>
    </section>
    <Organic />
    <Alternative />
    </>
  );
}
