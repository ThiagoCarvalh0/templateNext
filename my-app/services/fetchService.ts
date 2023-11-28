export async function fetchWrapper<T = unknown>(
  input: RequestInfo | URL,
  init?: RequestInit | undefined
) {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_URL_API_CMS}/${input}`,
    init
  );
  const result = await data.json();
  return result as T;
}
