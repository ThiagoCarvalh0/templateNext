// import { fetchWrapper } from '@/services/fetchService';
import About from '@/components/sessions/About';
import Cards from '@/components/sessions/Cards';
import Carousel from '@/components/sessions/Carousel';
import Footer from '@/components/sessions/Footer';
import Form from '@/components/sessions/Form';
import Header from '@/components/sessions/Header';
import OurClients from '@/components/sessions/OurClients';
import Products from '@/components/sessions/Products';

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
  return (
    <div>
      <Header />
      <Carousel />
      <Cards />
      <About />
      <Products />
      <OurClients />
      <Form />
      <Footer />
    </div>
  );
}

export default Home;
