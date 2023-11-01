'use client';

import About from '@/components/sessions/About';
import Cards from '@/components/sessions/Cards';
import Carousel from '@/components/sessions/Carousel';
import Footer from '@/components/sessions/Footer';
import Form from '@/components/sessions/Form';
import Header from '@/components/sessions/Header';
import Options from '@/components/sessions/Options';
import OurClients from '@/components/sessions/OurClients';
// import { fetchWrapper } from '@/services/fetchService';
import Products from '@/components/sessions/Products';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

// type PostProps = {
//   id: number;
//   title: string;
// };

// export default async function Home() {
//   const response = await fetchWrapper<{ data: PostProps[] }>('/examples', {
//     method: 'GET',
//   });
//   response ? console.log(response.data) : null;
//   return (
//     <div>
//       {response.data.map((item) => (
//         <div key={item.id}>
//           <h1>{item.title}</h1>
//           <p>{item.id}</p>
//         </div>
//       ))}
//       <p>Teste Jest!</p>
//     </div>
//   );
// }

function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <div>
      <Header />
      <Carousel />
      <Cards />
      <About />
      <Products />
      <OurClients />
      <Options />
      <Form />
      <Footer />
    </div>
  );
}

export default Home;
