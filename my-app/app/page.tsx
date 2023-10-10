import { fetchWrapper } from '@/services/fetchService';
import Image from 'next/image';

type PostProps = {
  id: number;
  title: string;
};

export default async function Home() {
  const response = await fetchWrapper<{ data: PostProps[] }>('/examples', {
    method: 'GET',
  });
  response ? console.log(response.data) : null;
  return (
    <div>
      {response.data.map((item) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <p>{item.id}</p>
        </div>
      ))}
      <p>Teste Jest!</p>
    </div>
  );
}
